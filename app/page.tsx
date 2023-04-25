`"use client"`;
import CityPicker from "@/components/CityPicker";
import { Card, Divider, Subtitle, Text } from "@tremor/react";

// If your page contains frequently updating data, and you don’t need to pre-render the data, you can fetch the data on the client side.

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#394F68] to-[#183B7E] p-10 flex flex-col justify-center items-center  ">
      <Card className="max-w-4xl mx-auto">
        <Text className="text-6xl font-bold text-center mb-10 ">
          Weather AI
        </Text>
        <Subtitle className="text-xl text-center">
          Powered by Open AI, Next.js 13.3, Tailwind CSS, Tremor 2.0{" "}
        </Subtitle>{" "}
        <Divider className="my-10 bg-black" />
        <Card className="bg-gradient-to-br from-[#394F68] to-[#183B7E]">
          {/* City picker component */}
          <CityPicker />
        </Card>
      </Card>
    </div>
  );
}
