document.addEventListener('DOMContentLoaded' , () => {

	//assistan grouping
	const assistants = data.filter((person) => person.assistant == true);

	//Adding same grouped + non-assistant students as a members property
	for (const index in assistants) {
  	 let members = data.filter((student) => student.group == assistants[index].group && student.assistant == false);
  	 assistants[index].members = members;
	assistants[index].group == 'Fuscia' ? assistants[index].group='Fuchsia':''
	}

	console.log(assistants)

	//Checking index of  duplicate property value
	function checkDuplicate(names) {
		
		var namesArr = names.map(function(item) {return item.name});
		var isnames = namesArr.some(function(item,idx) {
			let index = namesArr.indexOf(item) != idx ? namesArr.indexOf(item) : '';
			//console.log(index)
		});

	// removing duplicate function will be here

	}
	checkDuplicate(data);

	// Mapping member names and creating list

	function memberName(assistant) {
		let name = assistant.members.map((student) => student.name);
		//console.log(assistant.members)
	

		return `
		<h6 class='cards__box__title'>Members</h6>
		<ul class='cards__box__list'>
		${name.map(function(name) {
			return `
			<li >${name}</li>
			`
		}).join('')}
		</ul>
		`

	}

	//Mapping assistant names and groups from data

	function memberCard(assistant) {
		
		let group = assistant.members.map((student) => student.group);
		 group[0] == 'Fuscia' ? group[0]='Fuchsia' : ''
		 group[1] == 'Fuscia' ? group[1]='Fuchsia' :''
		 //console.log(group)
		
		
		
		return `<div  class='
		cards__box'>
		<h4  style='color: ${group[0]} ; font-size: 20px ' class='cards__box__group'>${assistant.group}<h4>
		<h6 class='cards__box__assistant'>${assistant.name}</h6>
		${assistant.group == group[0] ? 
		memberName(assistant)
		 : ''}
		
		
		
		</div>
		`
		
	}

	document.getElementById('cards').innerHTML = `
	${assistants.map(memberCard).join('')}
	`
	


})


