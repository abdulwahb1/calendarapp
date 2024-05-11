// This is the main page of the app. It should render the Booking component.
import Booking from "@/components/Booking/Booking";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { User } from "@supabase/supabase-js";
import { supabase } from "@/utils/supabase";

export default function Home() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>();

  useEffect(() => {
    const getProfile = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user) {
        setUser(user);
        router.push("/BookingPage");
        console.log(user);
      } else {
        router.push("/login");
      }
    };

    getProfile();
  }, [router]);

  if (!user) {
    // Currently loading asynchronously User Supabase Information
    return null;
  }

  return (
    <section className="flex flex-col items-center">
      <div>
        <h1>My Calendar App</h1>
      </div>
    </section>
  );
}
