import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { checkAdminAuth } from "@/lib/admin-auth";
import type { BookingStatus } from "@/lib/database.types";

const VALID_STATUSES: BookingStatus[] = ["new", "confirmed", "cancelled"];

// PATCH /api/bookings/[id] — обновить статус заявки
export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  // Проверяем авторизацию администратора
  const authError = checkAdminAuth(req);
  if (authError) return authError;

  try {
    const body = await req.json();
    const { status } = body as { status: BookingStatus };

    if (!VALID_STATUSES.includes(status)) {
      return NextResponse.json(
        { error: "Недопустимый статус" },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from("bookings")
      .update({ status })
      .eq("id", params.id)
      .select()
      .single();

    if (error) {
      return NextResponse.json(
        { error: "Не удалось обновить статус" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, booking: data });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Внутренняя ошибка сервера" },
      { status: 500 }
    );
  }
}
