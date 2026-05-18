import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { bookingSchema } from "@/lib/validations";
import { sendTelegramNotification } from "@/lib/telegram";

// POST /api/bookings — создать новую запись
export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Валидация через Zod
    const parsed = bookingSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Ошибка валидации", details: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const data = parsed.data;

    // Сохраняем в Supabase
    const { data: booking, error } = await supabase
      .from("bookings")
      .insert([{
        name: data.name,
        phone: data.phone,
        service: data.service,
        preferred_date: data.preferred_date ?? null,
        preferred_time: data.preferred_time ?? null,
        comment: data.comment ?? null,
        status: "new",
      }])
      .select()
      .single();

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json(
        { error: "Не удалось сохранить запись" },
        { status: 500 }
      );
    }

    // Отправляем уведомление в Telegram (не блокируем ответ)
    sendTelegramNotification(booking).catch(console.error);

    return NextResponse.json({ success: true, booking }, { status: 201 });
  } catch (err) {
    console.error("Unexpected error:", err);
    return NextResponse.json(
      { error: "Внутренняя ошибка сервера" },
      { status: 500 }
    );
  }
}
