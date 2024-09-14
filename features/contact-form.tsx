import Bounded from "@/components/bounded";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm() {
  return (
    <Bounded className="mt-8">
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
            <h2 className="prose prose-invert mb-6 text-2xl font-semibold">
              Let’s kick off a chat about your website project!
            </h2>
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
