import React from "react";

import { Timeline } from "@/components/ui/timeline";
import Link from "next/link";
import DynamicImage from "@/components/DynamicImage/dynamic-image";

type TimelineEntry = {
    title: string;
    content: React.ReactNode;
};

const Projects = () => {
    const data = [
        {
            title: "SJEC Placement Repository",
            content: (
                <div>
                    <h1 className="text-neutral-800 dark:text-neutral-200 lg:text-3xl md:text-sm font-fira_sans mb-4 md:mb-8 font-extrabold">
                        <Link href="https://placement-cell-website.vercel.app/"></Link>
                    </h1>
                    <ul className="text-neutral-800 dark:text-neutral-200 lg:text-lg md:text-sm font-fira_code mb-4 md:mb-8 font-thin">
                        <li className="mt-2">
                            SJEC Placement Repository is a web application being built for The Training &
                            Placement Cell.
                        </li>
                        <li className="mt-2">Work commenced in mid-December and is under development.</li>
                        <li className="mt-2">
                            The goal of this project is to streamline the recruitment process of the placement
                            drives that take place in the campus.
                        </li>
                        <li className="mt-2">
                            The centralized database will allow students to easily view all the upcoming
                            placement drives and register for the same.
                        </li>
                    </ul>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <DynamicImage
                            url="https://sceptix-club.github.io/website-assets/projects/plc1.avif"
                            alt="startup template"
                            containerClass="rounded-lg object-cover h-40 sm:h-32 md:h-44 lg:h-60 w-full shadow-lg"
                        />
                        <DynamicImage
                            url="https://sceptix-club.github.io/website-assets/projects/plc5.avif"
                            alt="startup template"
                            containerClass="rounded-lg object-cover h-40 sm:h-32 md:h-44 lg:h-60 w-full shadow-lg"
                        />
                        <DynamicImage
                            url="https://sceptix-club.github.io/website-assets/projects/plc6.avif"
                            alt="startup template"
                            containerClass="rounded-lg object-cover h-40 sm:h-32 md:h-44 lg:h-60 w-full shadow-lg"
                        />
                        <DynamicImage
                            url="https://sceptix-club.github.io/website-assets/projects/plc7.avif"
                            alt="startup template"
                            containerClass="rounded-lg object-cover h-40 sm:h-32 md:h-44 lg:h-60 w-full shadow-lg"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "Tree GeoTag",
            content: (
                <div>
                    <h1 className="text-neutral-800 dark:text-neutral-200 lg:text-3xl md:text-sm font-fira_sans mb-4 md:mb-8 font-extrabold">
                        <Link href="https://cisf-website.vercel.app/"></Link>
                    </h1>
                    <ul className="text-neutral-800 dark:text-neutral-200 lg:text-lg md:text-sm font-fira_code mb-4 md:mb-8 font-thin">
                        <li className="mt-2">
                            Tree GeoTag software, being developed for CISF Mangalore’s environmental
                            initiative, consists of a web application as well as an Android application.
                        </li>
                        <li className="mt-2">
                            The project started off in mid-January and is prototype ready.
                        </li>
                        <li className="mt-2">
                            The main goal is to track a database of plants planted by CISF and provide
                            accountability of the same to their higher officials.
                        </li>
                        <li className="mt-2">
                            The website features an admin dashboard for overall complete details of all the
                            plants.
                        </li>
                        <li className="mt-4">
                            It also features a public portal where users can access specific plant information
                            by scanning a QR code attached to the plant.
                        </li>
                    </ul>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <DynamicImage
                            url="https://sceptix-club.github.io/website-assets/projects/cisf1.avif"
                            alt="startup template"
                            containerClass="rounded-lg object-cover h-40 sm:h-32 md:h-44 lg:h-60 w-full shadow-lg"
                        />
                        <DynamicImage
                            url="https://sceptix-club.github.io/website-assets/projects/cisf2.avif"
                            alt="startup template"
                            containerClass="rounded-lg object-cover h-40 sm:h-32 md:h-44 lg:h-60 w-full shadow-lg"
                        />
                        <DynamicImage
                            url="https://sceptix-club.github.io/website-assets/projects/cisf3.avif"
                            alt="startup template"
                            containerClass="rounded-lg object-cover h-40 sm:h-32 md:h-44 lg:h-60 w-full shadow-lg"
                        />
                        <div className="flex">
                        <DynamicImage
                            url="https://sceptix-club.github.io/website-assets/projects/geotag1.avif"
                            alt="startup template"
                            containerClass="rounded-lg h-96 sm:h-32 ml-14 md:h-44 lg:h-60 w-32 shadow-lg"
                        />
                        <DynamicImage
                            url="https://sceptix-club.github.io/website-assets/projects/geotag2.avif"
                            alt="startup template"
                            containerClass="rounded-lg h-96 sm:h-32 ml-8 md:h-44 lg:h-60 w-32 shadow-lg"
                        />
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "HackToFuture 2.0 website",
            content: (
                <div>
                    <h1 className="text-neutral-800 dark:text-neutral-200 lg:text-3xl md:text-sm font-fira_sans mb-4 md:mb-8 font-extrabold">
                        <Link href="https://htf-2-0.vercel.app/"></Link>
                    </h1>
                    <ul className="text-neutral-800 dark:text-neutral-200 lg:text-lg md:text-sm font-fira_code mb-4 md:mb-8 font-thin">
                        <li className="mt-2">
                            The HackToFuture 2.0 website was created for promotion and registration purposes.
                        </li>
                        <li className="mt-2">
                            Development began in the second week of January, with the site launching on
                            January 23rd featuring registration functionality.
                        </li>
                        <li className="mt-2">
                            The website provided comprehensive information about the hackathon, facilitated
                            team registrations, and served as a platform for frequent participant updates.
                        </li>
                        <li className="mt-2">
                            Throughout the registration period, the website was regularly maintained and
                            experienced minimal downtime.
                        </li>
                    </ul>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <DynamicImage
                            url="https://sceptix-club.github.io/website-assets/projects/htf1.avif"
                            alt="startup template"
                            containerClass="rounded-lg object-cover h-40 sm:h-32 md:h-44 lg:h-60 w-full shadow-lg"
                        />
                        <DynamicImage
                            url="https://sceptix-club.github.io/website-assets/projects/htf2.avif"
                            alt="startup template"
                            containerClass="rounded-lg object-cover h-40 sm:h-32 md:h-44 lg:h-60 w-full shadow-lg"
                        />
                        <DynamicImage
                            url="https://sceptix-club.github.io/website-assets/projects/htf3.avif"
                            alt="startup template"
                            containerClass="rounded-lg object-cover h-40 sm:h-32 md:h-44 lg:h-60 w-full shadow-lg"
                        />
                        <DynamicImage
                            url="https://sceptix-club.github.io/website-assets/projects/htf4.avif"
                            alt="startup template"
                            containerClass="rounded-lg object-cover h-40 sm:h-32 md:h-44 lg:h-60 w-full shadow-lg"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "HTF Volunteer App",
            content: (
                <div>
                    <h1 className="text-neutral-800 dark:text-neutral-200 lg:text-3xl md:text-sm font-fira_sans mb-4 md:mb-8 font-extrabold"></h1>
                    <ul className="text-neutral-800 dark:text-neutral-200 lg:text-lg md:text-sm font-fira_code mb-4 md:mb-8 font-thin">
                        <li className="mt-2">
                            The HackToFuture Volunteer app was created to manage participant registrations,
                            track team details, and handle meal reservations.
                        </li>
                        <li className="mt-2">
                            It included features for counting teams, listing team names and members, and
                            monitoring breakfast, lunch, and dinner reservations for all event stakeholders.
                        </li>
                        <li className="mt-2">
                            Development started in the second week of January and took approximately 3 weeks
                            to complete.
                        </li>
                        <li className="mt-2">The app was finalized and ready just in time for the event.</li>
                    </ul>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <DynamicImage
                            url="https://sceptix-club.github.io/website-assets/projects/app1.avif"
                            alt="startup template"
                            containerClass="rounded-lg object-cover h-20 sm:h-32 md:h-44 lg:h-60 w-full shadow-lg"
                        />
                        <DynamicImage
                            url="https://sceptix-club.github.io/website-assets/projects/app2.avif"
                            alt="startup template"
                            containerClass="rounded-lg object-cover ml-32 h-20 sm:h-32 md:h-44 lg:h-60 w-32 shadow-lg"
                        />
                        <DynamicImage
                            url="https://sceptix-club.github.io/website-assets/projects/app3.avif"
                            alt="startup template"
                            containerClass="rounded-lg object-cover ml-32 h-20 sm:h-32 md:h-44 lg:h-60 w-32 shadow-lg"
                        />
                        <DynamicImage
                            url="https://sceptix-club.github.io/website-assets/projects/app4.avif"
                            alt="startup template"
                            containerClass="rounded-lg object-cover ml-32 h-20 sm:h-32 md:h-44 lg:h-60 w-32 shadow-lg"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: " HTF Jury WebApp",
            content: (
                <div>
                    <h1 className="text-neutral-800 dark:text-neutral-200 lg:text-3xl md:text-sm font-fira_sans mb-4 md:mb-8 font-extrabold"></h1>
                    <ul className="text-neutral-800 dark:text-neutral-200 lg:text-lg md:text-sm font-fira_code mb-4 md:mb-8 font-thin">
                        <li className="mt-2">
                            The Jury App was made so that the judges on HackToFuture could efficiently judge
                            and score the teams of participants.{" "}
                        </li>
                        <li className="mt-2">
                            The judges could leave comments, ratings and suggestions for each team
                            specifically.
                        </li>
                        <li className="mt-2">
                            {" "}
                            The scores were automatically calculated and presented in real time as the scores
                            were entered.
                        </li>
                        <li className="mt-2">
                            The Jury app allowed the entire event to be held paperless and completely digital.
                        </li>
                    </ul>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <DynamicImage
                            url="https://sceptix-club.github.io/website-assets/projects/app11.avif"
                            alt="startup template"
                            containerClass="rounded-lg object-cover ml-32 h-20 sm:h-32 md:h-44 lg:h-60 w-32 shadow-lg"
                        />
                        <DynamicImage
                            url="https://sceptix-club.github.io/website-assets/projects/app12.avif"
                            alt="startup template"
                            containerClass="rounded-lg object-cover ml-32 h-20 sm:h-32 md:h-44 lg:h-60 w-32 shadow-lg"
                        />
                        <DynamicImage
                            url="https://sceptix-club.github.io/website-assets/projects/app13.avif"
                            alt="startup template"
                            containerClass="rounded-lg object-cover ml-32 h-20 sm:h-32 md:h-44 lg:h-60 w-32 shadow-lg"
                        />
                        <DynamicImage
                            url="https://sceptix-club.github.io/website-assets/projects/app14.avif"
                            alt="startup template"
                            containerClass="rounded-lg object-cover ml-32 h-20 sm:h-32 md:h-44 lg:h-60 w-32 shadow-lg"
                        />
                    </div>
                </div>
            ),
        },
    ];

    return (
        <div className="w-full font-fira_sans">
            <Timeline data={data} />
        </div>
    );
};

export default Projects;
