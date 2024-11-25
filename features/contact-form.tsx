"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import logo from "@/assets/icon.png";
import { cn } from "@/lib/utils";
import { sendEmailAction } from "@/actions/send-email";
import { useRef, useState } from "react";
import { StringMap } from "@/types/contact";
import toast from "react-hot-toast";

export default function ContactForm({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  const [errors, setErrors] = useState<StringMap>({});
  const formRef = useRef<HTMLFormElement>(null);

  async function handleFormSubmit(formData: FormData) {
    const { errors, successMessage } = await sendEmailAction(formData);

    if (successMessage) {
      // setErrors({});
      toast.success(successMessage);
      formRef.current?.reset();
    }
    setErrors(errors || {});

    console.log(errors, successMessage);
  }
  return (
    <div className={cn("mt-10 w-full", className)}>
      <h1 className="mb-8 text-balance text-4xl font-semibold sm:text-7xl">
        <span className="heading-gradient">Contact</span> me
      </h1>
      <Card className="glass-container w-full border-none bg-gradient-to-br from-gray-800 to-gray-950 px-0 py-4 text-white">
        <CardContent className="mt-5 px-3">
          <form
            action={handleFormSubmit}
            className="mt-5 flex flex-col gap-y-2"
            ref={formRef}
          >
            <div className="mb-6 flex flex-col items-center gap-4 md:flex-row">
              <Image src={logo} alt="logo" width={40} height={40} />
              <h2 className="prose prose-invert text-base font-semibold max-md:text-center md:text-2xl">
                {title}
              </h2>
            </div>

            <div className="gap flex flex-col md:flex-row md:gap-4">
              <div className="grid flex-1 space-y-2">
                <Label>Name</Label>
                <Input
                  type="text"
                  className="h-12 text-base"
                  name="name"
                  id="name"
                  placeholder="Enter your name"
                  required
                />
                <div className="min-h-8">
                  {errors?.name && (
                    <p className="text-sm text-red-500">{errors.name}</p>
                  )}
                </div>
              </div>
              <div className="grid flex-1 space-y-2">
                <Label>Email</Label>
                <Input
                  className="h-12 text-base"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  required
                />
                <div className="min-h-8">
                  {errors?.email && (
                    <p className="text-sm text-red-500">{errors.email}</p>
                  )}
                </div>
              </div>
              {/* <div className="grid flex-1 space-y-2">
                <Label>Phone</Label>
                <Input
                  className="h-12 text-base"
                  name="phone"
                  placeholder="Enter your phone (optional)"
                />
                <div className="min-h-8">
                  {errors?.phone && (
                    <p className="text-sm text-red-500">{errors.phone}</p>
                  )}
                </div>
              </div> */}
            </div>

            <div className="grid space-y-2">
              <Label>Message</Label>
              <Textarea
                className="h-32 text-base"
                placeholder="Please share some details about your needs..."
                name="message"
                required
              />
              <div className="min-h-8">
                {errors?.message && (
                  <p className="text-sm text-red-500">{errors.message}</p>
                )}
              </div>
            </div>
            {/* <button className="bg-blue-500 py-4">Get Your Website</button> */}
            <Button className="h-16 text-xl uppercase" type="submit">
              Get your website
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
