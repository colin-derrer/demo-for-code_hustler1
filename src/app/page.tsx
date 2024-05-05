"use client";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Slider } from "@/components/ui/slider";
import {
  FacebookIcon,
  Home,
  InstagramIcon,
  MaximizeIcon,
  PlayIcon,
  SkipForwardIcon,
  TwitterIcon,
  Volume2Icon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Details() {
  return (
    <main className="">
      <header className="relative min-h-[65vh]">
        <Container className="pt-[10%] text-white">
          <h1 className="text-6xl font-medium">Donghau Industries</h1>
          <p>
            Lipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          </p>
        </Container>
        <Image
          alt="Donghua"
          height="1920"
          width="1080"
          src="https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg"
          className="absolute inset-0 w-screen h-full object-cover bg-red-500 pointer-events-none -z-10 brightness-50"
        />
      </header>
      <section id="details" className="my-10">
        <Container className="flex gap-2 lg:flex-row flex-col">
          <Card className="max-w-[1000px]">
            <CardHeader>
              <CardTitle>Synopsis</CardTitle>
              <CardDescription>Overview of the episode</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </CardContent>
            <CardFooter>
              <p className="underline text-muted-foreground">View related</p>
            </CardFooter>
          </Card>
          <aside className="grow">
            <Card>
              <CardHeader>
                <CardTitle className="text-base uppercase">
                  Related videos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul>
                  <li className="space-y-2">
                    <div className="flex gap-4 items-center border rounded-lg overflow-clip">
                      <Image
                        src="/placeholder.svg"
                        width="80"
                        height="80"
                        alt="Example image"
                        className="bg-green-500"
                      />
                      <div>
                        <h3 className="text-lg fond-bold">Video Title 1</h3>
                        <p>Video description</p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-center border rounded-lg overflow-clip">
                      <Image
                        src="/placeholder.svg"
                        width="80"
                        height="80"
                        alt="Example image"
                        className="bg-green-500"
                      />
                      <div>
                        <h3 className="text-lg fond-bold">Video Title 1</h3>
                        <p>Video description</p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-center border rounded-lg overflow-clip">
                      <Image
                        src="/placeholder.svg"
                        width="80"
                        height="80"
                        alt="Example image"
                        className="bg-green-500"
                      />
                      <div>
                        <h3 className="text-lg fond-bold">Video Title 1</h3>
                        <p>Video description</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <p className="underline text-muted-foreground">View related</p>
              </CardFooter>
            </Card>
          </aside>
        </Container>
      </section>
      <section id="more-info" className="my-10">
        <Container className="">
          <Card>
            <CardHeader>
              <CardTitle>Production Details</CardTitle>
            </CardHeader>
            <CardContent className="grid lg:grid-cols-3 grid-cols-1 gap-4">
              <div className="space-y-2">
                <h3 className="font-medium text-2xl">Main Cast</h3>
                <ul className="space-y-2">
                  <li>
                    <div className="flex gap-4 items-center border rounded-lg overflow-clip">
                      <Image
                        src="/placeholder.svg"
                        width="80"
                        height="80"
                        alt="Example image"
                        className="bg-yellow-500"
                      />
                      <div>
                        <h4 className="text-lg fond-bold">Person 1</h4>
                        <p>Role in Donghau</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-4 items-center border rounded-lg overflow-clip">
                      <Image
                        src="/placeholder.svg"
                        width="80"
                        height="80"
                        alt="Example image"
                        className="bg-yellow-500"
                      />
                      <div>
                        <h4 className="text-lg fond-bold">Person 1</h4>
                        <p>Role in Donghau</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-4 items-center border rounded-lg overflow-clip">
                      <Image
                        src="/placeholder.svg"
                        width="80"
                        height="80"
                        alt="Example image"
                        className="bg-yellow-500"
                      />
                      <div>
                        <h4 className="text-lg fond-bold">Person 1</h4>
                        <p>Role in Donghau</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium text-2xl">Supporting Cast</h3>
                <ul className="space-y-2">
                  <li>
                    <div className="flex gap-4 items-center border rounded-lg overflow-clip">
                      <Image
                        src="/placeholder.svg"
                        width="80"
                        height="80"
                        alt="Example image"
                        className="bg-yellow-500"
                      />
                      <div>
                        <h4 className="text-lg fond-bold">Person 1</h4>
                        <p>Role in Donghau</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-4 items-center border rounded-lg overflow-clip">
                      <Image
                        src="/placeholder.svg"
                        width="80"
                        height="80"
                        alt="Example image"
                        className="bg-yellow-500"
                      />
                      <div>
                        <h4 className="text-lg fond-bold">Person 1</h4>
                        <p>Role in Donghau</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-4 items-center border rounded-lg overflow-clip">
                      <Image
                        src="/placeholder.svg"
                        width="80"
                        height="80"
                        alt="Example image"
                        className="bg-yellow-500"
                      />
                      <div>
                        <h4 className="text-lg fond-bold">Person 1</h4>
                        <p>Role in Donghau</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium text-2xl">Production</h3>
                <ul className="space-y-2">
                  <li>
                    <div className="flex gap-4 items-center border rounded-lg overflow-clip">
                      <Image
                        src="/placeholder.svg"
                        width="80"
                        height="80"
                        alt="Example image"
                        className="bg-yellow-500"
                      />
                      <div>
                        <h4 className="text-lg fond-bold">Person 1</h4>
                        <p>Role in Donghau</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-4 items-center border rounded-lg overflow-clip">
                      <Image
                        src="/placeholder.svg"
                        width="80"
                        height="80"
                        alt="Example image"
                        className="bg-yellow-500"
                      />
                      <div>
                        <h4 className="text-lg fond-bold">Person 1</h4>
                        <p>Role in Donghau</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-4 items-center border rounded-lg overflow-clip">
                      <Image
                        src="/placeholder.svg"
                        width="80"
                        height="80"
                        alt="Example image"
                        className="bg-yellow-500"
                      />
                      <div>
                        <h4 className="text-lg fond-bold">Person 1</h4>
                        <p>Role in Donghau</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </Container>
      </section>
      <section id="video" className="my-20 bg-black">
        <Container className="py-10">
          <div className="aspect-video">
            <iframe
              width="fill"
              height="fill"
              src="https://www.youtube.com/embed/mO5GYWsFWP8"
              title="Level Up Your TypeScript: Conquering as vs. satisfies vs. Type Annotations"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="h-full w-full"
            />
          </div>
        </Container>
      </section>
      <section id="history" className="my-10">
        <Container>
          <Card>
            <CardHeader>
              <CardTitle>History</CardTitle>
              <CardDescription>Your recently watched videos</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
              {Array.from({ length: 4 }).map((_, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardHeader className="">
                    <CardTitle>Episode {index + 1}</CardTitle>
                  </CardHeader>
                  <CardContent className="">
                    <p>Card Content</p>
                  </CardContent>
                </Card>
              ))}
            </CardContent>
          </Card>
        </Container>
      </section>
    </main>
  );
}
