import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";

export function OtpPage() {
  return (
    <Card className="mx-auto max-w-sm rounded-sm">
      <CardHeader>
        <CardTitle className="text-2xl">OTP Varification</CardTitle>
        <CardDescription>
          Enter your email below to get OTP. after submitting the OTP you could
          add a new password
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
            <InputOTPGroup>
              <InputOTPSlot className="p-7 font-bold text-3xl" index={0} />
              <InputOTPSlot className="p-7 font-bold text-3xl" index={1} />
              <InputOTPSlot className="p-7 font-bold text-3xl" index={2} />
              <InputOTPSlot className="p-7 font-bold text-3xl" index={3} />
              <InputOTPSlot className="p-7 font-bold text-3xl" index={4} />
            </InputOTPGroup>
          </InputOTP>

          <Button type="submit" className="w-full py-6">
            Submit
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
