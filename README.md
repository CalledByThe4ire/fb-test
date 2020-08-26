Работа с проектом
-----------------

Данный проект содержит уже готовую и настроенную сборку(используется [Create React App](https://github.com/facebook/create-react-app))

Проект управляется при помощи npm scripts, которые можно вызвать в консоли в папке проекта.

[](https://github.com/CalledByThe4ire/fb-test#%D1%81%D0%BF%D0%B8%D1%81%D0%BE%D0%BA-npm-scripts)Список npm scripts
--------------------------------------------------------------------------------------------------------------------------------

### [](https://github.com/CalledByThe4ire/fb-test#npm-start)`npm start`

Запускает приложение в режиме разработки\
Откройте [http://localhost:3000](http://localhost:3000/), чтобы увидеть ваше приложение в браузере.

### [](https://github.com/CalledByThe4ire/fb-test#npm-run-build)`npm run build`

Собирает приложение в продакшн-режиме `build` folder.\

## [DEMO](https://fb-test-ebon.vercel.app/)




Ответы на вопросы
-----------------
*Расскажите, чем, на ваш взгляд, отличается хорошая верстка от плохой с точки зрения:*
1. *пользователя*;
2. *менеджера проекта*;
3. *дизайнера*;
4. *верстальщика*;
5. *клиентского программиста*;
6. *серверного программиста*.

С точки зрения пользователя хорошая верстка означает быструю загрузку содержимого даже при слабом интернете; менеджера проекта и дизайнера, — возможность быстрого внесения изменений от клиента (например, менять цветовое кодирование, брейкпойнты и т.д. через заранее заданные переменные); верстальщика, — грамотно продуманную структуру (например, использование компонентного подхода в разработке); клиентского программиста, — максимально простую реализацию там, где это возможно, понятные имена классов; серверного программиста, — наличие правильных атрибутов на элементах формы для корректной обработки post-запросов, а в случае интеграции в системы управления контентом — наличие стилизации элементов формы каскадом (отсутствие классов).

------------------

*Опишите основные особенности верстки крупных многостраничных сайтов, дизайн которых может меняться в процессе реализации и поддержки.
Расскажите о своем опыте верстки подобных сайтов: какие методологии, инструменты и технологии вы применяли на практике.*

Характерная особенность многостраничного сайта, — единообразная стилизация в соответствии с техническим заданием: цветовое кодирование, шрифты, отступы, сетка, система заголовков и т.д. не должны отличаться от страницы к странице.  Все повторяющиеся компоненты также должны выглядеть единообразно. Это достигается через использование css-препроцессоров путем вынесения повторяющейся логики в переменные и миксины, для html-элементов тот же эффект можно получить с помощью шаблонизаторов, в идеале, — с текстовым наполнением в виде данных. Также важна продуманная структура проекта, которая должна быть модульной и легко расширяемой.
Работая над такими проектами, я использовал css-препроцессоры sass, stylus, шаблонизатор pug (jade) и методологию БЭМ.

------------------

*Опишите основные особенности верстки сайтов, которые должны одинаково хорошо отображаться как на любом современном компьютере, так и на смартфонах и планшетах под управлением iOS и Android.
Расскажите о своем опыте верстки подобных сайтов: какие инструменты и технологии вы применяли, как проверяли результат на различных устройствах, какие именно устройства требовалось поддерживать.*

Поскольку все разработчики браузеров в первую очередь руководствуются стандартами и рекомендациями W3C, для обеспечения единообразия желательно тестировать готовую верстку с помощью соответствующего [валидатора](https://validator.w3.org/). Для тестирования работоспособности на различных устройствах самый лучший (но и самый дорогой) вариант — воспользоваться сервисом [BrowserStack](https://www.browserstack.com/).

------------------

*Расскажите, какие инструменты помогают вам экономить время в процессе написания, проверки и отладки кода.*

В первую очередь, автоматизация сборки (с помощью gulp, webpack). Для проверки синтаксических, стилистических ошибок использую eslint, stylelint, prettier. Ну и консоль разработчика, конечно же.

------------------

*Вам нужно понять, почему страница отображается некорректно в Safari на iOS и в IE на Windows. Код писали не вы, доступа к исходникам у вас нет. Ваши действия? Сталкивались ли вы с подобными проблемами на практике?*

В данном случае, в зависимости от ситуации, либо через отладчик в браузере, либо, если есть доступ, — через browserstack. Также помогает поиск решения соответствующей проблемы на stack overflow.

------------------

*Дизайнер отдал вам макет, в котором не показано, как должны выглядеть интерактивные элементы при наведении мыши. Ваши действия?*

Сделать по аналогии с тем, как эти же интерактивные элементы работают на других сайтах, руководствуясь здравым смыслом и чувством прекрасного.

------------------

Какие ресурсы вы используете для развития в профессиональной сфере? Приведите несколько конкретных примеров (сайты, блоги и так далее).

[hexlet](https://ru.hexlet.io/)
[css-tricks](https://css-tricks.com/)
[Udemy](https://udemy.com/)
[Изд-во «Питер»](https://piter.com/)

------------------

*Какое направление развития вам более близко: JS-программирование, HTML/CSS-верстка или и то, и другое?*

Мне одинаково интересна и верстка, и frontend-разработка (надеюсь все-таки развиваться как frontend-разработчик впервую очередь).

------------------

*Расскажите нам о себе и предоставьте несколько ссылок на последние работы, выполненные вами.*
Дополнительную информацию обо мне можно найти [здесь](andrey-karamnoff.ru)