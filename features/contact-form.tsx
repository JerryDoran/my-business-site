import Bounded from "@/components/bounded";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import logo from "@/assets/icon.png";

export default function ContactForm({ title }: { title: string }) {
  return (
    <Bounded className="">
      <h1 className="mb-8 text-balance text-4xl font-semibold sm:text-7xl">
        <span className="heading-gradient">Contact</span> me
      </h1>
      <Card className="glass-container w-full border-none bg-gradient-to-br from-gray-800 to-gray-950 p-4 text-white">
        <CardContent className="mt-5">
          <form
            action="https://getform.io/f/alljdzga"
            className="mt-5 flex flex-col gap-y-4"
            method="POST"
          >
            <div className="mb-6 flex flex-col items-center gap-4 md:flex-row">
              <Image src={logo} alt="logo" width={40} height={40} />
              <h2 className="prose prose-invert text-base font-semibold max-md:text-center md:text-2xl">
                {title}
              </h2>
            </div>

            <div className="flex flex-col justify-between gap-4 md:flex-row">
              <div className="grid flex-1 space-y-2">
                <Label>Name</Label>
                <Input
                  className="h-12 text-base"
                  name="name"
                  placeholder="Enter your name"
                />
              </div>
              <div className="grid flex-1 space-y-2">
                <Label>Email</Label>
                <Input
                  className="h-12 text-base"
                  name="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="grid flex-1 space-y-2">
                <Label>Phone</Label>
                <Input
                  className="h-12 text-base"
                  name="phone"
                  placeholder="Enter your phone (optional)"
                />
              </div>
            </div>

            <div className="grid space-y-2">
              <Label>Message</Label>
              <Textarea
                className="h-32 text-base"
                placeholder="Please share some details about your needs..."
                name="message"
              />
            </div>
            <Button className="text-xl uppercase" type="submit">
              Get your website
            </Button>
          </form>
        </CardContent>
      </Card>
    </Bounded>
  );
}
