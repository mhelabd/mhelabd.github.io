"use strict";(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[694],{6694:function(e,t,n){n.r(t),n.d(t,{default:function(){return G}});var r=n(2791),i=n(1523),a=n(3823),o=n(184),s=function(e){var t=e.data;return(0,o.jsx)("article",{className:"degree-container",children:(0,o.jsxs)("header",{style:{paddingBottom:20},children:[(0,o.jsxs)("div",{style:{display:"flex",alignItems:"center",fontSize:25},children:[(0,o.jsx)("div",{style:{paddingTop:0,paddingRight:20},children:(0,o.jsx)("img",{src:t.icon,width:30,alt:""})}),(0,o.jsx)("h4",{children:(0,o.jsx)("a",{href:t.link,children:t.school})})]}),t.degrees.map((function(e,n){return(0,o.jsxs)("h4",{children:[e,", ",t.years[n]]},e)}))]})})},c=function(e){var t=e.data;return(0,o.jsxs)("div",{className:"education",children:[(0,o.jsx)("div",{className:"link-to",id:"education"}),(0,o.jsx)("div",{className:"title",children:(0,o.jsx)("h2",{children:"Education"})}),t.map((function(e){return(0,o.jsx)(s,{data:e},e.school)}))]})};c.defaultProps={data:[]};var l=c,u=n(4942),d=n(1413),p=n(885),h=function(e){var t=e.data;return(0,o.jsxs)("article",{className:"jobs-container",children:[(0,o.jsxs)("header",{children:[(0,o.jsxs)("div",{style:{display:"flex",alignItems:"center",fontSize:20},children:[(0,o.jsx)("div",{style:{paddingRight:20,paddingBottom:5},children:(0,o.jsx)("img",{src:t.icon,width:40,height:40,style:{borderRadius:"5px"},alt:""})}),(0,o.jsxs)("h4",{children:[(0,o.jsx)("a",{href:t.link,children:t.company})," - ",t.position]})]}),(0,o.jsxs)("p",{className:"daterange",children:[" ",t.daterange]})]}),(0,o.jsx)("ul",{className:"points",children:t.points.map((function(e){return(0,o.jsx)("li",{children:e},e)}))})]})},g=function(e){var t=e.data;return(0,o.jsxs)("article",{className:"jobs-container",children:[(0,o.jsxs)("header",{children:[(0,o.jsxs)("div",{style:{display:"flex",alignItems:"center",fontSize:20},children:[(0,o.jsx)("div",{style:{paddingRight:20,paddingBottom:5},children:(0,o.jsx)("img",{src:t.icon,width:30,alt:""})}),(0,o.jsxs)("h4",{children:[(0,o.jsx)("a",{href:t.link,children:t.institution})," - ",t.position]})]}),(0,o.jsxs)("p",{className:"daterange",children:[" ",t.daterange]})]}),(0,o.jsx)("ul",{className:"points",children:t.points.map((function(e){return(0,o.jsx)("li",{children:e},e)}))})]})},m=function(e){var t=e.handleClick,n=e.active,r=e.label;return(0,o.jsx)("button",{className:"skillbutton ".concat(n[r]?"skillbutton-active":""),type:"button",onClick:function(){return t(r)},children:r})},f="All",y=function(e){var t=e.jobs,n=e.researches,i=(0,r.useState)(f),a=(0,p.Z)(i,2),s=a[0],c=a[1],l=(0,r.useState)(f),y=(0,p.Z)(l,2),b=y[0],v=y[1],S=(0,r.useState)(f),k=(0,p.Z)(S,2),x=k[0],j=k[1],w=t.concat(n),P=(0,r.useState)(w.flatMap((function(e){return e.companyType})).sort().reduce((function(e,t){return(0,d.Z)((0,d.Z)({},e),{},(0,u.Z)({},t,!1))}),{All:!0})),I=(0,p.Z)(P,2),A=I[0],C=I[1],M=(0,r.useState)(w.flatMap((function(e){return e.technologiesUsed})).sort().reduce((function(e,t){return(0,d.Z)((0,d.Z)({},e),{},(0,u.Z)({},t,!1))}),{All:!0})),O=(0,p.Z)(M,2),N=O[0],T=O[1],L=(0,r.useState)(w.flatMap((function(e){return e.timeFrame})).sort().reduce((function(e,t){return(0,d.Z)((0,d.Z)({},e),{},(0,u.Z)({},t,!1))}),{All:!0})),D=(0,p.Z)(L,2),E=D[0],R=D[1],W=function(e){return(e.companyType.includes(s)||s===f)&&(e.technologiesUsed.includes(b)||b===f)&&(e.timeFrame.includes(x)||x===f)};return(0,o.jsxs)("div",{className:"experience",children:[(0,o.jsx)("div",{className:"link-to",id:"experience"}),(0,o.jsxs)("div",{className:"title",children:[(0,o.jsx)("h2",{children:"Experience"}),(0,o.jsx)("p",{children:"You can filter the experiences to show only the most relevant ones to a particular topic."})]}),(0,o.jsx)("div",{className:"company-button-container",children:function(e){var t,n,r;switch(e){case"companyTypes":t=A,n=C,r=c;break;case"technologiesUsed":t=N,n=T,r=v;break;default:t=E,n=R,r=j}return Object.keys(t).map((function(e){return(0,o.jsx)(m,{label:e,active:t,handleClick:function(e){r(e),n((function(t){return Object.keys(t).reduce((function(t,n){return t[n]=n===e,t}),{})}))}},e)}))}("companyTypes")}),["All","Big Tech","Startup"].includes(s)&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:"title",children:(0,o.jsx)("h3",{children:"Job Experience"})}),function(){var e=t.filter(W).map((function(e){return(0,o.jsx)(h,{data:e},e.company+e.daterange)}));return 0===e.length?(0,o.jsx)("p",{className:"title",children:"No relevant work experience for selection"}):e}()]}),["Academia","All"].includes(s)&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:"title",children:(0,o.jsx)("h3",{children:"Research Experience"})}),function(){var e=n.filter(W).map((function(e){return(0,o.jsx)(g,{data:e},e.company+e.daterange)}));return 0===e.length?(0,o.jsx)("p",{className:"title",children:"No relevant research experience for selection"}):e}()]})]})};y.defaultProps={jobs:[],researches:[]};var b=y;function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var S=n(9611);function k(e){return k=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},k(e)}function x(e){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},x(e)}function j(e,t){if(t&&("object"===x(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function w(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=k(e);if(t){var i=k(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return j(this,n)}}var P=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&(0,S.Z)(e,t)}(a,e);var t,n,r,i=w(a);function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e)).handleChildClick=function(e){t.setState((function(t){var n=Object.keys(t.buttons).reduce((function(n,r){return(0,d.Z)((0,d.Z)({},n),{},(0,u.Z)({},r,e===r&&!t.buttons[r]))}),{});return n.All=!Object.keys(t.buttons).some((function(e){return n[e]})),{buttons:n}}))},t.state=function(e){var t=e.categories,n=e.skills;return{buttons:t.map((function(e){return e.name})).reduce((function(e,t){return(0,d.Z)((0,d.Z)({},e),{},(0,u.Z)({},t,!1))}),{All:!0}),skills:n}}({categories:e.categories,skills:e.skills}),t}return t=a,(n=[{key:"getRows",value:function(){var e=this,t=Object.keys(this.state.buttons).reduce((function(t,n){return e.state.buttons[n]?n:t}),"All");return this.state.skills.sort((function(e,t){var n=0;return e.competency>t.competency?n=-1:e.competency<t.competency?n=1:e.category[0]>t.category[0]?n=-1:e.category[0]<t.category[0]||e.title>t.title?n=1:e.title<t.title&&(n=-1),n})).filter((function(e){return"All"===t||e.category.includes(t)})).map((function(e){return(0,o.jsx)("button",{type:"button",children:(0,o.jsx)("a",{href:e.url,children:e.title})},e.title)}))}},{key:"getButtons",value:function(){var e=this;return Object.keys(this.state.buttons).map((function(t){return(0,o.jsx)(m,{label:t,active:e.state.buttons,handleClick:e.handleChildClick},t)}))}},{key:"render",value:function(){return(0,o.jsxs)("div",{className:"skills",children:[(0,o.jsx)("div",{className:"link-to",id:"skills"}),(0,o.jsxs)("div",{className:"title",children:[(0,o.jsx)("h2",{children:"Skills"}),(0,o.jsx)("p",{children:"You can filter the skills to show only the most relevant ones to a particular topic."})]}),(0,o.jsx)("div",{className:"skill-button-container",children:this.getButtons()}),(0,o.jsx)("div",{className:"skill-row-container",children:this.getRows()})]})}}])&&v(t.prototype,n),r&&v(t,r),Object.defineProperty(t,"prototype",{writable:!1}),a}(r.Component);P.defaultProps={skills:[],categories:[]};var I=P,A=function(e){var t=e.data,n=e.last;return(0,o.jsxs)("li",{className:"course-container",children:[(0,o.jsxs)("a",{href:t.link,className:"course",children:[(0,o.jsxs)("h4",{className:"course-number",children:[t.number,":"]}),(0,o.jsx)("p",{className:"course-name",children:t.title})]}),!n&&(0,o.jsx)("div",{className:"course-dot",children:(0,o.jsx)("p",{className:"course-name",children:" \u2022"})})]})};A.defaultProps={last:!1};var C=A,M="Artificial Intelligence",O=function(e){var t=e.courses,n=e.categoryOrdering,i=(0,r.useState)(M),a=(0,p.Z)(i,2),s=a[0],c=a[1],l=(0,r.useState)(n.reduce((function(e,t){return(0,d.Z)((0,d.Z)({},e),{},(0,u.Z)({},t,M===t))}),{})),h=(0,p.Z)(l,2),g=h[0],f=h[1];return(0,o.jsxs)("div",{className:"courses",children:[(0,o.jsx)("div",{className:"link-to",id:"courses"}),(0,o.jsxs)("div",{className:"title",children:[(0,o.jsx)("h2",{children:"Selected Courses"}),(0,o.jsx)("p",{children:"Courses are filtered to show only the most relevant ones to a particular topic."})]}),(0,o.jsx)("div",{className:"courses-button-container",children:Object.keys(g).map((function(e){return(0,o.jsx)(m,{label:e,active:g,handleClick:function(e){c(e),f((function(t){return Object.keys(t).reduce((function(t,n){return t[n]=n===e,t}),{})}))}},e)}))}),(0,o.jsx)("ul",{className:"course-list",children:t.sort((function(e,t){var n=0,r=e.number.split(" "),i=t.number.split(" "),a=[r[0],i[0]],o=a[0],c=a[1],l=[parseInt(r[1],10),parseInt(i[1],10)],u=l[0],d=l[1];if("Mathematics"===s){var p=o;o=c,c=p}return e.university>t.university?n=-1:e.university<t.university||o>c?n=1:o<c?n=-1:u<d?n=1:u>d&&(n=-1),n})).filter((function(e){return e.category.includes(s)})).map((function(e,n){return(0,o.jsx)(C,{data:e,last:n===t.length-1},e.title)}))})]})};O.defaultProps={courses:[],categoryOrdering:[]};var N=O,T=[{title:"Machine Learning",number:"CS 229",link:"http://cs229.stanford.edu/",university:"Stanford",category:["Artificial Intelligence","Mathematics"]},{title:"Machine Learning with Graphs",number:"CS 224W",link:"http://cs224w.stanford.edu/",university:"Stanford",category:["Artificial Intelligence","Mathematics"]},{title:"The Modern Financial System",number:"ECON 44",link:"https://explorecourses.stanford.edu/search?q=ECON44",university:"Stanford",category:["Social Science"]},{title:"Comparative Democratic Development",number:"POLISCI 147",link:"https://explorecourses.stanford.edu/search?q=POLISCI147",university:"Stanford",category:["Social Science"]},{title:"Environmental Science and Technology",number:"CEE 70",link:"https://explorecourses.stanford.edu/search?q=CEE70",university:"Stanford",category:["Natural Science"]},{title:"Design and Manufacturing",number:"ME 203",link:"https://explorecourses.stanford.edu/search?q=ME203",university:"Stanford",category:["Product"]},{title:"Theories of Consciousness in Early Modern Philosophy",number:"PHIL 24L",link:"https://explorecourses.stanford.edu/search?q=PHIL24L",university:"Stanford",category:["Social Science"]},{title:"Deep Multi-Task and Meta-Learning",number:"CS 330",link:"http://cs330.stanford.edu/",university:"Stanford",category:["Artificial Intelligence"]},{title:"Cryptocurrencies and Blockchain Technologies",number:"CS 251",link:"http://cs251.stanford.edu/",university:"Stanford",category:["Computer Systems","Mathematics"]},{title:"Introduction to Computer Graphics and Imaging",number:"CS 148",link:"http://cs148.stanford.edu/",university:"Stanford",category:["Computer Systems"]},{title:"Modern Political Thought: Machiavelli to Marx and Mill",number:"POLISCI 131L",link:"https://explorecourses.stanford.edu/search?q=POLISCI131L",university:"Stanford",category:["Social Science"]},{title:"Trustworthy Machine Learning",number:"CS 329T",link:"https://web.stanford.edu/class/cs329t/",university:"Stanford",category:["Artificial Intelligence"]},{title:"Differential Equations with Linear Algebra, Fourier Methods, and Modern Applications",number:"MATH 53",link:"http://web.stanford.edu/class/math53/",university:"Stanford",category:["Mathematics"]},{title:"Linear Algebra and Matrix Theory",number:"MATH 113",link:"https://explorecourses.stanford.edu/search?q=MATH113",university:"Stanford",category:["Artificial Intelligence","Mathematics"]},{title:"An Intro to Making: What is EE",number:"ENGR 40M",link:"https://explorecourses.stanford.edu/search?q=ENGR40M",university:"Stanford",category:["Product"]},{title:"Design for Behavior Change",number:"CS 247B",link:"https://explorecourses.stanford.edu/search?q=CS247B",university:"Stanford",category:["Product"]},{title:"Natural Language Processing with Deep Learning",number:"CS 224N",link:"http://cs224n.stanford.edu/",university:"Stanford",category:["Artificial Intelligence"]},{title:"International Development (Tutorial)",number:"OSPOXFRD 196P",link:"https://explorecourses.stanford.edu/search?q=OSPOXFRD196P",university:"Oxford",category:["Social Science"]},{title:"Philosophy of Language",number:"OSPOXFRD 32",link:"https://explorecourses.stanford.edu/search?q=OSPOXFRD32",university:"Oxford",category:["Social Science"]},{title:"Philosophy of Religion (Directed Reading)",number:"OSPOXFRD 199A",link:"https://explorecourses.stanford.edu/search?q=OSPOXFRD",university:"Oxford",category:["Social Science"]},{title:"Moral Philosophy",number:"PHIL 2",link:"https://explorecourses.stanford.edu/search?q=PHIL2",university:"Stanford",category:["Social Science"]},{title:"Discrete Probabilistic Methods",number:"MATH 159",link:"https://explorecourses.stanford.edu/search?q=MATH159",university:"Stanford",category:["Artificial Intelligence","Mathematics"]},{title:"Combinatorics",number:"MATH 108",link:"https://explorecourses.stanford.edu/search?q=MATH108",university:"Stanford",category:["Mathematics"]},{title:"Principles of Economics",number:"ECON 1",link:"https://explorecourses.stanford.edu/search?q=ECON1",university:"Stanford",category:["Social Science"]},{title:"CNNs for Visual Learning",number:"CS 231N",link:"https://cs231n.stanford.edu",university:"Stanford",category:["Artificial Intelligence"]},{title:"Graph Theory",number:"MATH 107",link:"https://explorecourses.stanford.edu/search?q=MATH107",university:"Stanford",category:["Artificial Intelligence","Mathematics"]},{title:"Reinforcement Learning",number:"CS 234",link:"https://cs234.stanford.edu",university:"Stanford",category:["Artificial Intelligence"]},{title:"Probabilistic Graphical Models",number:"CS 228",link:"https://cs228.stanford.edu",university:"Stanford",category:["Artificial Intelligence"]},{title:"Ethics, Public Policy, and Technological Change",number:"POLISCI 182W",link:"https://cs182.stanford.edu",university:"Stanford",category:["Social Science"]},{title:"Modern Algorithmic Toolbox",number:"CS 168",link:"https://cs168.stanford.edu",university:"Stanford",category:["Artificial Intelligence","Computer Systems"]},{title:"Introduction to Optimizations (Accelerated)",number:"ENGR 62X",link:"https://explorecourses.stanford.edu/search?q=ENGR62X",university:"Stanford",category:["Artificial Intelligence","Computer Systems","Mathematics"]},{title:"Algorithms",number:"CS 161",link:"https://cs161.stanford.edu",university:"Stanford",category:["Computer Systems","Mathematics"]},{title:"Artificial Intelligence",number:"CS 221",link:"https://cs221.stanford.edu",university:"Stanford",category:["Artificial Intelligence"]},{title:"Mathematical Foundation of Computing",number:"CS 103",link:"https://cs103.stanford.edu",university:"Stanford",category:["Computer Systems","Mathematics"]},{title:"Embodied Interfaces",number:"ARTSTUDI 162",link:"https://explorecourses.stanford.edu/search?q=ARTSTUDI162",university:"Stanford",category:["Product"]},{title:"Preventing Human Extinction",number:"THINK 65",link:"https://explorecourses.stanford.edu/search?q=THINK65",university:"Stanford",category:["Social Science"]},{title:"Applied Machine Learning",number:"CS 229A",link:"https://explorecourses.stanford.edu/search?q=CS229A",university:"Stanford",category:["Artificial Intelligence"]},{title:"Web Applications",number:"CS 142",link:"https://cs142.stanford.edu",university:"Stanford",category:["Product","Computer Systems"]},{title:"Probability for Computer Scientists",number:"CS 109",link:"https://cs109.stanford.edu",university:"Stanford",category:["Artificial Intelligence","Mathematics","Computer Systems"]},{title:"International Organizations and World Order",number:"POLISCI 10N",link:"https://explorecourses.stanford.edu/search?q=POLISCI10N",university:"Stanford",category:["Social Science"]},{title:"Linear Algebra and Multivariable Calculus",number:"MATH 51",link:"https://explorecourses.stanford.edu/search?q=MATH51",university:"Stanford",category:["Artificial Intelligence","Mathematics"]},{title:"Computer Organization And Systems",number:"CS 107",link:"http://cs107.stanford.edu/",university:"Stanford",category:["Computer Systems"]},{title:"Electricity and Magnetism",number:"PHYSICS 43",link:"https://explorecourses.stanford.edu/search?q=PHYSICS43",university:"Stanford",category:["Natural Science"]},{title:"Mechanics",number:"PHYSICS 41",link:"https://explorecourses.stanford.edu/search?q=PHYSICS41",university:"Stanford",category:["Natural Science"]}],L=["Artificial Intelligence","Mathematics","Computer Systems","Social Science","Product","Natural Science"],D=[{school:"Stanford University",degrees:["M.S. Computer Science","B.S. Computer Science with Honors"],link:"https://stanford.edu",icon:"/images/degrees/stanford.png",years:[2023,2022]},{school:"University of Oxford",degrees:["International Development Studies"],link:"https://ox.ac.uk/",icon:"/images/degrees/oxford.png",years:[2022]}],E=[{company:"Google",position:"Student Researcher",icon:"/images/work/google.png",link:"https://google.com",daterange:"January 2023 - Present",points:["Researching few-shot semi-supervised sequential learning algorithms for sensor-based data."],companyType:["Big Tech"],technologiesUsed:["AI","Foundation Models"],timeFrame:["Part-time"]},{company:"Google",position:"Research Engineer Intern",icon:"/images/work/google.png",link:"https://google.com",daterange:"June 2022 - September 2022",points:["Developing novel few-shot semi-supervised sequential learning algorithms for sensor-based data, streams for wearable devices and achieving state of the art performance with less than 50 examples","Devising comprehensive testing mechanism to ensure real-world replicability including developing real-time WearOS / Android app, sequential error modeling, false positive testing on numerous datasets","Working with key stakeholders to identify success metrics, leading data collection efforts, spearheading cross-team collaboration, managing tasks and expectations with senior engineers"],companyType:["Big Tech"],technologiesUsed:["AI","Foundation Models","App Dev","SWE"],timeFrame:["Internship"]},{company:"Google",position:"Research Engineer Intern",icon:"/images/work/google.png",link:"https://google.com",daterange:"June 2021 - September 2021",points:["Using unsupervised techniques such as Deep Generative Models, Reinforcement Learning, and Probabilistic Graphical Models to detect and remove erroneous data from large databases at Google","Developing a novel generative adversarial imputation network designed to detect and recommend corrections to erroneous data fields with much better results than current industry standard solutions","Working with key stakeholders across multiple teams to understand their problems, collaborate to find a solution that addresses their key concerns, and learn key insights about development at needed scale"],companyType:["Big Tech"],technologiesUsed:["AI","Generative Models","SWE"],timeFrame:["Internship"]},{company:"Meta",position:"Machine Learning Intern",icon:"/images/work/meta.png",link:"https://facebook.com",daterange:"June 2020 - September 2020",points:["Building Machine Learning models to predict page takeover attempts and transform the suspicion actions into requests that must be approved by a non-suspicious admin using Python, Pytorch, SQL","Working on the page transparency initiative where we build touchpoints for users to be informed about general page information such as state-controlled media, primary admin location, page management history and suspicious updates using PHP, ReactJS, React Native, GraphQL, Relay","Transforming the page roles surface to help admins understand and take actions on behalf of their page"],companyType:["Big Tech"],technologiesUsed:["AI","App Dev","Web Dev","SWE"],timeFrame:["Internship"]},{company:"Samsung",position:"Machine Learning Intern",icon:"/images/work/samsung.png",link:"https://samsung.com",daterange:"June 2019 - September 2019",points:["Ideating an emotion detecting technology using voice features that revolutionizes voice assistant interaction and pitching to Samsung SIC executives: CTO, VP of innovation, operation, and Marketing","Developing a deep learning algorithm with sound processing technology (Python) to allow voice assistants and chatbots in customer service to be able to interpret human emotion","Developing an API using frameworks such as TensorFlow and Keras and filing a patent application"],companyType:["Big Tech"],technologiesUsed:["AI","SWE"],timeFrame:["Internship"]},{company:"Ample",position:"Cloud Engineering Intern",icon:"/images/work/ample.png",link:"https://ample.com",daterange:"September 2020 - December 2020",points:["Building the automotive cloud infrastructureto connect cars, charging stations, and autonomous robotic devicesand using the data for efficient resource allocation, problem detection and diagnosis","Designing and implementing the cloud infrastructure using Lambda,S3,Cloudwatch, EC2, EMR,IoT Core,Kenesis,VPC,CloudFormation,EKS, ElasticSearch,Kibana,IAM"],companyType:["Startup"],technologiesUsed:["AWS","SWE"],timeFrame:["Internship"]},{company:"SWVL",position:"Artificial Intelligence Research Intern",icon:"/images/work/swvl.png",link:"https://swvl.com",daterange:"April 2020 - June 2020",points:["Combining open-source maps and company data to design and implement an efficient map architecture","Developing a traffic overlay leveraging open-source and captain data; to estimate time of arrival using an optimized A* algorithm and to dynamically route the buses using Python, TensorFlow, OSM"],companyType:["Startup"],technologiesUsed:["AI","SWE"],timeFrame:["Internship"]},{company:"Prairie Health",position:"Deep Learning Researcher & Data Scientis",icon:"/images/work/prairie_health.png",link:"https://prairiehealth.co/",daterange:"April 2020 - June 2020",points:["Developing algorithms to search for the relevant scholarly papers for a given patient (disease, comorbidities, phenotype... etc.) using NLP and machine learning, then downloading the full paper","Developing NLPalgorithm to parse the research paper and output summaries for the Doctor (Python). This could be helpful for a patient with a rare disease or from an underrepresented group in research"],companyType:["Startup"],technologiesUsed:["AI","SWE"],timeFrame:["Part-time"]}],R=[{institution:"Stanford Artificial Intelligence Lab (SISL)",position:"Researcher",icon:"/images/degrees/stanford.png",link:"https://sisl.stanford.edu/",daterange:"September 2021 - June 2023",points:["Developing a deep reinforcement learning (DRL) simulation with multiple ethical framework (Deontology, Utilitarianism, and novel dynamic morality) to codify moral theories into agent's reward functions","Working under the guidance and supervision of Professor Mykel J. Kochenderfer"],companyType:["Academia"],technologiesUsed:["AI"],timeFrame:["Part-time"]},{institution:"Stanford Interactive Perception and Robot Learning Lab (IPRL)",position:"Researcher",icon:"/images/degrees/stanford.png",link:"https://ai.stanford.edu/",daterange:"September 2022 - June 2023",points:["","Working under the guidance and supervision of Professor Jeannette Bohg"],companyType:["Academia"],technologiesUsed:["AI"],timeFrame:["Part-time"]},{institution:"Stanford Artificial Intelligence Lab (SAIL)",position:"Undergraduate Researcher",icon:"/images/degrees/stanford.png",link:"https://ai.stanford.edu/",daterange:"Decemeber 2020 - January 2022",points:["Developing AI systems (CNNs, GANs, RL, decision trees) with weak supervision to predict brick kilns across the globe thus providing granular district-level data to NGOs, nonprofits, and policy makers","Building Infrastructure for large scale labelling project and using Amazon Mechanical Turk to label thousands of Brick Kilns","Documenting our work and methodology for research publication in undergraduate research journal","Working under the guidance and supervision of Professor Stefano Ermon"],companyType:["Academia"],technologiesUsed:["AI"],timeFrame:["Part-time"]}],W=n(907);var Z=n(181);var q,F=[{title:"Bash",competency:2,url:"https://www.gnu.org/software/bash/",category:["Tools","Languages"]},{title:"Amazon Web Services (AWS)",competency:4,url:"https://aws.amazon.com/",category:["Machine Learning","Data Engineering","Web Development","Tools"]},{title:"Microsoft Azure",competency:4,url:"https://azure.microsoft.com/en-us",category:["Machine Learning","Data Engineering","Web Development","Tools"]},{title:"Google Cloud Platform (GCP)",competency:4,url:"https://cloud.google.com/",category:["Machine Learning","Data Engineering","Web Development","Tools"]},{title:"MongoDB",competency:3,url:"https://www.mongodb.com/",category:["Web Development","Data Engineering"]},{title:"SQL",competency:4,url:"https://www.microsoft.com/en-us/sql-server",category:["Web Development","Data Engineering","Languages"]},{title:"Git/Mercurial",competency:3,url:"https://git-scm.com/",category:["Tools"]},{title:"Numpy",competency:5,url:"https://numpy.org/",category:["Machine Learning","Data Engineering","Python"]},{title:"Tensorflow + Keras",competency:5,url:"https://www.tensorflow.org/",category:["Machine Learning","Python"]},{title:"Pytorch",competency:5,url:"https://pytorch.org/",category:["Machine Learning","Python"]},{title:"GraphQL",competency:2,url:"https://graphql.org/",category:["Web Development","Data Engineering"]},{title:"Pandas",competency:5,url:"https://pandas.pydata.org/",category:["Data Engineering","Machine Learning","Python"]},{title:"Matplotlib",competency:3,url:"https://matplotlib.org/",category:["Data Engineering","Machine Learning","Python"]},{title:"Apache Spark",competency:2,url:"https://spark.apache.org/",category:["Data Engineering","Machine Learning"]},{title:"Node.JS",competency:3,url:"https://nodejs.org/en",category:["Web Development"]},{title:"React.JS",competency:3,url:"https://react.dev/",category:["Web Development"]},{title:"React Native",competency:3,url:"https://react.dev/",category:["Web Development"]},{title:"HTML + CSS",competency:4,url:"https://en.wikipedia.org/wiki/HTML",category:["Web Development","Languages"]},{title:"JavaScript",competency:4,url:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/",category:["Languages"]},{title:"Python",competency:5,url:"https://www.python.org/",category:["Languages","Python"]},{title:"C++",competency:4,url:"https://cplusplus.com/",category:["Languages"]},{title:"Java",competency:4,url:"https://cplusplus.com/",category:["Languages"]}].map((function(e){return(0,d.Z)((0,d.Z)({},e),{},{category:e.category.sort()})})),H=["#6968b3","#37b1f5","#40494e","#515dd4","#e47272","#cc7b94","#3896e2","#c3423f","#d75858","#747fff","#64cb7b"],B=(q=new Set(F.reduce((function(e,t){var n=t.category;return e.concat(n)}),[])),function(e){if(Array.isArray(e))return(0,W.Z)(e)}(q)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(q)||(0,Z.Z)(q)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).sort().map((function(e,t){return{name:e,color:H[t]}})),U=["Education","Experience","Skills","Courses"],G=function(){return(0,o.jsx)(a.Z,{title:"Resume",description:"Michael Elabd's Resume. Arthena, Matroid, YC, Skeptical Investments, Stanford ICME, Planet Labs, and Facebook.",children:(0,o.jsxs)("article",{className:"post",id:"resume",children:[(0,o.jsx)("header",{children:(0,o.jsxs)("div",{className:"title",children:[(0,o.jsx)("h2",{"data-testid":"heading",children:(0,o.jsx)(i.rU,{to:"resume",children:"Resume"})}),(0,o.jsx)("div",{className:"link-container",children:U.map((function(e){return(0,o.jsx)("h4",{children:(0,o.jsx)("a",{href:"#".concat(e.toLowerCase()),children:e})},e)}))})]})}),(0,o.jsx)(l,{data:D}),(0,o.jsx)(b,{jobs:E,researches:R}),(0,o.jsx)(I,{skills:F,categories:B}),(0,o.jsx)(N,{courses:T,categoryOrdering:L})]})})}},4942:function(e,t,n){function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return r}})},1413:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(4942);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}}}]);
//# sourceMappingURL=694.698e2bba.chunk.js.map