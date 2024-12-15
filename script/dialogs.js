const dialogs = {
    goStartPl: {
       text1: "Noc nad Luthen była czarna jak atrament, przetykana jedynie słabym blaskiem gwiazd. Miasto, spowite mgłą, zdawało się wstrzymywać oddech. W tej ciszy, która bardziej przypominała groźbę niż ukojenie, w rezydencji Eliasza Althorna, wybitnego mistrza magii luster wydarzyło się coś, co wstrząsnęło podstawami świata.",

       text2: "Strażnicy szybko zamknęli miejsce zbrodni, a wiadomość o śmierci Althorna rozeszła się po mieście jak pożar. Ktoś odważył się naruszyć równowagę między światem ludzi a lustrzanym wymiarem. Ktoś zabił jedynego człowieka, który mógł opanować tę moc.",

       text3: "Portal pozostaje otwarty, jego światło coraz bardziej zniekształca rzeczywistość, a czas ucieka. Jeśli nie odkryjesz prawdy i nie znajdziesz sprawcy, miasto Luthen stanie się niczym więcej niż pyłem na wietrze, pochłoniętym przez bezdenne lustro.",

       text4: "Teraz to Ty stoisz w centrum tej opowieści. Czy dasz radę rozwikłać tajemnicę? Czy odkryjesz, co wydarzyło się tej nocy? Każda decyzja będzie miała swoje konsekwencje. Każdy wybór zbliży Cię do prawdy... lub do zguby.",

       text5: "Czas płynie. Śledztwo zaczyna się teraz."
    },
    
    meetMayorPl: {
        text1: "Brama rezydencji Eliasza Althorna była otwarta, choć otoczenie zdawało się temu zaprzeczać, mrok spowijał budynek, a mgła wiła się nisko, jakby niechętnie wpuszczała kogokolwiek w swoje objęcia. W powietrzu unosiła się dziwna, metaliczna woń ozonu, która wbijała się w nozdrza i pozostawiała nieprzyjemny posmak niepokoju. Przez otwarte drzwi wejściowe widać było słabe światło lamp, migoczące niczym świeca na wietrze",

        text2: "W środku panował chaos, podłoga warsztatu Althorna usiana była odłamkami luster, które połyskiwały jak tysiące maleńkich księżyców. Czarnomagiczne runy zdobiły ściany, pulsując niepokojącym, niestabilnym światłem. Mimo że ciało mistrza zostało już zabrane przez straż, w pomieszczeniu wciąż wyczuwało się aurę tragedii.",

        text3: "Przy oknie, z twarzą wyrytą mieszanką zmęczenia i napięcia, stał Burmistrz Luthen, niski, postawny mężczyzna o siwiejących skroniach i spojrzeniu, które wydawało się przebijać mgłę. Na widok Twojej postaci odwrócił się z ulgą, choć w jego oczach błysnęła iskra desperacji.",

        text4: "'Nareszcie,' powiedział, jakby Twoje pojawienie się było jedynym, co mogło przywrócić mu spokój. 'Potrzebujemy Cię, i to natychmiast. Sytuacja jest… delikatnie mówiąc, poza naszym zasięgiem.'",

        text5: "Wskazał dłonią na roztrzaskane lustra i czarne runy. 'To nie jest zwykłe morderstwo. Wszyscy mówią o portalu, o magii… ale ja potrzebuję dowodów, faktów. I odpowiedzi, zanim miasto całkiem pogrąży się w chaosie.'"
    },

    mayorQuestion1Handler: {
        myQuestion: "Co się dzieje w mieście po śmierci Althorna?",

        mayorText: "Po tym, jak zginął, atmosfera w Luthen stała się... napięta. Mieszkańcy są wstrząśnięci, ale plotki o lustrzanym wymiarze zaczynają się rozprzestrzeniać. Wiesz, że Strażniczka Luster była jednym z ostatnich, którzy odwiedzili Althorna? Nie wiem, co się wtedy stało, ale po jej wizycie atmosfera w mieście zmieniła się na gorsze. Ona i Althorn mieli jakąś niejasną relację. Może ona wie coś, czego my nie rozumiemy. Może nawet znała sekret, który doprowadził do jego śmierci…"
    },

    mayorQuestion2Handler: {
        myQuestion: "Co możesz powiedzieć o Althornie? Jakie miał relacje z mieszkańcami?",

        mayorText: "Althorn był… trudną postacią. Niezbyt otwarty na innych, ale i nie wrogi. Miał swoich zwolenników, ale także osoby, które go nie lubiły. Strażniczka Luster była jedną z tych, które spędzały z nim czas, a ich współpraca nie była do końca jasna. Ona miała dostęp do jego badań i była z nim związana, choć nigdy nie mówiła głośno o ich relacji. Mówi się, że miała swoje powody, by chronić go przed innymi, ale teraz, po jego śmierci, znika z miasta. Nie wiem, czy była zaangażowana w jego zabójstwo, ale na pewno wie coś, czego nie mówi."
    },

    mayorQuestion3Handler: {
        myQuestion: "Co się stało w warsztacie? Jak wyglądała scena zbrodni?",

        mayorText: "Warsztat Althorna to coś, czego nie da się zapomnieć. Lustra porozbijane na kawałki, leżące na ziemi niczym… jakby to była jakaś magia, której nie potrafię pojąć. Widziałem runy na ścianach, które pulsowały dziwnym światłem. Coś potężnego musiało się tu wydarzyć. A Strażniczka… Ona była tu tuż przed tym, jak znaleziono ciało. Wiem, że Althorn miewał kontakt z nią w sprawach swoich badań, ale nie wiem, czy to ma jakiś związek z jego śmiercią. Może to ona zbliżyła się do niebezpiecznego zaklęcia…"
    },

    mayorQuestion4Handler: {
        myQuestion: "Kto mógłby mieć motyw, by zabić Althorna?",

        mayorText: "Z jednej strony mamy Therona, jego dawnego ucznia, który opuścił go po kłótni. Z drugiej, tajemniczą Wiedźmę z Lasu, która podobno znała sekrety Althorna, których nikt inny nie wiedział. Ale nie możemy zapominać o Strażniczce Luster. Często współpracowała z Althornem i miała dostęp do jego badań, które były… kontrowersyjne. Mówią, że zniknęła zaraz po jego śmierci, ale czy to naprawdę była przypadkowość? Jeśli ktoś mógłby wiedzieć, co się wydarzyło, to ona. Choć nie wiem, czy jej motyw byłby wystarczający do zabicia Althorna."
    },

    mayorQuestion5Handler: {
        myQuestion: "Co możesz powiedzieć o magii luster, o tych portalach?",

        mayorText: "Althorn był jednym z nielicznych, którzy potrafili zgłębiać magię luster w taki sposób, by otwierać portale do innych wymiarów. Ale nikt nie rozumie, jak to działa. Strażniczka Luster miała podobną wiedzę, ale nigdy nie ujawniała pełnych sekretów. Podobno jej zadaniem było pilnowanie tego, by magia luster nie wydostała się poza kontrolę. Jeśli ktoś miałby zrozumieć tę moc, to właśnie ona. Mówią, że była w okolicach warsztatu, ale nic więcej nie wiadomo. Jeśli chcesz dowiedzieć się więcej, musisz ją znaleźć. Ale uwaga – ona nie toleruje wtrącania się w jej sprawy."
    },

    crimeSceneAnalysis: {
        crimeSceneInvestigationText1: "Warsztat Eliasza Althorna wciąż odgrodzony jest przez straż miejską, a samo pomieszczenie zdaje się wręcz emanować niepokojącą aurą. Od czasu odkrycia zbrodni nikt poza tobą nie odważył się wejść do środka, choć strażnicy wynieśli ciało, by umożliwić badanie miejsca. Zniszczenia są widoczne na pierwszy rzut oka, kawałki luster pokrywają podłogę niczym rozsypane gwiazdy, a na ścianach wciąż połyskują tajemnicze runy.",

        crimeSceneInvestigationText2: "Każdy szczegół w tym miejscu może być kluczem do rozwiązania zagadki, ukryty ślad, niepasujący element, coś, co przeoczyli strażnicy. Wiesz, że musisz dokładnie zbadać każdy zakątek, bo odpowiedzi leżą tu, na wyciągnięcie ręki."
    },

    selectNextStepHandler: {
        mayorText: "Dziękuję, że pomagasz nam w tej sprawie. Luthen nie może dłużej żyć w strachu. Jeśli odkryjesz coś o Strażniczce Luster, lub wyjaśnisz, co się wydarzyło, wróć do mnie. Miasto liczy na ciebie. Pamiętaj tylko, detektywie, że nie wszystko jest tym, czym się wydaje."
    }

}