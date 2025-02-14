import { Blockquote, Code, Em, Quote, Separator, Strong, Text } from "@radix-ui/themes"
import { ReactElement } from "react"

export type ProjectSection =  {
    title: string,
    html: ReactElement
}

export type ProjectData = {
    title: string,
    thumbnailPath: string,
    id: number,
    subtitle: string
    sections: ProjectSection[]
}

export const PROJECTS: ProjectData[] = [
    {
        title: "Portfolio Website",
        subtitle: "The website you're looking at right now!",
        thumbnailPath: "/portfolio.png",
        id: 0,
        sections: [
            {
                title: "Why did I spend so much time on this?",
                html: (
                    <Blockquote style={{ textIndent: "2em" }}>
                        I began this project in January of 2025, and my initial goal was to have a portfolio
                        page that stood out amongst an ocean of (almost) identical portfolio pages.
                        I decided that in order to do that I would have to include some sort of customization
                        within the website that caught the eye of whoever was looking at it.
                        I figured that maybe having the biggest block of text at the start of the page say something
                        specific to the viewer might encourage them to keep reading. Maybe after that including some information
                        about what skills the viewer is looking for as well as everything they want right on the
                        landing page. Because I feel that having a ton of text listing all my skills and the names of anyone who could possibly
                        be viewing this page, which I hope is a long list, but realistically is probably just a few select people might be overwhelming.
                    </Blockquote>
                )
            },
            {
                title: "The Stack!",
                html: (
                    <Blockquote>
                        <Text style={{ textIndent: "2em" }} as="p">
                            As you can probably tell by now, my favorite language is <Strong>Rust</Strong>;
                            while I could go on for pages about why that is, I&apos;ll spare you the details and just
                            let that statement stand on its own. Inversely, you could infer that with <Strong>Rust </Strong>
                            being my favorite language, I might not be the biggest fan of loosely
                            typed languages such as  <Strong>Javascript</Strong>. And while that may be true, the
                            state of <Strong>Rust</Strong> GUI libraries/frameworks is not exactly mature, so I had to go against
                            my nature and use a <Strong>Javascript</Strong> based framework.
                        </Text>
                        <br/>
                        Ok, now on to the actual stack:
                        <br/>
                        <br/>
                        <Strong>The Backend!</Strong>
                        <ul style={{ textIndent: "0px", marginTop: "0px" }}>
                            <li>Rust (of course)</li>
                            <li>Tokio Stack (with axum HTTP server)</li>
                            <li>SQLite (via sqlx)</li>
                        </ul>
                        <Text style={{ textIndent: "2em" }} as="p">
                            So, why did I choose these?
                            Well, I have used axum before and I am a huge fan of the tower service
                            architecture that it is built on which made it a no-brainer.
                            As for SQLite, I have noticed that in the past I trended towards overplanning
                            for small projects and falling in to the all to familiar trap of <Strong>premature optimization</Strong>;
                            so instead of going with some sharded, clustered, contanerized, [insert more industry buzzwords] postgres
                            setup, I decided to keep it simple. I landed on sqlx as the driver because I tend to avoid ORMs in Rust
                            and sqlx provides nice <Code>query!()</Code> and <Code>query_as!()</Code> macros
                            which do compile-time checks on your queries based on an environmental database connection.
                            Sqlx is also database agnostic, so if I ever did decide that this website needs more concurrent users
                            than the population of the planet I could switch to the aforementioned postgres setup.
                        </Text>
                        <br/>
                        <Strong>The Frontend!</Strong>
                        <ul style={{ textIndent: "0px", marginTop: "0px" }}>
                            <li>NextJS</li>
                            <li>React</li>
                            <li><del>TailwindCSS</del> Radix</li>
                        </ul>
                        <Text style={{ textIndent: "2em" }} as="p">
                            ...I know I said I didn&apos;t like Javascript, but here we are. At the very least
                            I used Typescript, which while it doesn&apos;t actually <Em>enforce</Em> types it does
                            make my IDE flash scary colors at me. Anyways, I ended up with NextJS because I heard that
                            it could do &#10024;Server Side Rendering&#10024; which sounded fun to me.
                            As for the styling spot which TailwindCSS was perhaps unfairly robbed of, we have
                            Radix. I started this project with Tailwind, and coming from almost purely backend development
                            I was not a huge fan of the whole 80 character classname for every div thing so I looked for other options.
                            Radix Themes stood out because everything looked pretty and all their examples were super simple.
                            In hindsight, I think I just need to practice CSS in general, and I would probably switch back to Tailwind if
                            I had to change frontend libraries again.
                        </Text>
                    </Blockquote>
                )
            },
            {
                title: "Infrastructure",
                html: <Blockquote>
                    <Text style={{ textIndent: "2em" }} as="p">
                        For all of my previous projects, my deployment plan has been <Quote>Yeah, I&apos;ll just clone the repo on whatever machine needs this.</Quote>{" "}
                        Which, for a while, I have acknowledged was not a good strategy, but for this project I figured
                        I should actually try my hand at the famed <Strong>CI/CD</Strong> pipeline. I began with just trying to get github actions
                        to run some unit tests and calling it a day, but I quickly fell down the rabit hole of <Strong>Docker</Strong> and all the wonders
                        of <Strong>Containerization</Strong>. I started with writing a dockerfile for both my frontend and backend repos, and quickly ran into some issues with the backend.
                        I was having issues getting my code to compile because the sqlx crate runs compile-time checks on your queries, but it requires a 
                        database connection so I had to do some weird stuff with caching sqlx check results and whatnot, but in the end it worked out just fine.
                        After that I moved on to writing github actions pipelines to run the docker builds and deploy them to a VPS hosted by hostinger.
                        I just have a deploy user that the github actions ssh into and pulls the docker images and runs a docker compose job.
                        I ended up using Docker Compose because I am running the frontend and backend in different containers.
                        In the github action, I have the docker image push to docker hub with the tag <Code>latest</Code> and a tag containing the commit hash so I can roll back if needed.
                    </Text>
                </Blockquote>
            },
            {
                title: "How It Works",
                html: <Blockquote>
                    <Text style={{ textIndent: "2em" }} as="p">
                        When you first open the website, there is a Nextjs middleware that checks if you have an <Code>authorization</Code> cookie.
                        If you don&apos;t, it will request a jwt from the backend that references either <Code>NOREF</Code> or whatever reference code was added in (<Code>http://aidenvoth.com/[REFERENCE_CODE]</Code>).
                        However, if you already have an authorization cookie it will replace it with a new one if you try to visit the website with a different reference code in the URL.
                        The JWT encodes a unique UUID, a reference code, and a permission level (Normal or Admin).
                        All data about a single reference can be read by somebody with a valid authorization token, but they cannot mutate or see a whole list of the references unless they have a permission level of Admin.
                        The backend is really just for handling the jwts and the database of skills and references.
                        This could have been easily done in Nextjs as well because it can also be configured to act as an API, but I wanted at least some Rust in the project so I didn&apos;t go insane.
                    </Text>
                </Blockquote>
            },
            {
                title: "The Admin Page",
                html: <Blockquote>
                    <Text style={{ textIndent: "2em" }} as="p">
                        I also created an admin dashboard to create/delete/modify references and skills so I didn&apos;t have to reach into the server every time I wanted to do any of those things.
                        However, I was worried about leaving this admin dashboard unprotected because most internet crimes are crimes of opportunity and security through obscurity (hiding the url) is security.
                        So, when I switched to JWTs I had them encode a user permission level of Normal or Admin.
                        Someone with a valid authorization JWT can request to get the jwt upgraded, but only with a valid body that contains the password.
                        I was gonna do some fancy password hashing and rotating passwords but I got lazy and ended up just doing a plaintext check and loading the password from an environment variable.
                        So, when you try to enter the admin dash you will not be able to make any requests or view the dashboard unless you have a JWT that says you are an admin.
                        If the frontend detects that the backend denied an admin level request to you it will ask you for a password and try to upgrade the JWT with the password provided.
                        If it is successfully upgraded, it will set the cookie on your browser and redirect you to the admin page where you will be able to access all functions of the admin dashboard as long as you have a valid admin JWT.
                        The admin dash is protected on both the frontend and the backend.
                        This means that not only will the frontend prevent you from trying to even get to the admin dashboard in the first place if you don&apos;t have a valid JWT,
                        the backend will also return NOT AUTHORIZED if you try to make any mutation or bulk-view requests without a valid Admin JWT.
                    </Text>
                </Blockquote>
            },
            {
                title: "What I Would Do Differently",
                html: <Blockquote>
                    <Text>
                        <Text style={{ textIndent: "2em" }} as="p">
                            For this project, the main goal was to get something out relatively quickly while also utilizing a wide variety of skills/technologies.
                            Because of this sped-up timeline, there are a few design decisions that, if I were to rewrite this in the future, I would change.
                        </Text>
                        <br/>
                        <Strong>Coupled Database Code</Strong>
                        <Separator my="2"/>
                        <Text style={{ textIndent: "2em" }} as="p">
                            In the backend, all of the database queries are directly written out in the route handler function, so verification logic and any other business logic is hard to differentiate.
                            I would probably resolve this by having some database struct or something that would handle queries without having to write them all out directly in the handler.
                        </Text>
                        <br/>
                        <Strong>Questionable Cookie Practice</Strong>
                        <Separator my="2"/>
                        <Text style={{ textIndent: "2em" }} as="p">
                            Right now, with all api requests, even though you provide a JWT that encodes the reference string of whoever is making the request, it still requires you provide a reference string.
                            I did this because I made a last minute switch to JWT and I did not feel like doing extra validation checks or routes to handle when a Normal user wants to get data on a different reference (bad) vs when an Admin user wants to get data on a different reference (ok).      
                        </Text>
                        <br/>
                        <Strong>Not Using NextJS</Strong>
                        <Separator my="2"/>
                        <Text style={{ textIndent: "2em" }} as="p">
                            As I have mentioned many times by this point, I am not a huge fan of JS or TS.
                            I really enjoy writing Rust and I believe that utilizing HTMX to write a website such as this would be a fun experience because I could avoid the ambiguity of NextJS server/client interactions.
                            I understand that NextJS is designed to make SSR and client side interaction seamless for the user and the developer, but I like having more granular control over SSR and CSR.
                            I feel as though implementing a single page app in htmx with rust and having (almost) everything be rendered server-side would be an awesome experience.
                            I also recently learned of AlpineJS which could handle any interaction that needs to be strictly client-side that htmx might not be equipped to deal with.
                        </Text>
                        <br/>
                        <Strong>Sticking to TailwindCSS or SCSS/Sass</Strong>
                        <Separator my="2"/>
                        <Text style={{ textIndent: "2em" }} as="p">
                            I don&apos;t know CSS very well.
                            This project has definitely been the most I have learned about CSS at one time but I think making the switch from tailwind to Radix was not a good idea.
                            I was mainly dissapointed with how my styling was looking, and Radix Themes looked really easy and convinient.
                            As a common theme, it is designed to make the developer experience much easier, but I found that I prefer having the fine-grained control over my CSS.
                            I actually found myself writing custom CSS (style objects) on a lot of the builtin Radix components despite the docs taking subtle jabs at developers who need to write custom CSS on top of their components.
                        </Text>
                    </Text>
                </Blockquote>
            },
            {
                title: "Thank you for reading!",
                html: <Blockquote>
                    <Text style={{ textIndent: "2em" }} as="p">
                        I don&apos;t have a lot of experience doing technical writing, or any writing for that matter so I really appreciate you sticking through this wordvomit.
                        I hope you have a nice day!
                    </Text>
                </Blockquote>
            }
        ]
    },
    {
        title: "State Machine Framework",
        thumbnailPath: "/shambot.png",
        id: 1,
        subtitle: "Logic framework for FRC5907",
        sections: [
            {
                title: "What is it?",
                html: <Blockquote>
                    <Text style={{ textIndent: "2em" }} as="p">
                        Well, I&apos;m glad you asked!
                        The <Strong>State Machine Framework (SMF)</Strong> was created as a better way to organize, describe, and orchestrate robot behavior on a subsystem scale.
                    </Text>
                </Blockquote>
            },
            {
                title: "Why is it?",
                html: <Blockquote>
                    <Text style={{ textIndent: "2em" }} as="p">
                        First a bit of background. WPI, the providers of the standard first Java library that almost all teams provide a command-based project template that comes
                        with a built in event loop, command scheduler, subsystems (which can be referenced as requirements in commands) and a whole bunch of other niceties.
                        While using the base template is fine, because of the inexperienced nature of our team members (and our lack of training ability) we ran into lots of speghetified code
                        and disjointed dependencies which induced race conditions and all sorts of other issues that are hard to track down.
                        Because of this, we implemented a hacky solution that we dubbed the &quot;Priority Command System (PCS)&quot; which allowed you to assign a priority to each command that could be run
                        and the scheduler would prioritize commands based on their, well, priority value instead of running multiple related commands at once in order to avoid race conditions.
                        This worked for a while, but we ran in to many of the same issues, and I figured that the nature of our problem was closer to design philosophy and not strictly that the framework we used couldn&apos;t automatically avoid race conditions.
                        TLDR: we should not have been creating race conditions in the first place.
                    </Text>
                </Blockquote>
            },
            {
                title: "Initial Design",
                html: <Blockquote>
                    <Text style={{ textIndent: "2em" }} as="p">
                        I started this project in the offseason after &apos;22 season because our code was a mess frankly that year and I felt as though I needed to do something about it.
                        I know I mentioned earlier that the issue was a design philosphy issue, but due to our limited time and personell allocated to training, my goal was to create a framework that would
                        inform and advise as much of the design philosophy as I could.
                        <br/>
                        So, here were my main points.
                        <ul>
                            <li>Localize subsystem behavior as much as possible</li>
                            <li>Avoid allowing for race conditions</li>
                            <li>Be expressive specifically for subsystem behavior</li>
                        </ul>

                        And from those, I landed on state machines.
                        Immediately after learning about state machines, I became somewhat obsessed because of how they seemed to match my problem domain almost exactly.
                        Being a highschooler, I skipped most of the research on how to properly do state machines and ended on a possibly dubious implementation but we&apos;ll get to that in a bit.
                    </Text>
                </Blockquote>
            },
            {
                title: "What are subsystems?",
                html: <Blockquote>
                    <Text style={{ textIndent: "2em" }} as="p">
                        From a bird&apos;s eye view, a robot has a collection of subsystems (which may also have subsystems as their own) and each of those subsystems
                        should behave, from their point of view, independently. They should be orchestrated by their parent subsystem.
                        For example, a robot that is designed to pick up and launch disks might include a drivetrain subsystem, intake subsystem, and launcher subsystem.
                        So, in the default command based framework, each subsystem would be allowed to schedule any command to act on any other subsystem or itself (including parent subsystems).
                        This, in my opinion and experience, causes a bunch of issues when you have inexperienced developers.
                    </Text>
                </Blockquote>
            },
            {
                title: "How Does SMF Work?",
                html: <Blockquote>
                    <Text style={{ textIndent: "2em" }} as="p">
                        Under SMF, command scheduling and canceling is managed by a parent class (StateMachine) which is to be extended by all subsystems in the robot.
                        Each subsystem defines an enum that contains all possible states that the subsystem can be in as well as behavior for those states (a command or composition of commands) and finally which transitions between those states are valid.
                        Think of the states as elements in a finite set and the transitions as a relation graph for that set.
                        When a transition is defined a command or composition of commands can be provided to be run for that specific defined transition or set of transitions.
                        This was intended to be the main functionality initially, but over the course of the next couple seasons I ended up with the philosophy that any transition behavior that takes more than a very small amount of constant time should in itself be a state.
                        There is also some failsafe behavior behind the scenes to help in the case of multiple transitions being scheduled and other such edge cases.
                    </Text>
                </Blockquote>
            },
            {
                title: "How does it do in practice?",
                html: <Blockquote>
                    <Text style={{ textIndent: "2em" }} as="p">
                        Over the course of the two years that I used it (they didn&apos;t stop, I just graduated and they still use it!), it solved a lot of our issues.
                        It made planning out subsystems and subsystem behavior in advance a lot easier.
                        In the &apos;24 season, I was almost entirely done with the code of the robot (minus tuning) by the time we had the bot finalized which is a massive improvement compared to it being the last thing to be started.
                        It helped me enforce the complete planning out of all behavior of each subsystem before having the bot built and splitting complex actions or sequences of actions into discrete states for simplification.
                        For example, in &apos;24 we had an indexing system that would intake a foam ring from the back or front and hold on to it/position it in exactly the right spot and eject/slowly feed the ring to the shooter when requested.
                        This sounded difficult but was very simple when split up into a few states, namely HOLDING_RING, INTAKE_FRONT, INTAKE_BACK, INDEXING, etc.
                        This also isolated all behavior into a single section in a single subsystem.
                        Gone were the days of one subsystem&apos;s rogue scheduling of a command on another subsystem wreaking havoc on the rest of the bot and taking days to find.
                        Whenever we had an issue we were able to narrow it down to a single state&apos;s faliure within a single subsystem and the issue could be resolved by editing only the code inside of that state which was usually not a lot (maybe 50loc MAX) compared to combing through the entire codebase to find all commands that could have been scheduled on the subsystem in question.
                    </Text>
                </Blockquote>
            },
            {
                title: "Behind The Scenes",
                html: <Blockquote>
                    <Text style={{ textIndent: "2em" }} as="p">
                        This may sound like a complicated system, but in reality it was very simple.
                        There is one class that the user of the framework interacts with (StateMachine) and they extend it and provide implementations for one method and an enum of states.
                        That one method is determineSelf() which is called when the subsystem is enabled and asks for the user to set the state to whatever state it should be in at that moment (IDLE in most cases).
                        Other than that the framework provides some niceties like flag states which can indicate different things to the orchestrating subsystem.
                        For example, one pattern we often used was a TRACKING or ALIGNING state which would show the READY flag for the orchestrating machine to see and decide what to do next or if an action could be taken.
                        Each subsystem can also be assigned children which it is in charge of orchestrating.
                        For me, this is another layer of seperation of concerns.
                        I like the orchestration model because feeding input through to individual subsystems can be kind of ugly when that input should do different things based on the state of other subsystems.
                        Usually, we end up with a RobotContainer state machine that orchestrates all of the robot&apos;s subsystems and then those subsystems may have some children of their own to further break out behavior.
                        This ends up in pretty-looking code (in my opinion) where joystick inputs are fed to the robot container and it just transitions overall states which manage all of the states of its children.
                        So, we just end up with overall game states for the robot container like AUTONOMOUS, TRAVERSING (traveling across the field), SCORING, and some other game-specific ones.
                        And because of this, when you look at what each button does on the joystick most of them really just change the overall state of the robot which is very easy to understand for new team members and even non programmers.
                        The states are oftentimes expressive enough for someone to be able to look at the code and understand how it operates even if they don&apos;t have much programming experience.
                    </Text>
                </Blockquote>
            },
            {
                title: "Concluding Thoughts",
                html: <Blockquote>
                    <Text style={{ textIndent: "2em" }} as="p">
                        Despite its relatively small size (~800loc), this is definitely one of my proudest projects.
                        I love that my team still uses it even when I&apos;m not there to beg them to, and the new programmers (both sophomores) tell me all the reasons they like it.
                        There are definitely some questionable decisions in the logic, but overall it works and it works well.
                        I really like how expressive it is and how it <del>forces</del> encourages my design philosophy of single-concern behavior.
                        And believe it or not, they actually plan out the bot&apos;s behavior before it&apos;s built! Shocker!
                        <br/>
                        <br/>
                        Well, thank you for reading this ramble session!
                    </Text>
                </Blockquote>
            }
        ]
    }
]