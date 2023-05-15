import { CaretDoubleLeft, CaretDoubleRight, CaretLeft, CaretRight } from "phosphor-react";
import { DefaultUi, Player, Youtube } from "@vime/react";
import { useGetLessonBySlugQuery } from "../graphql/generated";
import BlogTextComponent from "./BlogTextComponent";
import Pesquisador from "./Pesquisador";
import { NavLink } from "react-router-dom";

interface VideoProps {
  lessonSlug: string;
}

export function MainBlog(props: VideoProps) {
  const { data } = useGetLessonBySlugQuery({
    variables: {
      slug: props.lessonSlug
    }
  });

  if (!data || !data.lesson) {
    return (
      <div className="flex-1">
        <span>carregando...</span>
      </div>
    );
  }

  return (
    <div className="flex-1">
      <div className="p-12 pt-12 pr-8 mt-3 max-w-[1020px] mx-auto">
        <div className="flex items-start gap-16">
          <div className="flex-1 ml-8">
            <h1 className="text-5xl font-bold mb-5 text-blue-900 leading-tight">
              {data.lesson.title}
            </h1>
            <div>
              <div className="text-lg mb-7 text-gray-700">
                <BlogTextComponent html={data.lesson.blogtext?.html} />
              </div>
            </div>
            <div>
              <div className="text-3xl mb-4 text-gray-600">
                <strong>
                  <BlogTextComponent html={data.lesson.subtext2} />
                </strong>
              </div>
              <div className="text-lg mb-10">
                <BlogTextComponent html={data.lesson.blogtext2?.html} />
              </div>
            </div>
            <div className="flex items-center pl-8 pr-8">
              <div className="h-full border-l-4 border-blue-900 mr-4">
                <h1 className="text-4xl m-0 p-0 text-gray-500"></h1>
                <h1 className="text-4xl m-0 ml-4 text-gray-500">
                  <span>
                    <BlogTextComponent html={data.lesson.textcenter} />
                  </span>
                </h1>
              </div>
            </div>
            <div>
              <div className="text-3xl mb-4 mt-10 text-gray-600">
              </div>
              <span className="text-lg mb-6">
                <BlogTextComponent html={data.lesson.blogtext3?.html} />
              </span>
            </div>
            <span className="mb-8">
              <Pesquisador />
            </span>
            <div>
              <div className="text-3xl mb-4 mt-12 text-gray-600">
                <strong>
                  <BlogTextComponent html={data.lesson.subtext4} />
                </strong>
              </div>
              <span className="text-lg mb-6">
                <BlogTextComponent html={data.lesson.blogtext4?.html} />
              </span>
            </div>
            <div>
              <div className="mt-6 text-3xl mb-4 text-gray-600">
                <strong>
                  <BlogTextComponent html={data.lesson.subtext5} />
                </strong>
              </div>
              <span className="text-lg mb-6">
                <BlogTextComponent html={data.lesson.blogtext5?.html} />
              </span>
            </div>
            <div className="bg-black flex justify-center mt-8">
              <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
                <Player>
                  <Youtube videoId={data.lesson.videoId as string} />
                  <DefaultUi />
                </Player>
              </div>
            </div>
            <div>
              <div className="text-xl mt-8 mb-12 text-gray-500 leading-relaxed">
                <span>{data.lesson.description}</span>
              </div>
            </div>            
            {data.lesson.teacher && (
              <div className="flex items-center gap-4 mt-6">
                <img
                  className="h-16 w-16 rounded-full border-2 border-blue-900"
                  src={data.lesson.teacher.avatarURL}
                  alt=""
                />
                <div className="leading-relaxed">
                  <strong className="font-bold text-2xl block">
                    {data.lesson.teacher.name}
                  </strong>
                  <strong className="text-gray-500 text-xs block">
                    {data.lesson.teacher.bio}
                  </strong>
                </div>
              </div>
            )}

            <div className="gap-8 mt-20 grid grid-cols-2">
              <NavLink
                to=""
                className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-500 transition-colors"
              >
                <div className="bg-blue-900 h-full p-6 flex items-center">
                  <CaretLeft size={40} className="text-gray-50" />
                </div>
                <div className="p-6 leading-relaxed">
                  <p><strong className="">Postagem anterior!</strong></p>
                  <p className="text-base text-gray-200 mt-2">
                    <strong>Clique aqui e veja uma postagem anterior!</strong>
                  </p>
                </div>
                <div className="h-full p-6 flex items-center">
                  <CaretDoubleLeft size={24} />
                </div>
              </NavLink>
              <NavLink
                to=""
                className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-500 transition-colors"
              >
                <div className="h-full p-6 flex items-center">
                  <CaretDoubleRight size={24} />
                </div>
                <div className="p-6 leading-relaxed">
                  <p><strong className="">Próxima postagem!</strong></p>
                  <p className="text-base text-gray-200 mt-2">
                    <strong>Clique aqui e fique por dentro das últimas notícias!</strong>
                  </p>
                </div>
                <div className="bg-blue-900 h-full p-6 flex items-center">
                  <CaretRight size={40} className="text-gray-50" />
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
