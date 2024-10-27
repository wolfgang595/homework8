import{o,c as i,t as _,n as h,r as c,u as x,a as y,b as r,w,B as b,d,F as C,e as T,f as k,_ as M,g as R,h as L,i as B}from"./index-694e9529.js";const E={__name:"DifficultyChip",props:{difficulty:{type:String,required:!0}},setup(f){const a=f;return(t,p)=>(o(),i("p",{class:h(["px-4 py-2 rounded-full border absolute uppercase text-white bottom-5 left-8 text-2xl font-bold",a.difficulty==="easy"?"bg-green-300":a.difficulty==="medium"?"bg-yellow-300":"bg-red-300"])},_(a.difficulty),3))}},H={key:0,class:"flex h-full w-full flex-col items-center gap-8 p-10"},N=["innerHTML"],S={class:"grid w-full flex-grow grid-cols-2 gap-8"},q=["innerHTML","onClick"],O={key:1,class:""},j={__name:"QuestionPage",setup(f){const a=k(),t=c(null),p=x(),s=c([]),{changeScore:v}=B(),u=c("");y(async()=>{t.value=await a.getQuestion(p.params.id),s.value.push({id:s.value.length,correct:!0,answer:t.value.correct_answer,points:t.value.difficulty==="easy"?10:t.value.difficulty==="medium"?20:30}),t.value.incorrect_answers.map(e=>{s.value.push({id:s.value.length,correct:!1,answer:e,points:-5})}),s.value=g(s.value)});const g=e=>{for(let l=e.length-1;l>0;l--){const n=Math.floor(Math.random()*(l+1));[e[l],e[n]]=[e[n],e[l]]}return e},m=e=>{v(e),e>0?u.value="CORRECT":u.value="INCORRECT",setTimeout(()=>{L.push("/homework8/")},1e3)};return(e,l)=>t.value?(o(),i("div",H,[r(b,null,{default:w(()=>[r(M),R("   "),d("span",{class:h(["font-bold",u.value==="CORRECT"?"text-green-400":"text-red-400"])},_(u.value),3)]),_:1}),d("div",{innerHTML:t.value.question,class:"text-center text-2xl font-bold"},null,8,N),d("div",S,[(o(!0),i(C,null,T(s.value,n=>(o(),i("div",{innerHTML:n.answer,key:n.id,onClick:V=>m(n.points),class:"bg-green-500 flex items-center justify-center text-4x1 rounded-lg text-white py-10 px-2"},null,8,q))),128))]),r(E,{difficulty:t.value.difficulty},null,8,["difficulty"])])):(o(),i("div",O," Loading... "))}};export{j as default};
