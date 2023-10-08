const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
    	exp: '1 month'
    },
    showAgeAndLangs: function(plan) {
        
        const { age } = plan;
        const { languages } = plan.skills;

        let str = `Мне ${age} и я владею языками: `;

        // console.log(`Мне ${age} и я владею языками: ${languages.join(' ').toUpperCase()}`); // 1 способ
        //при помощи метода join который перевод массив в строку.  

        // for(let item of languages){
        //     str += `${item.toUpperCase()} `;
        // } // 2 способ - перебор массива for of

        languages.forEach(function(item){
            str +=`${item.toUpperCase()} `;
        }); // 3 способ перебора, путем вызова метода forEach в агрументы добавляется callbackfn 
        // для работы с каждым элементом массива.
        //callbackfn может вернуть 1 аргументом "значение" массива, 2 аргументом вернет порядковый номер index
        //3 аргумент целиком весь массив.  
        console.log(str);

    }
};

personalPlanPeter.showAgeAndLangs(personalPlanPeter);



// function showProgrammingLangs(plan) {
//     let result = '';

//     const {programmingLangs} = plan.skills;

//     for (let item in programmingLangs){
//       result += `Язык ${item} изучен на ${programmingLangs[item]}\n`; 

//     }
//     return result;
// }

// showProgrammingLangs(personalPlanPeter);