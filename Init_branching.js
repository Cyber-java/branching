//Ветвление
//Чтобы узнать на какой ветке разработки сидите вы и какие ветки есть существует команда git branch
//Обычно ветки создаются для разделения кода на основной и для разработки или чтобы отделить разработчка создающего главную страницу и разработчика создающего страницу о компании
//Чтобы добавить/создать новую ветку необходимо написать git branch 'название новой ветки'
//Чтобы перейти на другую ветку необходимо написать git branch checkout 'название ветки'
//все commit  и изменения в файлах!!! сделанные в новой ветке, будут недоступны основной ветке и наоборот все commit и изменения основной ветки будут доступны новой ветке

//Слияние веток.Pull request.
//Чтобы перенести код из одной ветки в другую необходимо делать Pull request на github
//На github переходим во вкладку Pull request и нажимаем кнопку New request
//В кнопке base указываем ветку в которую хотим добавить код, а в кнопке compare указываем ветку из которой переносим код
//После чего нам предложат указать заголовок и описание нашего request
//Осталось нажать Create Pull request и слияние выполнено
//Pull request - нужны для того чтобы делиться кодом и отправлять код на ревью!

//Ревью кода.Reviewers.
//После слияния можно нажать кнопку Reviewers и выбрать человека из github который будет смотреть твой код
//Либо если нам прислали код, то все изменения из новой ветки мы можем посмотреть по кнопке files changed
//и по кнопке + добавлять комментраии
//далее чтобы разработчики увидели твои комментарии нажимаем finish review и указываем главный комментраии(например я сделал ревью кода)
//нажимаем submit review
//после того как разработчик пофиксил баги отмеченные ревьювером он должен нажать Resolve converstation

//Merge
//После ревью и исправлений мы готовы к слиянию веток, нажимаем Merge Pull request
//И соглашаемся со слиянием нажав Confirm merge
//после операции по слиянию(merge) ветку из которой переносили код обычно удаляют
//что нам и предлагается сделать нажав кнопку Delete branch

//GitPull
//После того как мы произвели слияние веток на githube нам необходимо перенести обновленную ветку на наш компьютер
//для этого пишем git pull 'name или url' 'название ветки куда перенесли код'

//Git Merge
//если мы запросим в терминале ветки git branch, то можем увидеть что у нас остались старые ветки локально, хотя на github  мы их удалили
//чтобы удалить ветку локально необходимо ввести git branch -d 'название удаляемой ветки'
//Если мы создали новую ветку, произвели в ней изменения и запушили на github
//можно смержить ее через терминал
//для этого сначала переходимна основную ветку и вводим команду git merge 'название ветки откуда переносятся изменения'
//ВАЖНО, после этого не забыть запушить все в github т.к. все изменения был произведены локально
