export const exerciseOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '91c5b9b661msh95b987eb6157c06p1836ffjsn3dbb2b428a9b',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
};



export const youtubeOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0d31db404emshf9b0133e6b66821p112b6bjsn2a46c97643f1',
		'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
	}
};


export const fetchData = async (url, options) => {

		const res = await fetch(url, options);
		const data = await res.json();

		return data;


};


// export const fetchData = async (url, options) => {
//   try {
//     const res = await fetch(url, options);
//     const data = await res.json();
//     return data;
//   } catch (error) {
//     console.error(error);
//   }

// };
