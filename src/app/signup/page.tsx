import Link from "next/link";

import { Mail } from "lucide-react";

import { Background } from "@/components/background";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const StartAProject = () => {
  return (
    <Background>
      <section className="py-28 lg:pt-44 lg:pb-32">
        <div className="container">
          <div className="flex flex-col gap-4">
            <Card className="mx-auto w-full max-w-sm">
              <CardHeader className="flex flex-col items-center space-y-0 text-center">
                <p className="mb-2 text-2xl font-bold">Start a project</p>
                <p className="text-muted-foreground">
                  Send a short brief — scope, timeline, budget range — and
                  I&apos;ll get back to you with next steps.
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3">
                  <Button asChild className="w-full">
                    <Link href="/contact">
                      <Mail className="mr-2 size-4" />
                      Go to contact form
                    </Link>
                  </Button>
                </div>
                <div className="text-muted-foreground mx-auto mt-8 flex justify-center gap-1 text-sm">
                  <p>Just have a question first?</p>
                  <Link href="/faq" className="text-primary font-medium">
                    Check the FAQ
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Background>
  );
};

export default StartAProject;
