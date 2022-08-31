function collect_ratings() {
	ratings = {
		count:0,
		sum:0,
		average:0
	};	
	let rating = 0;

	const elements = document.querySelectorAll("rating");

	elements.forEach(element => rating = parseInt(element.id.replace("star", ""))+parseInt(element.value)
		ratings.count += parseInt(elemet.value)
		ratings.sum += parseInt(elemet.value)*rating);

	if ratings.count != 0 {
		ratings.average = ratings.sum / ratings.count
	};
	return ratings;
};

Docment.addEventListener("change", function {
	ratings = collect_ratings; 
	Docment.querySelector("average").value = ratings.average.toFixed(2)});