let data = [
	{
		"id": 1,
		"name": "Ahmed Bustani",
		"assistant": true,
		"group": "Orange"
	},
	{
		"id": 2,
		"name": "Baris Tunar",
		"assistant": true,
		"group": "Crimson"
	},
	{
		"id": 3,
		"name": "Burak Caglar",
		"assistant": true,
		"group": "Khaki"
	},
	{
		"id": 4,
		"name": "ah. fawad",
		"assistant": true,
		"group": "Pink"
	},
	{
		"id": 5,
		"name": "Furkan KILIÇER",
		"assistant": true,
		"group": "Aquamarine"
	},
	{
		"id": 6,
		"name": "Alperen Aslan",
		"assistant": true,
		"group": "Turquoise"
	},
	{
		"id": 7,
		"name": "joudi bitar",
		"assistant": true,
		"group": "Yellow"
	},
	{
		"id": 8,
		"name": "Kübra Özdem",
		"assistant": true,
		"group": "Goldenrod"
	},
	{
		"id": 9,
		"name": "Aycan",
		"assistant": true,
		"group": "Fuscia"
	},
	{
		"id": 10,
		"name": "Aykut Şahin",
		"assistant": true,
		"group": "Puce"
	},
	{
		"id": 11,
		"name": "S. Zahit ACAR",
		"assistant": true,
		"group": "Maroon"
	},
	{
		"id": 12,
		"name": "Tugay Türk",
		"assistant": true,
		"group": "Purple"
	},
	{
		"id": 13,
		"name": "Abdurrahman Seyidoğlu",
		"assistant": false,
		"group": "Aquamarine"
	},
	{
		"id": 14,
		"name": "Ahmed Tabşo",
		"assistant": false,
		"group": "Crimson"
	},
	{
		"id": 15,
		"name": "Alaa Alaff",
		"assistant": false,
		"group": "Fuscia"
	},
	{
		"id": 16,
		"name": "ASSKOUR Imane",
		"assistant": false,
		"group": "Goldenrod"
	},
	{
		"id": 17,
		"name": "Aydoğan Gökberk",
		"assistant": false,
		"group": "Khaki"
	},
	{
		"id": 18,
		"name": "BAHADDİN ALMUHAMMED",
		"assistant": false,
		"group": "Khaki"
	},
	{
		"id": 19,
		"name": "Büşra Bilgin",
		"assistant": false,
		"group": "Maroon"
	},
	{
		"id": 20,
		"name": "Chimnaz Vahabzade",
		"assistant": false,
		"group": "Orange"
	},
	{
		"id": 21,
		"name": "Çağatay Sarıoğlan",
		"assistant": false,
		"group": "Pink"
	},
	{
		"id": 22,
		"name": "dana alhameed",
		"assistant": false,
		"group": "Puce"
	},
	{
		"id": 23,
		"name": "Delfin Öztürk",
		"assistant": false,
		"group": "Purple"
	},
	{
		"id": 24,
		"name": "Ebubekir Karataş",
		"assistant": false,
		"group": "Yellow"
	},
	{
		"id": 25,
		"name": "Ela Yağmur ",
		"assistant": false,
		"group": "Turquoise"
	},
	{
		"id": 26,
		"name": "ELNAZ HAMEDIBAZAZ",
		"assistant": false,
		"group": "Pink"
	},
	{
		"id": 27,
		"name": "Fatma Şehitoğlu",
		"assistant": false,
		"group": "Goldenrod"
	},
	{
		"id": 28,
		"name": "Feras Alkilani",
		"assistant": false,
		"group": "Fuscia"
	},
	{
		"id": 29,
		"name": "Gizem Nur Korkmaz",
		"assistant": false,
		"group": "Crimson"
	},
	{
		"id": 30,
		"name": "Halil İbrahim Badem",
		"assistant": false,
		"group": "Aquamarine"
	},
	{
		"id": 31,
		"name": "Hasan ALKHALAF",
		"assistant": false,
		"group": "Aquamarine"
	},
	{
		"id": 32,
		"name": "Hatice Sürümlü",
		"assistant": false,
		"group": "Purple"
	},
	{
		"id": 33,
		"name": "IMAN ALABID",
		"assistant": false,
		"group": "Maroon"
	},
	{
		"id": 34,
		"name": "Işıl Özkaynak",
		"assistant": false,
		"group": "Goldenrod"
	},
	{
		"id": 35,
		"name": "İbrahim Halil DÖŞ",
		"assistant": false,
		"group": "Crimson"
	},
	{
		"id": 36,
		"name": "İlkay Çitak",
		"assistant": false,
		"group": "Aquamarine"
	},
	{
		"id": 37,
		"name": "Kenan Mirzeyev",
		"assistant": false,
		"group": "Yellow"
	},
	{
		"id": 38,
		"name": "Melisa Gürdal",
		"assistant": false,
		"group": "Goldenrod"
	},
	{
		"id": 39,
		"name": "Merve Şahin",
		"assistant": false,
		"group": "Orange"
	},
	{
		"id": 40,
		"name": "MHD NABIL ARAR",
		"assistant": false,
		"group": "Yellow"
	},
	{
		"id": 41,
		"name": "Muhammet BİLGİN",
		"assistant": false,
		"group": "Orange"
	},
	{
		"id": 42,
		"name": "Nurgeldi Atamyradov",
		"assistant": false,
		"group": "Khaki"
	},
	{
		"id": 43,
		"name": "Ozan Ali TÜRKYILMAZ",
		"assistant": false,
		"group": "Pink"
	},
	{
		"id": 44,
		"name": "Özge Yurdusev",
		"assistant": false,
		"group": "Goldenrod"
	},
	{
		"id": 45,
		"name": "Parahat Nepesov",
		"assistant": false,
		"group": "Puce"
	},
	{
		"id": 46,
		"name": "Rined haj osman",
		"assistant": false,
		"group": "Turquoise"
	},
	{
		"id": 47,
		"name": "Serkan Çelik",
		"assistant": false,
		"group": "Yellow"
	},
	{
		"id": 48,
		"name": "Sinem Nurioğlu",
		"assistant": false,
		"group": "Aquamarine"
	},
	{
		"id": 49,
		"name": "Şifa Hasani",
		"assistant": false,
		"group": "Turquoise"
	},
	{
		"id": 50,
		"name": "Yasemin Paşaoğlu",
		"assistant": false,
		"group": "Yellow"
	},
	{
		"id": 51,
		"name": "Yusuf sabbagh",
		"assistant": false,
		"group": "Crimson"
	},
	{
		"id": 52,
		"name": "Nurgeldi Atamyradov",
		"assistant": false,
		"group": "Yellow"
	}
];
// console.log('👻', data)


