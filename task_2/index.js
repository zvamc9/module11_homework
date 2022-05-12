//Напишите функцию getPercents(percent, number), которая 
//возвращает {percent} процентов от {number}.

//добавить ее в репозиторий;
//продумать тест-кейсы (успешное/неуспешное выполнение функции);
//продумать корнер-кейсы; 
//написать unit-тесты (минимум 3).

function getPercents(percent, number) {
    return number / 100 * percent;
}

module.exports = getPercents;