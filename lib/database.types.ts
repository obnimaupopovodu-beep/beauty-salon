export type BookingStatus = "new" | "confirmed" | "cancelled";

export interface Booking {
  id: string;
  name: string;
  phone: string;
  service: string;
  preferred_date: string | null;
  preferred_time: string | null;
  comment: string | null;
  status: BookingStatus;
  created_at: string;
}

export interface Database {
  public: {
    Tables: {
      bookings: {
        Row: Booking;
        Insert: Omit<Booking, "id" | "created_at"> & {
          id?: string;
          created_at?: string;
        };
        Update: Partial<Omit<Booking, "id" | "created_at">>;
      };
    };
  };
}
