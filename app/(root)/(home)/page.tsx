import QuestionCard from "@/components/Cards/QuestionCard";
import HomeFilters from "@/components/Home/HomeFilters";
import Filter from "@/components/shared/Filter";
import NoResult from "@/components/shared/NoResult";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import Link from "next/link";
import React from "react";

const questions = [
  {
    _id: "1",
    title: "Cascading deletes in SQLAlchemy?",
    tags: [
      { _id: "1", name: "Python" },
      { _id: "2", name: "SQL" },
    ],
    author: {
      _id: "101",
      name: "Rit Narayan",
      picture: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    upvotes: 10,
    views: 154549754,
    answers: [
      { _id: "1", content: "Answer 1" },
      { _id: "2", content: "Answer 2" },
    ],
    createdAt: new Date("2025-01-13T12:00:00.000Z"),
  },
  {
    _id: "2",
    title: "How to center a div?",
    tags: [
      { _id: "3", name: "CSS" },
      { _id: "4", name: "HTML" },
    ],
    author: {
      _id: "102",
      name: "Vanshaj",
      picture: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    upvotes: 12,
    views: 101,
    answers: [{ _id: "3", content: "Answer 1" }],
    createdAt: new Date("2025-01-13T12:00:00.000Z"),
  },
  {
    _id: "3",
    title: "How do I use Express as a custom server in Next.js?",
    tags: [
      { _id: "5", name: "Next.js" },
      { _id: "6", name: "Express" },
    ],
    author: {
      _id: "101",
      name: "Rit Narayan",
      picture: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    upvotes: 150000000,
    views: 150,
    answers: [
      { _id: "4", content: "Answer 1" },
      { _id: "5", content: "Answer 2" },
    ],
    createdAt: new Date("2025-01-13T12:00:00.000Z"),
  },
];

const Home = () => {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900 ">All Questions</h1>

        <Link href="/ask-question" className="flex justify-end max-sm:w-full ">
          <Button className="primary-gradient min-h-[46px]">
            Ask a Question
          </Button>
        </Link>
      </div>
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route="/"
          iconPosition="left"
          imgsrc="/assets/icons/search.svg"
          placeholder="Search for questions"
          otherClasses="flex-1"
        />
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>
      <HomeFilters />
      <div className="mt-10 flex w-full flex-col gap-6">
        {/* looping through questions  */}
        {questions.length > 0 ? (
          questions.map((question) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResult
            title=" There's no question to show ."
            description=" Be the first to break the silence! Ask a question and start the
        discussion. Our query could be next big thing others learn from.Get
        involved"
            link="/ask-question"
            linktitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
};

export default Home;
