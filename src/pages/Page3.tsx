import React from "react";
import WorkStages from "../components/WorkStages.tsx"; // Припустимо, що компонент WorkStages є у вас на Page2

const steps = [
  {
    number: "1",
    title: "Підготовка",
    points: [
      "Консультація.",
      "Оплата.",
      "Проведення брейншторму з клієнтом.",
      "Погодження структури.",
      "Погодження дизайну.",
    ],
  },
  {
    number: "2",
    title: "Розробка",
    points: [
      "Програмування погодженої, фінальної версії сайту.",
      "Мобільна адаптація.",
      "Тестування сайту.",
    ],
  },
  {
    number: "3",
    title: "Запуск",
    points: [
      "Навчання по користуванню.",
      "Деплой сайту на домен та хостинг.",
      "Місяць безкоштовного тех. обслуговування.",
    ],
  },
];

const Page3 = () => {
  return (
    <div className="px-6 pt-5 pb-20 lg:px-10">
      <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-center lg:text-left mb-10 mt-10 relative">
        Корпоративний сайт
        <span className="absolute top-0 left-1/2 lg:left-0 w-10 h-10 sm:w-12 sm:h-12 border-4 border-yellow-400 rounded-full -z-10"></span>
      </h1>

      <div className="flex flex-col lg:flex-row gap-10">
        <div className="lg:w-4/6 text-lg">
          <p>
            Корпоративний веб-сайт - це веб-сайт, який створюється для
            підприємства або організації з метою представлення їх діяльності та
            послуг в Інтернеті. Такий веб-сайт містить інформацію про компанію,
            її історію, продукти та послуги, контактні дані, новини, інформацію
            про вакансії та іншу важливу інформацію про організацію.
          </p>
          <p className="mt-4">
            Корпоративний веб-сайт часто використовується для залучення нових
            клієнтів та збільшення продажів, а також для забезпечення зручного
            доступу до інформації про компанію та її продукти. Він може бути
            дуже простим або дуже складним, в залежності від розміру компанії та
            мети створення сайту.
          </p>
          <p className="mt-4">
            Корпоративний веб-сайт є важливим елементом брендингу та маркетингу,
            оскільки він дозволяє компанії встановити свій імідж, залучити нових
            клієнтів та зберегти старих. Крім того, він може бути використаний
            для забезпечення зв'язку зі співробітниками та партнерами компанії,
            а також для розміщення важливої інформації, такої як звіти про
            фінансову діяльність, прес-релізи та інше.
          </p>
        </div>

        <div className="lg:w-1/4 h-auto p-6 border-2 border-gray-300 rounded-lg space-y-4 shadow-md">
          <ul className="list-disc pl-5 text-lg">
            <li>Час розробки: 2 місяця</li>
            <li>Адаптивність під мобільні пристрої</li>
            <li>Висока швидкість завантаження</li>
          </ul>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-orange-500 text-white rounded-full py-2 px-6 hover:bg-orange-400 active:bg-orange-600 w-full">
              Додати в кошик
            </button>
            <button className="bg-white text-orange-500 border-2 border-orange-500 rounded-full py-2 px-6 w-full hover:bg-orange-50 active:bg-orange-100">
              Швидка заявка
            </button>
          </div>
          <p className="italic text-gray-700 text-center mt-4">
            “Лендінг – це те місце, де дизайн, контент та маркетинг об'єднуються
            в силу, щоб перетворити відвідувача в клієнта.”
          </p>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-center lg:text-left mt-16">
        Етапи роботи
      </h2>

      <WorkStages steps={steps} />
    </div>
  );
};

export default Page3;
