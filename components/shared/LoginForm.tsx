import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { useRouter } from "next/navigation";

export function LoginForm({
  close,
  setSelelectedPage,
}: {
  close: () => void;
  setSelelectedPage: Dispatch<
    SetStateAction<"reset" | "login" | "forgot" | "otp">
  >;
}) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  const HanleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/branch/dashboard/analytics");
  };
  return (
    <Card className="mx-auto max-w-sm rounded-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="grid gap-4" onSubmit={HanleSubmit}>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              <h1
                className="ml-auto inline-block text-sm cursor-pointer underline"
                onClick={() => setSelelectedPage("forgot")}
              >
                Forgot your password?
              </h1>
            </div>
            <Input
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              required
            />
          </div>
          <Button type="submit" className="w-full py-6">
            Login
          </Button>
        </form>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link onClick={close} href="/branch-apply" className="underline">
            Apply Branch
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
