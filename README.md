## Краткий конспект по командам Git:

### Создание репозитория


`git init` - Инициализация репозитория;

`git clone <url>` - Клонирование удаленного репозитория;

`git add <file>` - Добавить файл в индекс;

`git commit -m "Сообщение коммита"` - Зафиксировать изменения:

Указать автора (глобально или локально):

`git config --global user.name "Ваше имя"`

`git config --global user.email "Ваш email"`

`git add .` - Добавить все изменения;

`git status` - Проверить статус изменений;

`git commit -a -m "Сообщение коммита"` - Зафиксировать все изменения сразу.Пропускает стадию индексации (git add).

`git rm <file>` - Удалить файл из рабочего дерева и индекса;

`git mv <old-name> <new-name>` - Переименовать файл;

`git rm --cached <file>` - Удалить файл только из индекса;
