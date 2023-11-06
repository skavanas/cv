type person={
    nom:"Ennadif",
    prenom:"Anas",
    Age:20,
    Genre:"Homme",
    mail:"anassssaa123@gmail.com",
    city:"Fes",
    linkedin:"https://www.linkedin.com/in/anas-ennadif-0268a0246/",
}
    export const Infop = ({nom,prenom,Age,Genre,mail,city,linkedin}:person) =>{
    return(
            <div>
                <p> Nom: {nom}  {prenom} </p> 
                <p>Age : {Age} </p>
                <p>Genre :  {Genre} </p>
                <p>Lieu de résidence : {city}  </p>
                <p>Lieu de Naissance : {city}</p>
                <p>GSM : (+212)xxxxxxx</p>
                <p>Adresse : xxxxxxxxxxxxxxx</p>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAB7CAMAAABjGQ9NAAAAY1BMVEUCdLP///8AbrCNsdKDq88AbK+evtoAaq+vyeD5+/3X5vG30OT5/f4terYAcLEAcrJoncjx9/oAZq2SttWlwtxelsRVksI7grpvoso8hrzK3etBir7A1ucvf7ne6/Ps8vgAX6nDIvw8AAADQ0lEQVRoge3bbbeiIBAAYEBHCwtSM0vN7v//lau1txdm7LR7eLm7h/lwv2Q9cUUYhmD8GnJVJ76iXskbyuY/3QlA+AuAvvu2a1DMbyiob3aSa8/0FHky20PuX57xYbLPvv/ht1BnzjoIQjMGHdsHs/csEYFskbA0zO2ebnjK0mDtjna0g9t6mummcPjFlmydQ1rIURYJqzzbQu/5dxRbR4MubUM/8keUjZtJlrRFf+Ev0Ti566StDZpvnEzxlF2tuBmdi4aT7UY05wcHDSdsURN24aC7ETZ0hD0y+6ksZZs97fqctX7skrA3fTh7ffJjS8K+nK3TpI0f7+kBdzCmE7Y6EHbqx2bViOjL1j5N2qrx0mx6TK0yg3Yxqi3N3wZefLmgl/IW2D0GtzJ1tD5fytcUS+Q8xpSydpUyLeepGqA9NIdWuFshv8vPtVLKZSHmZ64Nov2HMXcTpT7Ic+za0xpObdv+0Pen81aAeO+TtgIznrNUYbx2FxSIXSF/Zx7rS7c66rdLScoW6ShfY8zuT7lm0nyxuX2zql1tzDlo2H0tJ9eUDeZUwvnqPqxqnL3v5g+A7UBM+1OC2ywWa//CXlN2dURtvr93aYCyZBNveYRc6PN2bEGleI8Y6R5nxUa5hhkDWbuwYTc4xzKDzLmstJtaRL3G5kzcchs2tY5BH0A03Ib9SZREw33ZPMEN92ZLnHB6s0u8kPVm8yOaVGza5dgNQ4cXc+ZH2Ldl2jLIc2A9PcCOaGyzZtcC9PWOal011BNfavOG27KPz62CnphQcdXEkp29/kNzqkTXmJ3Njj0a6YFmxBCPOrodG01TOdHf0P6jFRsX/ojSBa/NL2jFlmis1mfc29CerxUbDxua4SEGXWXFPuJ8TOCCsBubKK4Dztbd2C1hF+gqVKyyYhM5CfGQObE3RNEx2tGOdrSjHe1oRzva0Y52tKP9j9n7N+8j9sc4ZeM1MDpaQP/GZJ8Z8VyfMl/LMmIPSh3RVag68eF+6PMl+EVq+8vcNSV+Zfuf7X9HO9o/0g54viTkuZqQ54lw9duXLRk/BTo/duKMdxDgyB7T0M3nBesA5wV1nt3OSWYBzknOydHtfGgf7HwoD3Qu9hc4CUXmHQ0jEAAAAABJRU5ErkJggg=="
                  alt="LinkedIn Profile" className="linkedin"/> <a href={linkedin} >Linkedin</a> 
            </div>    
    )
}