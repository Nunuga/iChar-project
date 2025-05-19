import { useState } from "react";
import { LuStar } from "react-icons/lu";

export const TestimonialsBlock = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      quote:
        "Техническая компетентность их команды и соблюдение сроков превзошли наши ожидания. Предоставленное ими решение преобразило наши бизнес-операции.",
      author: "Боби Сосисов",
      position: "",
    },
    {
      quote:
        "Работа с этой командой была удивительно простой. Они быстро поняли наши потребности и предоставили мощное решение, которое масштабировалось вместе с нашим ростом.",
      author: "Арабубий Барабулькин",
      position: "",
    },
    {
      quote:
        "Их подход к обеспечению качества позволил нам сэкономить бесчисленное количество часов и избежать возможных проблем. Я рекомендовал их всем в своей сети.",
      author: "Елена Головач",
      position: "",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-br from-gray-900 to-indigo-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="mb-6 inline-block">
            {/* <div className="bg-indigo-600 bg-opacity-20 backdrop-blur-sm rounded-xl p-2 px-4 text-indigo-300 text-sm font-medium">
              Отзывы
            </div> */}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Что говорят наши клиенты
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Не верите нам на слово. Вот что говорят лидеры отрасли о работе с
            нами.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Large quote mark */}
          <div className="absolute -top-16 -left-4 text-8xl text-indigo-600 opacity-20">
            &quot;
          </div>

          {/* Testimonial slider */}
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`transition-opacity duration-500 ${activeTestimonial === index ? "opacity-100" : "opacity-0 absolute inset-0"}`}
              >
                <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-8 md:p-12 shadow-lg border border-gray-700">
                  <div className="flex gap-2 mb-6">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <LuStar
                        key={star}
                        className="h-5 w-5 text-yellow-500 fill-yellow-500"
                      />
                    ))}
                  </div>
                  <p className="text-xl md:text-2xl italic mb-8">
                    {testimonial.quote}
                  </p>
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded-full bg-indigo-600"></div>
                    <div className="ml-4">
                      <h4 className="font-bold">{testimonial.author}</h4>
                      <p className="text-gray-400 text-sm">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`h-3 w-3 rounded-full transition-all ${activeTestimonial === index ? "bg-indigo-500 w-6" : "bg-gray-600"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
