(()=>{let e={warnings:[{warning_number:1,category:"Online Services",icon_tag:"missing-oli",description:"This Product requires an internet connection and may have online services and features that collect and store data about you. Make sure to review the privacy policy for more information on how your data is used and protected."},{warning_number:2,category:"Data Collection",icon_tag:"data-collection",description:"Ubisoft may collect and store data about you in relation to your use of the Product, such as your connection information and compatible device data. Your privacy is important to Ubisoft, but be cautious and review their privacy policy to understand how your data is handled."},{warning_number:3,category:"Third-party Analytics",icon_tag:"data-usage-analytics",description:"Ubisoft uses third-party analytics tools to collect information about your gaming habits and use of the Product. This may include personal data such as your device identifiers and settings, game scores, and feature usage. Make sure you review their privacy policy for more details."},{warning_number:4,category:"Targeted Advertising",icon_tag:"behavioral-advertising",description:"The Product may display advertisements and collect information for targeted advertising purposes. This may include data such as your age, gender, and the ads you interact with. Read Ubisoft's privacy policy to understand how this information is used and how to opt-out."},{warning_number:5,category:"Unauthorized Program Detection",icon_tag:"access-control",description:"The Product may monitor your hardware for unauthorized third-party programs. If detected, information about the program and your account may be sent to Ubisoft. Your access to the Product may be terminated based on the detection results."}]};function t(){setTimeout((function(){var t;t=e,chrome.runtime.sendMessage({message:"show_data",data:t})}),10)}chrome.runtime.onMessage.addListener(((e,o,i)=>{if("highlight_words"===e.message)return async function(){const e=await async function(){try{return["access","aggregate","connect","consolidate","disclose","display","maintain","mare","investigate","post","reserve","review","allow","contact","enforce","maximize","prevent","share","apply","contract","ensure","minimize","prohibit","specify","avoid","customize","exchange","monitor","protect","store","block","deny","help","notify","provide","update","change","destroy","honor","obligate","recommend","urge","choose","disallow","imply","opt-in","request","use","collect","comply","discipline","disclaim","inform","limit","opt-out","require","verify","personal","ip address","third-party","publish","consent","process","create","delete","retention","registration","mobile","phone","speech recognition","cloud","service","jurisdictions","password","protection","information","location","real-time","upload","download","shared","first-party","automatically","usage","trend","log","mapping","advertising","track","payment","chat","history","record","anonymous","biometric","cookie","gdpr","correction","child","age","legal","erasure","deletion","withdraw","retention period","security","sell","monetization","transfer","under-age","accountability","agree","disagree"].map((e=>e.trim())).filter((e=>""!==e))}catch(e){return console.error("Failed to fetch or parse the wordlist:",e),[]}}();!function(){const e=[];function t(e){const t=getComputedStyle(e);return"none"!==t.display&&"hidden"!==t.visibility}(function o(i){if(i.nodeType===Node.TEXT_NODE)i.parentElement&&t(i.parentElement)&&e.push(i.textContent);else if(i.nodeType===Node.ELEMENT_NODE&&t(i))for(const e of i.childNodes)o(e)})(document.body),e.join(" ")}(),document.querySelectorAll("body *").forEach((t=>{const o=t.firstChild;if(null!==o&&o.nodeType===Node.TEXT_NODE){const i=o.nodeValue,n=e.reduce(((e,t)=>{const o=new RegExp(`\\b${t}\\b`,"gi");return e.replace(o,`<span style="background-color: yellow">${t}</span>`)}),i);if(n!==i){const e=document.createElement("span");e.innerHTML=n,t.replaceChild(e,o)}}}))}().then(t),!0}))})();
//# sourceMappingURL=contentBundle.js.map