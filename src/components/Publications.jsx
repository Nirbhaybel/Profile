const papers=[

"IEEE MAPCON 2024",
"IEEE APMC 2024",
"IEEE I2CT 2024",
"IEEE Radio Conference",
"MAPCON 2022",
"ICONAT",
"IRSI",
"EWCI",
"URSI"

];

export default function Publications(){

return(

<section
id="publications"
className="py-28 bg-[#08121F]">

<div className="max-w-7xl mx-auto px-8">

<h2 className="text-5xl font-bold text-cyan-400 mb-16">

IEEE Publications

</h2>

<div className="grid md:grid-cols-3 gap-8">

{

papers.map((p,i)=>(

<div
key={i}
className="bg-[#101C2D] rounded-2xl p-8">

<h3 className="text-xl font-bold">

{p}

</h3>

<p className="text-gray-400 mt-4">

Click to read publication

</p>

</div>

))

}

</div>

</div>

</section>

)

}