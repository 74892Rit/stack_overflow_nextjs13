import Image from "next/image";
import Link from "next/link";
import React from "react";
import RenderTag from "./RenderTag";

const hotquestions = [
  { _id: "1", title: "how do i use express as a custom server in next?" },
  { _id: "2", title: "how do i take hints from next?" },
  { _id: "3", title: "what is the syntax for play around role?" },
  { _id: "4", title: "what to write before terminal end command?" },
];
const popularTags = [
  {
    _id: "1",
    name: "Javascript",
    totalQuestions: 5,
  },
  {
    _id: "2",
    name: "NextJs",
    totalQuestions: 7,
  },
  {
    _id: "3",
    name: "ReactJs",
    totalQuestions: 9,
  },
  {
    _id: "4",
    name: "MongoDb",
    totalQuestions: 13,
  },
  {
    _id: "5",
    name: "Redux",
    totalQuestions: 10,
  },
];
const RightSidebar = () => {
  return (
    <section className=" background-light900_dark200 light-border custom-scrollbar sticky right-0 top-0 flex h-screen w-[350px] flex-col  overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden ">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotquestions.map((question) => (
            <Link
              href={`/question/${question._id}`}
              key={question._id}
              className="flex cursor-pointer items-center justify-between gap-7"
            >
              <p className="body-medium text-dark500_light700">
                {question.title}
              </p>
              <Image
                src="/assets/icons/chevron-right.svg"
                alt="chevron right"
                width={20}
                height={20}
                className="invert-colors "
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className=" mt-7 flex flex-col gap-4">
          {popularTags.map((tags) => (
            <RenderTag
              key={tags._id}
              _id={tags._id}
              name={tags.name}
              totalQuestions={tags.totalQuestions}
              showCount
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
