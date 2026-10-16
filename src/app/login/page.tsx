import Link from "next/link";

import { Calendar, Mail } from "lucide-react";

import { Background } from "@/components/background";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const BookACall = () => {
  return (
    <Background>
      <section className="py-28 lg:pt-44 lg:pb-32">
        <div className="container">
          <div className="flex flex-col gap-4">
            <Card className="mx-auto w-full max-w-sm">
              <CardHeader className="flex flex-col items-center space-y-0 text-center">
                <p className="mb-2 text-2xl font-bold">Book a call</p>
                <p className="text-muted-foreground">
                  Tell me a bit about your project and I&apos;ll follow up to
                  find a time that works.
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3">
                  <Button asChild className="w-full">
                    <a href="mailto:randriamifydina@gmail.com?subject=Let%27s%20talk">
                      <Mail className="mr-2 size-4" />
                      Email me to schedule
                    </a>
                  </Button>
                  <Button variant="outline" asChild className="w-full">
                    <Link href="/contact">
                      <Calendar className="mr-2 size-4" />
                      Use the contact form
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Background>
  );
};

export default BookACall;
