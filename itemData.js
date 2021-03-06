let people = [
    //Martin Luther King
    {name: "Martin Luther King Jr.", image: "images/Martin_Luther_King,_Jr.jpg", quote: "Intelligence plus character — that is the goal of true education.", bio: "Martin Luther King Jr. was an African American Baptist minister and activist who became the most visible spokesperson and leader in the American civil rights movement from 1955 until his assassination in 1968."},

    {name: "Martin Luther King Jr.", image: "images/Martin_Luther_King,_Jr.jpg", quote: "True peace is not merely the absence of tension; it is the presence of justice.", bio: "Martin Luther King Jr. was an African American Baptist minister and activist who became the most visible spokesperson and leader in the American civil rights movement from 1955 until his assassination in 1968."},
    
    {name: "Martin Luther King Jr.", image: "images/Martin_Luther_King,_Jr.jpg", quote: "If we are not careful, our colleges will produce a group of close-minded, unscientific, illogical propagandists, consumed with immoral acts. Be careful, 'brethren!' Be careful, teachers!", bio: "Martin Luther King Jr. was an African American Baptist minister and activist who became the most visible spokesperson and leader in the American civil rights movement from 1955 until his assassination in 1968."},
    
    //Barack Obama
    {name: "Barack Obama", image: "images/barack_obama.jpg", quote: "Change will not come if we wait for some other person or some other time. We are the ones we've been waiting for. We are the change that we seek.", bio: "Barack Hussein Obama II is an American politician and attorney who served as the 44th president of the United States from 2009 to 2017. A member of the Democratic Party, Obama was the first African-American president of the United States."},
    
    {name: "Barack Obama", image: "images/barack_obama.jpg", quote: "If you're walking down the right path and you're willing to keep walking, eventually you'll make progress.", bio: "Barack Hussein Obama II is an American politician and attorney who served as the 44th president of the United States from 2009 to 2017. A member of the Democratic Party, Obama was the first African-American president of the United States."},
    
    {name: "Barack Obama", image: "images/barack_obama.jpg", quote: "My fellow Americans, we are and always will be a nation of immigrants. We were strangers once, too.", bio: "Barack Hussein Obama II is an American politician and attorney who served as the 44th president of the United States from 2009 to 2017. A member of the Democratic Party, Obama was the first African-American president of the United States."},

    //Coretta Scott King
    {name: "Coretta Scott King", image: "images/Coretta_Scott_King.jpg", quote: "Hate is too great a burden to bear. It injures the hater more than it injures the hated.", bio: "Coretta Scott King was an American author, activist, civil rights leader, and the wife of Martin Luther King Jr. As an advocate for African-American equality, she was a leader for the civil rights movement in the 1960s. King was also a singer who often incorporated music into her civil rights work."},

    {name: "Coretta Scott King", image: "images/Coretta_Scott_King.jpg", quote: "Struggle is a never ending process. Freedom is never really won, you earn it and win it in every generation.", bio: "Coretta Scott King was an American author, activist, civil rights leader, and the wife of Martin Luther King Jr. As an advocate for African-American equality, she was a leader for the civil rights movement in the 1960s. King was also a singer who often incorporated music into her civil rights work."},

    //Frederick Douglass
    {name: "Frederick Douglass", image: "images/Frederick_Douglass.jpg", quote: "If there is no struggle, there is no progress.", bio: "Frederick Douglass was an American social reformer, abolitionist, orator, writer, and statesman. After escaping from slavery in Maryland, he became a national leader of the abolitionist movement in Massachusetts and New York, becoming famous for his oratory and incisive antislavery writings."},
	
	{name: "Frederick Douglass", image: "images/Frederick_Douglass.jpg", quote: "America is false to the past, false to the present, and solemnly binds herself to be false to the future.", bio: "Frederick Douglass was an American social reformer, abolitionist, orator, writer, and statesman. After escaping from slavery in Maryland, he became a national leader of the abolitionist movement in Massachusetts and New York, becoming famous for his oratory and incisive antislavery writings."},
	
	{name: "Frederick Douglass", image: "images/Frederick_Douglass.jpg", quote: "You have seen how a man was made a slave; you shall see how a slave was made a man.", bio: "Frederick Douglass was an American social reformer, abolitionist, orator, writer, and statesman. After escaping from slavery in Maryland, he became a national leader of the abolitionist movement in Massachusetts and New York, becoming famous for his oratory and incisive antislavery writings."},
	
	//Yvette Clarke
	{name: "Yvette Clarke", image: "images/Yvette_Clark.jpg", quote: "We must never forget that Black History is American History. The achievements of African Americans have contributed to our nation’s greatness.", bio: "Yvette Diane Clarke is an American politician serving as the U.S. Representative for New York's 9th congressional district since 2013. A member of the Democratic Party, she first entered Congress in 2007, representing New York's 11th congressional district until redistricting."},
	
	{name: "Yvette Clarke", image: "images/Yvette_Clark.jpg", quote: "Even after facing jail, Martin Luther King, Jr. courageously and boldly spoke out against racial inequality.", bio: "Yvette Diane Clarke is an American politician serving as the U.S. Representative for New York's 9th congressional district since 2013. A member of the Democratic Party, she first entered Congress in 2007, representing New York's 11th congressional district until redistricting."},
	
	//Chadwick Boseman
	{name: "Chadwick Boseman", image: "images/chadwick_boseman.jpg", quote: "You have to cherish things in a different way when you know the clock is ticking, you are under pressure.", bio: "Yvette Diane Clarke is an American politician serving as the U.S. Representative for New York's 9th congressional district since 2013. A member of the Democratic Party, she first entered Congress in 2007, representing New York's 11th congressional district until redistrictingChadwick Boseman, in full Chadwick Aaron Boseman, (born November 29, 1976, Anderson, South Carolina, U.S.—died August 28, 2020, Los Angeles, California), American actor and playwright who became a highly respected movie star with several iconic roles, notably that of T’Challa/Black Panther in the groundbreaking film Black Panther (2018)."},
	
	{name: "Chadwick Boseman", image: "images/chadwick_boseman.jpg", quote: "People don't want to experience change; they just want to wake up, and it's different.", bio: "Yvette Diane Clarke is an American politician serving as the U.S. Representative for New York's 9th congressional district since 2013. A member of the Democratic Party, she first entered Congress in 2007, representing New York's 11th congressional district until redistrictingChadwick Boseman, in full Chadwick Aaron Boseman, (born November 29, 1976, Anderson, South Carolina, U.S.—died August 28, 2020, Los Angeles, California), American actor and playwright who became a highly respected movie star with several iconic roles, notably that of T’Challa/Black Panther in the groundbreaking film Black Panther (2018)."},

    //Oprah Winfrey
    {name: "Oprah Winfrey", image: "images/oprah_winfrey.jpg", quote: "Every time you state what you want or believe, you’re the first to hear it. It’s a message to both you and others about what you think is possible. Don’t put a ceiling on yourself.", bio: "Oprah Gail Winfrey is an American talk show host, television producer, actress, author, and philanthropist."},

    {name: "Oprah Winfrey", image: "images/oprah_winfrey.jpg", quote: "Be thankful for what you have; you'll end up having more. If you concentrate on what you don't have, you will never, ever have enough.", bio: "Oprah Gail Winfrey is an American talk show host, television producer, actress, author, and philanthropist."},

    {name: "Oprah Winfrey", image: "images/oprah_winfrey.jpg", quote: "Where there is no struggle, there is no strength.", bio: "Oprah Gail Winfrey is an American talk show host, television producer, actress, author, and philanthropist."},

    //Serena Williams
    {name: "Serena Williams", image: "images/serena_williams.jpg", quote: "I am lucky that whatever fear I have inside me, my desire to win is always stronger.", bio: "Serena Jameka Williams is an American professional tennis player and former world No. 1 in women's single tennis. She has won 23 Grand Slam singles titles, the most by any player in the Open Era, and the second-most of all time behind Margaret Court."},

    {name: "Serena Williams", image: "images/serena_williams.jpg", quote: "I definitely have found a balance. I've had so many offers in the past to do different movies or different things and I always choose tournaments over it.", bio: "Serena Jameka Williams is an American professional tennis player and former world No. 1 in women's single tennis. She has won 23 Grand Slam singles titles, the most by any player in the Open Era, and the second-most of all time behind Margaret Court."},

    {name: "Serena Williams", image: "images/serena_williams.jpg", quote: "Family's first, and that's what matters most. We realize that our love goes deeper than the tennis game.", bio: "Serena Jameka Williams is an American professional tennis player and former world No. 1 in women's single tennis. She has won 23 Grand Slam singles titles, the most by any player in the Open Era, and the second-most of all time behind Margaret Court."},

    //Malcolm X
    {name: "Malcolm X", image: "images/malcolm_x.jpg", quote: "There is no better than adversity. Every defeat, every heartbreak, every loss, contains its own seed, its own lesson on how to improve your performance next time.", bio: "Malcolm X was an African-American Muslim minister and human rights activist who was a popular figure during the civil rights movement. He is best known for his time spent as a vocal spokesman for the Nation of Islam."},

    {name: "Malcolm X", image: "images/malcolm_x.jpg", quote: "Education is the passport to the future, for tomorrow belongs to those who prepare for it today.", bio: "Malcolm X was an African-American Muslim minister and human rights activist who was a popular figure during the civil rights movement. He is best known for his time spent as a vocal spokesman for the Nation of Islam."},

    {name: "Malcolm X", image: "images/malcolm_x.jpg", quote: "You're not to be so blind with patriotism that you can't face reality. Wrong is wrong, no matter who does it or says it.", bio: "Malcolm X was an African-American Muslim minister and human rights activist who was a popular figure during the civil rights movement. He is best known for his time spent as a vocal spokesman for the Nation of Islam."}
]
