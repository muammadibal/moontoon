import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link } from "@inertiajs/react";

export default function Login() {
    return <>
    <Head title="Sign Up"/>
    <div className="mx-auto max-w-screen min-h-screen bg-black text-white md:px-10 px-3">
        <div className="fixed top-[-50px] hidden lg:block">
            <img src="/images/signup-image.png"
                className="hidden laptopLg:block laptopLg:max-w-[450px] laptopXl:max-w-[640px]" alt=""/>
        </div>
        <div className="py-24 flex laptopLg:ml-[680px] laptopXl:ml-[870px]">
            <div>
                <img src="/images/moonton-white.svg" alt=""/>
                <div className="my-[70px]">
                    <div className="font-semibold text-[26px] mb-3">
                        Sign Up
                    </div>
                    <p className="text-base text-[#767676] leading-7">
                        Explore our new movies and get <br/>
                        the better insight for your life
                    </p>
                </div>
                <form className="w-[370px]">
                    <div className="flex flex-col gap-6">
                        <TextInput
                            label="Full Name"
                            placeholder="Your fullname..."
                            type="text"
                        />
                        <TextInput
                            label="Email Address"
                            placeholder="Email Address"
                            type="email"
                        />
                        <TextInput
                            label="Password"
                            placeholder="Password"
                            type="password"
                        />
                    </div>
                    <div className="grid space-y-[14px] mt-[30px]">
                        <PrimaryButton type="button" variant="primary">
                            <span className="text-base font-semibold">
                                Sign Up
                            </span>
                        </PrimaryButton>
                        <Link href={route("prototype.login")}>
                            <PrimaryButton type="button" variant="light-outline">
                                <span className="text-base text-white">
                                    Sign In to My Account
                                </span>
                            </PrimaryButton>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </>
}
