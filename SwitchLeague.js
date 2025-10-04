// JavaScript source code
$(function () {

    // SetupGames_Year1();

    SetupGames();

    BuildLeague();

    BuildLastScores();

    // set week in title
    $(".titlebottomright").html("Week " + SMGameList.length);
    
});

var SMGameList = new Array();
var RCGameList = new Array();
var TCGameList = new Array();
var TSGameList = new Array();

var leagueList = new Array();

// https://www.w3schools.com/charsets/ref_emoji_smileys.asp
var sadFaceList = new Array();
    sadFaceList.push("&#128542;");              // DISAPPOINTED FACE
    sadFaceList.push("&#128544;");              // ANGRY FACE
    sadFaceList.push("&#128545;");              // POUTING FACE
    sadFaceList.push("&#128546;");              // CRYING FACE
    sadFaceList.push("&#128547;");              // PERSEVERING FACE
    sadFaceList.push("&#128548;");              // FACE WITH LOOK OF TRIUMPH            // weird name
    sadFaceList.push("&#128550;");              // FROWNING FACE WITH OPEN MOUTH
    sadFaceList.push("&#128551;");              // 	ANGUISHED FACE
    sadFaceList.push("&#128552;");              // 	FEARFUL FACE
    sadFaceList.push("&#128553;");              // 	WEARY FACE
    sadFaceList.push("&#128557;");              // 	LOUDLY CRYING FACE
    sadFaceList.push("&#128560;");              // FACE WITH OPEN MOUTH AND COLD SWEAT
    sadFaceList.push("&#128566;");              // 	FACE WITHOUT MOUTH


function SetupGames_Year1() {

    // Week 1 picks
    var weekDate = '2025-02-22';
    SMGameList.push(new Game(
           'SM'
        ,  weekDate
        , 'Norwich'
        , 'Stoke'
        , 'H'
        , 'H'
        , 4
        , 2
    ));

    RCGameList.push(new Game(
          'RC'
        ,  weekDate
        , 'Bromley'
        , 'Harrogate Town'
        , 'H'
        , 'H'
        , 2
        , 0
    ));

    TCGameList.push(new Game(
          'TC'
        ,  weekDate
        , 'Bolton'
        , 'Leyton Orient'
        , 'H'
        , 'H'
        , 2
        , 1
    ));

    TSGameList.push(new Game(
           'TS'
        ,  weekDate
        , 'West Brom'
        , 'Oxford'
        , 'H'
        , 'H'
        , 2
        , 0
    ));

    // Week 2 picks
    weekDate = '2025-03-01';
    SMGameList.push(new Game(
          'SM'
        ,  weekDate
        , 'Middlesbrough'
        , 'Derby County'
        , 'H'
        , 'H'
        , 1
        , 0
    ));

    RCGameList.push(new Game(
          'RC'
        ,  weekDate
        , 'Walsall'
        , 'Swindon'
        , 'H'
        , 'A'
        , 1
        , 3
    ));

    TCGameList.push(new Game(
          'TC'
        ,  weekDate
        , 'Stevenage'
        , 'Huddersfield Town'
        , 'A'
        , 'A'
        , 1
        , 2
    ));

    TSGameList.push(new Game(
          'TS'
        ,  weekDate
        , 'Peterborough United'
        , 'Shrewbury Town'
        , 'H'
        , 'H'
        , 3
        , 1
    ));

    // Week 3 picks
    weekDate = '2025-03-08';
    SMGameList.push(new Game(
          'SM'
        ,  weekDate
        , 'Burnley'
        , 'Luton Town'
        , 'H'
        , 'H'
        , 4
        , 0
    ));

    RCGameList.push(new Game(
          'RC'
        ,  weekDate
        , 'Stevenage'
        , 'Mansfield Town'
        , 'H'
        , 'D'
        , 1
        , 1
    ));

    TCGameList.push(new Game(
          'TC'
        ,  weekDate
        , 'Burton Albion'
        , 'Bolton'
        , 'A'
        , 'A'
        , 1
        , 2
    ));

    TSGameList.push(new Game(
          'TS'
        ,  weekDate
        , 'Briston City'
        , 'Hull City'
        , 'H'
        , 'D'
        , 1
        , 1
    ));

    // Week 4 picks
    weekDate = '2025-03-15';
    SMGameList.push(new Game(
          'SM'
        ,  weekDate
        , 'Grimsby'
        , 'Salford'
        , 'H'
        , 'A'
        , 0
        , 1
    ));

    RCGameList.push(new Game(
          'RC'
        ,  weekDate
        , 'Charlton'
        , 'Wigan'
        , 'H'
        , 'H'
        , 2
        , 1
    ));

    TCGameList.push(new Game(
          'TC'
        ,  weekDate
        , 'Accrington'
        , 'Gillingham'
        , 'H'
        , 'D'
        , 1
        , 1
    ));

    TSGameList.push(new Game(
          'TS'
        ,  weekDate
        , 'West Brom'
        , 'Hull City'
        , 'H'
        , 'D'
        , 1
        , 1
    ));

    // Week 5 picks
    weekDate = '2025-03-22';
    SMGameList.push(new Game(
          'SM'
        ,  weekDate
        , 'Chesterfield'
        , 'Harrogate'
        , 'H'
        , 'D'
        , 0
        , 0
    ));

    RCGameList.push(new Game(
          'RC'
        ,  weekDate
        , 'Port Vale'
        , 'Morcombe'
        , 'H'
        , 'H'
        , 1
        , 0
    ));

    TCGameList.push(new Game(
          'TC'
        ,  weekDate
        , 'Braintree'
        , 'York City'
        , 'A'
        , 'H'
        , 2
        , 1
    ));

    TSGameList.push(new Game(
          'TS'
        ,  weekDate
        , 'AFC Wimbledon'
        , 'Barrow'
        , 'H'
        , 'H'               // early payout
        , 2
        , 2
    ));


    // Week 6 picks
    weekDate = '2025-03-29';
    SMGameList.push(new Game(
          'SM'
        ,  weekDate
        , 'East Fife'
        , 'Spartans'
        , 'A'
        , 'H'
        , 4
        , 2
    ));

    RCGameList.push(new Game(
          'RC'
        ,  weekDate
        , 'Doncaster'
        , 'Carlisle'
        , 'H'
        , 'H'
        , 3
        , 1
    ));

    TCGameList.push(new Game(
          'TC'
        ,  weekDate
        , 'Burnley'
        , 'Bristol City'
        , 'H'
        , 'H'
        , 1
        , 0
    ));

    TSGameList.push(new Game(
          'TS'
        ,  weekDate
        , 'Exeter'
        , 'Wrexham'
        , 'A'
        , 'A'
        , 0
        , 2
    ));

    // Week 7 picks
    weekDate = '2025-04-05';
    SMGameList.push(new Game(
          'SM'
        ,  weekDate
        , 'Bolton'
        , 'Bristol Rovers'
        , 'H'
        , 'H'
        , 1
        , 0
    ));

    RCGameList.push(new Game(
          'RC'
        ,  weekDate
        , 'Salford'
        , 'Gillingham'
        , 'H'
        , 'A'
        , 2
        , 2
    ));

    TCGameList.push(new Game(
          'TC'
        ,  weekDate
        , 'QPR'
        , 'Cardiff'
        , 'H'
        , 'D'
        , 0
        , 0
    ));

    TSGameList.push(new Game(
          'TS'
        ,  weekDate
        , 'Charlton'
        , 'Lincoln'
        , 'H'
        , 'D'
        , 2
        , 2
    ));

    // Week 8 picks
    weekDate = '2025-04-12';
    SMGameList.push(new Game(
          'SM'
        ,  weekDate
        , 'QPR'
        , 'Bristol City'
        , 'A'
        , 'H'
        , 1
        , 1
    ));

    RCGameList.push(new Game(
          'RC'
        ,  weekDate
        , 'Barrow'
        , 'Walsall'
        , 'A'
        , 'H'
        , 2
        , 0
    ));

    TCGameList.push(new Game(
          'TC'
        ,  weekDate
        , 'Sunderland'
        , 'Swansea'
        , 'H'
        , 'A'
        , 0
        , 1
    ));

    TSGameList.push(new Game(
          'TS'
        ,  weekDate
        , 'Northhampton'
        , 'Reading'
        , 'A'
        , 'H'
        , 0
        , 0
    ));

    // Week 9 picks - Friday
    weekDate = '2025-04-18';
    SMGameList.push(new Game(
            'SM'
        ,  weekDate
        , 'Bolton'
        , 'Wycombe'
        , 'A'
        , 'A'
        , 0
        , 2
    ));

    RCGameList.push(new Game(
            'RC'
        ,  weekDate
        , 'Hudderfield'
        , 'Cambridge'
        , 'H'
        , 'A'
        , 1
        , 2
    ));

    TCGameList.push(new Game(
            'TC'
        ,  weekDate
        , 'Blackburn'
        , 'Millwall'
        , 'A'
        , 'H'
        , 4
        , 1
    ));

    TSGameList.push(new Game(
            'TS'
        ,  weekDate
        , 'Leyton Orient'
        , 'Barnsley'
        , 'H'
        , 'H'
        , 4
        , 3
    ));


   // Week 9 picks - Monday
   weekDate = '2025-04-21';
   SMGameList.push(new Game(
           'SM'
       ,  weekDate
       , 'Sheff Wed'
       , 'Middlesborough'
       , 'A'
       , 'H'
       , 2
       , 1
   ));

   RCGameList.push(new Game(
           'RC'
       ,  weekDate
       , 'Chesterfield'
       , 'Bradford'
       , 'A'
       , 'A'
       , 3
       , 3
   ));

   TCGameList.push(new Game(
           'TC'
       ,  weekDate
       , 'Burton'
       , 'Birmingham'
       , 'A'
       , 'A'
       , 0
       , 2
   ));

   TSGameList.push(new Game(
           'TS'
       ,  weekDate
       , 'Stockport'
       , 'Huddersfield'
       , 'H'
       , 'H'
       , 2
       , 1
   ));


   // Week 10 picks 
   weekDate = '2025-04-26';
   SMGameList.push(new Game(
           'SM'
       ,  weekDate
       , 'MK Dons'
       , 'Grimsby'
       , 'A'
       , 'D'
       , 0
       , 0
   ));

   RCGameList.push(new Game(
           'RC'
       ,  weekDate
       , 'Millwall'
       , 'Swansea'
       , 'A'
       , 'H'
       , 1
       , 0
   ));

   TCGameList.push(new Game(
           'TC'
       ,  weekDate
       , 'Stockport'
       , 'Lincoln'
       , 'H'
       , 'H'
       , 3
       , 2
   ));

   TSGameList.push(new Game(
           'TS'
       ,  weekDate
       , 'Blackburn'
       , 'Watford'
       , 'H'
       , 'H'
       , 2
       , 1
   ));


   // Week 11 1230 picks 
   weekDate = '2025-05-02 12:30';
   SMGameList.push(new Game(
           'SM'
       ,  weekDate
       , 'Sheffield Utd'
       , 'Blackburn'
       , 'A'
       , 'D'
       , 1
       , 1
   ));

   RCGameList.push(new Game(
           'RC'
       ,  weekDate
       , 'West Brom'
       , 'Luton'
       , 'A'
       , 'H'
       , 5
       , 3
   ));

   TCGameList.push(new Game(
           'TC'
       ,  weekDate
       , 'Swansea'
       , 'Oxford Utd'
       , 'H'
       , 'D'
       , 0
       , 0
   ));

   TSGameList.push(new Game(
           'TS'
       ,  weekDate
       , 'Bristol City'
       , 'Preston'
       , 'H'
       , 'D'
       , 2
       , 2
   ));


    // Week 11 1500 picks 
    weekDate = '2025-05-02 15:00';
    SMGameList.push(new Game(
            'SM'
        ,  weekDate
        , 'Bradford'
        , 'Fleetwood'
        , 'H'
        , 'H'
        , 1
        , 0
    ));

    RCGameList.push(new Game(
            'RC'
        ,  weekDate
        , 'Reading'
        , 'Barnsley'
        , 'H'
        , 'A'
        , 2
        , 4
    ));

    TCGameList.push(new Game(
            'TC'
        ,  weekDate
        , 'Lincoln'
        , 'Wrexham'
        , 'A'
        , 'A'
        , 0
        , 2
    ));

    TSGameList.push(new Game(
            'TS'
        ,  weekDate
        , 'Huddersfield'
        , 'Leyton Orient'
        , 'A'
        , 'A'
        , 1
        , 4
    ));

}


function SetupGames() {

    // Week 1 picks
    var weekDate = '2025-08-02';
    SMGameList.push(new Game(
           'SM'
        ,  weekDate
        , 'Lincoln'
        , 'Reading'
        , 'A'
        , 'H'
        , 2
        , 0
        , '31/10'
    ));

    RCGameList.push(new Game(
          'RC'
        ,  weekDate
        , 'Doncaster'
        , 'Exeter'
        , 'H'
        , 'H'
        , 1
        , 0
        , '3/4'
    ));

    TCGameList.push(new Game(
          'TC'
        ,  weekDate
        , 'Wigan'
        , 'North Hampton'
        , 'H'
        , 'H'
        , 2
        , 0
        , '1/1'
    ));

    TSGameList.push(new Game(
           'TS'
        ,  weekDate
        , 'Bristol Rovers'
        , 'Harrogate'
        , 'H'
        , 'A'
        , 0
        , 1
        , '5/6'
    ));



    // Week 2 picks
    var weekDate = '2025-08-09';
    SMGameList.push(new Game(
           'SM'
        ,  weekDate
        , 'Norwich'
        , 'Millwall'
        , 'A'
        , 'A'
        , 1
        , 2
        , '5/2'
    ));

    RCGameList.push(new Game(
          'RC'
        ,  weekDate
        , 'Exeter'
        , 'Blackpool'
        , 'A'
        , 'H'
        , 4
        , 1
        , '11/10'
    ));

    TCGameList.push(new Game(
          'TC'
        ,  weekDate
        , 'Sheffield Utd'
        , 'Bristol City'
        , 'H'
        , 'A'
        , 1
        , 4
        , '4/6'
    ));

    TSGameList.push(new Game(
           'TS'
        ,  weekDate
        , 'QPR'
        , 'Preston'
        , 'H'
        , 'D'
        , 1
        , 1
        , '7/5'
    ));


    // Week 3 picks
    var weekDate = '2025-08-16';
    SMGameList.push(new Game(
           'SM'
        ,  weekDate
        , 'Swansea'
        , 'Sheffield Utd'
        , 'A'
        , 'H'
        , 1
        , 0
        , '17/10'
    ));

    RCGameList.push(new Game(
          'RC'
        ,  weekDate
        , 'Crewe'
        , 'Crawley'
        , 'H'
        , 'H'
        , 1
        , 0
        , '4/5'
    ));

    TCGameList.push(new Game(
          'TC'
        ,  weekDate
        , 'Bristol City'
        , 'CHarlton'
        , 'H'
        , 'D'
        , 0
        , 0
        , '9/10'
    ));

    TSGameList.push(new Game(
           'TS'
        ,  weekDate
        , 'Doncaster'
        , 'Wycombe'
        , 'H'
        , 'D'
        , 1
        , 1
        , '6/5'
    ));


     // Week 4 picks
    var weekDate = '2025-08-23';
    SMGameList.push(new Game(
           'SM'
        ,  weekDate
        , 'Birmingham'
        , 'Oxford Utd'
        , 'H'
        , 'H'
        , 1
        , 0
        , '1/2'
    ));

    RCGameList.push(new Game(
          'RC'
        ,  weekDate
        , 'Bolton'
        , 'Lincoln'
        , 'A'
        , 'D'
        , 1
        , 1
        , '15/4'
    ));

    TCGameList.push(new Game(
          'TC'
        ,  weekDate
        , 'Bournmouth'
        , 'Wolves'
        , 'H'
        , 'H'
        , 1
        , 0
        , '5/6'
    ));

    TSGameList.push(new Game(
           'TS'
        ,  weekDate
        , 'Brentford'
        , 'Aston Villa'
        , 'A'
        , 'H'
        , 1
        , 0
        , '6/5'
    ));

  // Week 5 picks
    var weekDate = '2025-08-30';
    SMGameList.push(new Game(
           'SM'
        ,  weekDate
        , 'Oxford Utd'
        , 'Coventry'
        , 'A'
        , 'D'
        , 2
        , 2
        , '7/10'
    ));

    RCGameList.push(new Game(
          'RC'
        ,  weekDate
        , 'Millwall'
        , 'Wrexham'
        , 'H'
        , 'A'
        , 0
        , 2
        , '11/10'
    ));

    TCGameList.push(new Game(
          'TC'
        ,  weekDate
        , 'Stevenage'
        , 'Wycombe'
        , 'H'
        , 'H'
        , 1
        , 0
        , '7/5'
    ));

    TSGameList.push(new Game(
           'TS'
        ,  weekDate
        , 'Chesterfield'
        , 'Crawley'
        , 'H'
        , 'D'
        , 2
        , 2
        , '8/15'
    ));


  // Week 6 picks
    var weekDate = '2025-09-06';
    SMGameList.push(new Game(
           'SM'
        ,  weekDate
        , 'Plymouth'
        , 'Stockport'
        , 'A'
        , 'H'
        , 4
        , 2
        , '21/20'
    ));

    RCGameList.push(new Game(
          'RC'
        ,  weekDate
        , 'Colchester'
        , 'Crewe'
        , 'A'
        , 'D'
        , 1
        , 1
        , '13/8'
    ));

    TCGameList.push(new Game(
          'TC'
        ,  weekDate
        , 'Cambridge Utd'
        , 'Oldham'
        , 'H'
        , 'A'
        , 0
        , 1
        , '19/20'
    ));

    TSGameList.push(new Game(
           'TS'
        ,  weekDate
        , 'Barnet'
        , 'Shrewsbury'
        , 'H'
        , 'A'
        , 1
        , 3
        , '3/4'
    ));


  // Week 7 picks
    var weekDate = '2025-09-13';
    SMGameList.push(new Game(
           'SM'
        ,  weekDate
        , 'Gillingham'
        , 'Notts Co'
        , 'H'
        , 'H'
        , 1
        , 0
        , '27/20'
    ));

    RCGameList.push(new Game(
          'RC'
        ,  weekDate
        , 'West Brom'
        , 'Derby'
        , 'H'
        , 'A'
        , 0
        , 1
        , '3/4'
    ));

    TCGameList.push(new Game(
          'TC'
        ,  weekDate
        , 'Stockport'
        , 'Cardiff'
        , 'A'
        , 'D'
        , 1
        , 1
        , '8/5'
    ));

    TSGameList.push(new Game(
           'TS'
        ,  weekDate
        , 'Barnsley'
        , 'Reading'
        , 'H'
        , 'H'
        , 3
        , 2
        , '5/6'
    ));


    // Week 8 picks
    var weekDate = '2025-09-20';
    SMGameList.push(new Game(
           'SM'
        ,  weekDate
        , 'Colchester'
        , 'Bristol Rovers'
        , 'A'
        , 'D'
        , 1
        , 1
        , '8/5'
    ));

    RCGameList.push(new Game(
          'RC'
        ,  weekDate
        , 'Huddersfield'
        , 'Burton'
        , 'H'
        , 'D'
        , 0
        , 0
        , '11/20'
    ));

    TCGameList.push(new Game(
          'TC'
        ,  weekDate
        , 'MK Dons'
        , 'Accrington'
        , 'H'
        , 'A'
        , 1
        , 2
        , '11/20'
    ));

    TSGameList.push(new Game(
           'TS'
        ,  weekDate
        , 'Plymouth'
        , 'Peterborough'
        , 'H'
        , 'A'
        , 0
        , 1
        , '17/20'
    ));

    // Week 9 picks
    var weekDate = '2025-09-27';
    SMGameList.push(new Game(
           'SM'
        ,  weekDate
        , 'Southampton'
        , 'Middlesbrough'
        , 'A'
        , 'D'
        , 1
        , 1
        , '12/5'
    ));

    RCGameList.push(new Game(
          'RC'
        ,  weekDate
        , 'Chesterfield'
        , 'Newport'
        , 'H'
        , 'H'
        , 4
        , 1
        , '21/50'
    ));

    TCGameList.push(new Game(
          'TC'
        ,  weekDate
        , 'Bradford City'
        , 'Blackpool'
        , 'H'
        , 'H'
        , 1
        , 0
        , '21/20'
    ));

    TSGameList.push(new Game(
           'TS'
        ,  weekDate
        , 'Gillingham'
        , 'Harrogate'
        , 'H'
        , 'A'
        , 0
        , 1
        , '7/10'
    ));

     // Week 10 picks
    var weekDate = '2025-10-04';
    SMGameList.push(new Game(
           'SM'
        ,  weekDate
        , 'Cheltenham'
        , 'Fleetwood'
        , 'A'
        , ''
        , 0
        , 0
        , '11/10'
    ));

    RCGameList.push(new Game(
          'RC'
        ,  weekDate
        , 'Lincoln'
        , 'Exeter'
        , 'H'
        , ''
        , 0
        , 0
        , '3/5'
    ));

    TCGameList.push(new Game(
          'TC'
        ,  weekDate
        , 'Watford'
        , 'Oxford Utd'
        , 'H'
        , ''
        , 0
        , 0
        , '10/11'
    ));

    TSGameList.push(new Game(
           'TS'
        ,  weekDate
        , 'Cardiff'
        , 'Leyton Orient'
        , 'H'
        , ''
        , 0
        , 0
        , '13/20'
    ));

}


function BuildLeague() {
    var leagueRowTemplate = $('#LeagueRow_Template').html();
    var html = '';


    var gamesArray = new Array();
    gamesArray.push(SMGameList);
    gamesArray.push(RCGameList);
    gamesArray.push(TCGameList);
    gamesArray.push(TSGameList);

    // build the base empty leagueList
    for (g = 0; g < gamesArray.length; g++){
        var l = new League();
        l.Name = gamesArray[g][0].Name;
        leagueList.push(l);
    }
    
    
    // can we do each week at a time, to calculate change each week?
    for (g = 0; g < gamesArray[0].length; g++){
        var weeksGamesList = new Array();

        for (i = 0; i < gamesArray.length; i++) {
            weeksGamesList.push(gamesArray[i][g]);

        }

        // now add this week to the league
        CalculateLeagueRow(weeksGamesList);


        // sort the leagues by pts, then GD
        // https://typeofnan.dev/sort-array-objects-multiple-properties-javascript/
        
        leagueList.sort((a, b) => {
            // Only sort on Points if not identical
            if (a.Points < b.Points) return -1;
            if (a.Points > b.Points) return 1;
            // Sort on GD
            if (a.GoalsDiff < b.GoalsDiff) return -1;
            if (a.GoalsDiff > b.GoalsDiff) return 1;
            // Both idential, return 0
            return 0;
        });

        // go through and mark up the changes
        for (x = 0; x < leagueList.length; x++) {
            var change = 0;
            if (leagueList[x].Change < (x+1)) {
                change = leagueList[x].PreviousPosition - (x-1);
            } else {
                change = (x-1) - leagueList[x].PreviousPosition;
            }

            leagueList[x].Change = change;

        }
    }


    // need to figure this bit out here some how

    // and just go backwards for 5 to get the last 5?
    // need to do ALL of them at once

    for (g = 0; g < gamesArray.length; g++){
        var Last5 = '';
        
        // but what if there aren't 5 yet?
        var last5From = 6;
        if (gamesArray[g].length < last5From) {
            last5From = gamesArray[g].length+1;
        }


        for (i = gamesArray[g].length-1; i > gamesArray[g].length-last5From; i--) {
            
            if (i < 0) {
                break;
            }
            // taking this out to get it working when we have less tahn 5 games
            // will prob break it when there's more...
            // will i remember....
            //if (i < gamesArray[g].length) {
                 //break;
            //}


            if (gamesArray[g][i].Result == "") {
                continue;
            }

            if (gamesArray[g][i].ToWin == gamesArray[g][i].Result) {
                Last5 = 'W-' + Last5;
            } else {
                Last5 = 'L-' + Last5;
            }
        }

        // then find this user in the league list and assign the last5
        for (ll = 0; ll < leagueList.length; ll++) {
            if (leagueList[ll].Name == gamesArray[g][0].Name) {
                leagueList[ll].Last5 = Last5.substring(0, Last5.length-1);
                break;
            }
        }
    }

    // also do the streak...
    for (g = 0; g < gamesArray.length; g++){
        var Streak = 'L0';

        for (i = 0; i < gamesArray[g].length; i++) {

            if (gamesArray[g][i].Result == '') {
                continue;
            }

            var streakSplit = Streak.split('');
            var nextStreakNo = 0;

            if (gamesArray[g][i].ToWin == gamesArray[g][i].Result) {
                // W++;
                // PTS++;

                if (streakSplit[0] == 'W') {
                    nextStreakNo = parseInt(streakSplit[1]) + 1;
                    Streak = 'W' + nextStreakNo;
                } else {
                    Streak = 'W1';
                }
            } else {
                // L++;

                if (streakSplit[0] == 'L') {
                    nextStreakNo = parseInt(streakSplit[1]) + 1;
                    Streak = 'L' + nextStreakNo;
                } else {
                    Streak = 'L1';
                }
            }
        }

        // then find this user in the league list and assign the streak
        for (ll = 0; ll < leagueList.length; ll++) {
            if (leagueList[ll].Name == gamesArray[g][0].Name) {
                leagueList[ll].Streak = Streak;
                break;
            }
        }

    }


    // and avg odds?
    // https://blog.betway.com/betting-terms/how-do-betting-odds-work-and-how-to-read-them-betting-odds-explained/
    for (g = 0; g < gamesArray.length; g++){

        var totalOdds = 0.00;
        var name = ''
        for (i = 0; i < gamesArray[g].length; i++) {
            name = gamesArray[g][i].Name;

            if (gamesArray[g][i].Result == '') {
                continue;
            }

            // take the odds from each week, 
            // convert to decimal
            // add to running total
            // then avg the dec
            // then simplyfy back to fractions
            var oddsArray = gamesArray[g][i].Odds.split('/');
            var oddsDec = (oddsArray[0] / oddsArray[1]) + 1;
            totalOdds+= oddsDec;
        }

        var avgOddsDec = totalOdds / gamesArray[g].length;
        // then simplyfy/...
        avgOddsDec = (avgOddsDec -1) * 100.00;
        var avgOdds = reduce(Math.round(avgOddsDec), 100);

        // find this user in the league, and set avgodds
        for (l = leagueList.length-1; l > -1; l--) {
            if (leagueList[l].Name == name) {
                leagueList[l].AvgOdds = avgOdds[0] + '/' + avgOdds[1];
                break;
            }
        }
    }
    
    
    // and build the HTML... league backwards
    html += leagueRowTemplate.replace('$ID$', '&nbsp;')
                            .replace('$HEADER$', 'header')
                            .replace(/\$NAME\$/g, 'Name')
                            .replace('$WL$', 'W-L')
                            .replace('$PRC$', 'PRC')
                            .replace('$GF$', 'GF')
                            .replace('$GA$', 'GA')
                            .replace('$GD$', 'GD')
                            .replace('$STREAK$', 'Streak')
                            .replace('$LAST5$', 'Form')
                            .replace('$CHANGE$', '&nbsp;')
                            .replace("$AVGODDS$", 'Avg Odds')
                            
                        ;

    // now added graphics for last5... so instead of letters, replace with div...
    var last5WinDiv = '<div class="last5outer win">' +
                            '<span>&check;</span>' +
                        '</div>';

    var last5LoseDiv = '<div class="last5outer lose">' +
                            '<span>&cross;</span>' +
                        '</div>';

    var leaguePos = 0;
    for (l = leagueList.length-1; l > -1; l--) {
        leaguePos++;
        var leader = '';
        if (leaguePos == 1) {
            leader = 'leader';
        }

        var last5Html = leagueList[l].Last5.replace(/-/g, "")
                                            .replace(/W/g, last5WinDiv)
                                            .replace(/L/g, last5LoseDiv)
                                        ;

        html += leagueRowTemplate.replace('$ID$', leaguePos)
                                .replace('$HEADER$', leader)
                                .replace(/\$NAME\$/g, leagueList[l].Name)
                                .replace('$WL$', leagueList[l].Win + '-' + leagueList[l].Lose)
                                .replace('$PRC$', leagueList[l].Percent.toString().substring(0,5))
                                .replace('$GF$', leagueList[l].GoalsFor)
                                .replace('$GA$', leagueList[l].GoalsAgainst)
                                .replace('$GD$', leagueList[l].GoalsDiff)
                                .replace('$STREAK$', leagueList[l].Streak)
                                .replace('$LAST5$', last5Html)
                                // .replace('$CHANGE$', leagueList[l].Change)
                                .replace('$CHANGE$', "&nbsp;")
                                .replace('$AVGODDS$', leagueList[l].AvgOdds)
                            ;
    }

    $('#LeagueOuter').html(html);


}

function CalculateLeagueRow(gamesArray) {
    // gamesArray is a list of one weeks games, one for easy user
    // so we need to find this users record in the league list by name
    // update it, and re-order




    
    for (gg = 0; gg < gamesArray.length; gg++) {
        // skip if the game hasn't happened yet
        if (gamesArray[gg].Result == '') {
            continue;
        }

        // find this users league record
        var leagueIndex = 0;

        for (l = 0; l < leagueList.length; l++) {
            if (leagueList[l].Name == gamesArray[gg].Name) {
                leagueIndex = l;
                break;
            }
        }
        
        
        var W = leagueList[leagueIndex].Win;
        var L = leagueList[leagueIndex].Lose;
        var PTS = leagueList[leagueIndex].Points;
        var GF = leagueList[leagueIndex].GoalsFor;
        var GA = leagueList[leagueIndex].GoalsAgainst;
        var Streak = leagueList[leagueIndex].Streak;
        var Last5 = new Array();


        if (gamesArray[gg].Result != "") {
            // var streakSplit = Streak.split('');
            // var nextStreakNo = 0;

            if (gamesArray[gg].ToWin == gamesArray[gg].Result) {
                W++;
                PTS++;

                // if (streakSplit[0] == 'W') {
                //     nextStreakNo = parseInt(streakSplit[1]) + 1;
                //     Streak = 'W' + nextStreakNo;
                // } else {
                //     Streak = 'W1';
                // }
            } else {
                L++;

                // if (streakSplit[0] == 'L') {
                //     nextStreakNo = parseInt(streakSplit[1]) + 1;
                //     smStreak = 'L' + nextStreakNo;
                // } else {
                //     Streak = 'L1';
                // }
            }
        }


        if (gamesArray[gg].ToWin == 'H') {
            GF += gamesArray[gg].HomeScore;
            GA += gamesArray[gg].AwayScore;
        } else {
            GA += gamesArray[gg].HomeScore;
            GF += gamesArray[gg].AwayScore;
        }

        // and undate back to gthe league list
        leagueList[leagueIndex].Win = W;
        leagueList[leagueIndex].Lose = L;
        leagueList[leagueIndex].Points = PTS;
        leagueList[leagueIndex].Percent =  W / (W + L);
        leagueList[leagueIndex].GoalsFor = GF;
        leagueList[leagueIndex].GoalsAgainst = GA;
        leagueList[leagueIndex].GoalsDiff = GF - GA;
        leagueList[leagueIndex].Streak = Streak;
        leagueList[leagueIndex].PreviousPosition = leagueIndex + 1;

    }
    
}


function LeagueRow_CLick(name) {
    var gameList = new Array();

    // remove all selected
    $(".leaguerow.selected").removeClass('selected');
    $("#LeagueRow_" + name).addClass('selected');


    if (name == "SM") {
        gameList = SMGameList;
    } else if (name == "RC") {
        gameList = RCGameList;
    } else if (name == "TC") {
        gameList = TCGameList;
    } else if (name == "TS") {
        gameList = TSGameList;
    }

    BuildGames(gameList);

}

function BuildLastScores() {
    // show all picks, or latest scores 
    var gameList = new Array();

/*
    if (SMGameList.length-2 > -1) {

        gameList.push(SMGameList[SMGameList.length-2]);
        gameList.push(RCGameList[RCGameList.length-2]);
        gameList.push(TCGameList[TCGameList.length-2]);
        gameList.push(TSGameList[TSGameList.length-2]);
        

        BuildGames(gameList);
    }
    */
   
    // and now do the last two weeks...
    gameList = new Array();

    if (SMGameList.length-1 > -1) {
        gameList.push(SMGameList[SMGameList.length-1]);
        gameList.push(RCGameList[RCGameList.length-1]);
        gameList.push(TCGameList[TCGameList.length-1]);
        gameList.push(TSGameList[TSGameList.length-1]);


        BuildGames(gameList);

    }
}

function BuildGames(gameList) {
    var template = $("#ScoresRow_Template").html();
    var html = "";

    // header
    html = template.replace(/\$HEADER\$/g, "header")
                    .replace(/\$NAME\$/g, "Name")
                    .replace(/\$DATE\$/g, "Date")
                    .replace(/\$HOMETEAM\$/g, "Home")
                    .replace(/\$HOMESCORE\$/g, "")
                    .replace(/\$AWAYTEAM\$/g, "Away")
                    .replace(/\$AWAYSCORE\$/g, "")
                    .replace(/\$ODDS\$/g, "Odds")
                    .replace(/\$NOTES\$/g, "&nbsp;")

                ;

    for (i = 0; i < gameList.length; i++) {
        var homeWin = "";
        var awayWin = "";
        var homeLose = "";
        var awayLose = "";
        var win = false;
        var notes = "";
        var homeRecordWrong = 0;
        var homeRecordCorrect = 0;
        var awayRecordWrong = 0;
        var awayRecordCorrect = 0;

        if (gameList[i].Result != "") {
            if (gameList[i].ToWin == gameList[i].Result) {
                win = true;
                // notes = "Correct ";
                notes = "&#129321;";

            } else {
                // notes = "Bad ";
                var randomNumber = Math.floor(Math.random() * sadFaceList.length);
                notes = sadFaceList[randomNumber];

            }

            if (gameList[i].ToWin == 'H' && win) {
                homeWin = "win";
                // notes += " home pick";
            } else if (gameList[i].ToWin == 'A' && win) {
                awayWin = "win";
                // notes += " away pick";
            }  else if (gameList[i].ToWin == 'H' && !win) {
                homeLose = "lose";
                // notes += " home pick";
            }  else if (gameList[i].ToWin == 'A' && !win) {
                awayLose = "lose";
                // notes += " away pick";
            }

        } else {
            // game result not in yet
            if (gameList[i].ToWin == "H") {
                homeWin = "pick";
                // notes = "Hoping for a home win";
            } else {
                awayWin = "pick";
                // notes = "Hoping for an away win";
            }

            notes = "&#129310;";
        }

        var homeRecord = GetRecord(gameList[i].Home);
        var awayRecord = GetRecord(gameList[i].Away);

        var thisDate = new Date(gameList[i].Date);
        var dateArray = thisDate.toDateString().split(' ');     // Sat Sept 20 2025
        var dateDisplay = dateArray[1] + ' ' + dateArray[2];


        html += template.replace(/\$HEADER\$/g, "")
                        .replace(/\$NAME\$/g, gameList[i].Name)
                        .replace(/\$DATE\$/g, dateDisplay)

                        .replace(/\$HOMETEAM\$/g, gameList[i].Home)
                        .replace(/\$HOMEWIN\$/g, homeWin)
                        .replace(/\$HOMELOSE\$/g, homeLose)
                        .replace(/\$HOMESCORE\$/g, gameList[i].HomeScore)

                        .replace(/\$AWAYTEAM\$/g, gameList[i].Away)
                        .replace(/\$AWAYWIN\$/g, awayWin)
                        .replace(/\$AWAYLOSE\$/g, awayLose)
                        .replace(/\$AWAYSCORE\$/g, gameList[i].AwayScore)
                        
                        .replace(/\$HOMERECORDWRONG\$/g, homeRecord.Wrong)
                        .replace(/\$HOMERECORDCORRECT\$/g, homeRecord.Correct)
                        .replace(/\$AWAYRECORDWRONG\$/g, awayRecord.Wrong)
                        .replace(/\$AWAYRECORDCORRECT\$/g, awayRecord.Correct)

                        .replace(/\$ODDS\$/g, gameList[i].Odds)

                        .replace(/\$NOTES\$/g, notes)
                    ;

    }

    $("#GamesOuter").append(html);

}

function GetRecord(teamName) {

    var record = new Record(0, 0);

    // go through all games, and find how many times they've won or lost
    var gameList = new Array();

    // they should all be the same length, but we'll do them seperately
    for (ii = 0; ii < SMGameList.length; ii++) {
        gameList.push(SMGameList[ii]);
    }
    for (ii = 0; ii < RCGameList.length; ii++) {
        gameList.push(RCGameList[ii]);
    }
    for (ii = 0; ii < TCGameList.length; ii++) {
        gameList.push(TCGameList[ii]);
    }
    for (ii = 0; ii < TSGameList.length; ii++) {
        gameList.push(TSGameList[ii]);
    }

    for (iii = 0; iii < gameList.length; iii++) {
        // go throgh and find
        // has this team been chosen?
        // if it has, 
        // was it correct or wrong?

        if (gameList[iii].Result == ""){
            continue;
        }

        if (gameList[iii].Home == teamName && gameList[iii].ToWin == "H") {
            if (gameList[iii].ToWin == gameList[iii].Result) {
                record.Correct++;

            } else if (gameList[iii].ToWin != gameList[iii].Result) {
                record.Wrong++;

            }
        } else if (gameList[iii].Away == teamName && gameList[iii].ToWin == "A") {
            if (gameList[iii].ToWin == gameList[iii].Result) {
                record.Correct++;

            } else if (gameList[iii].ToWin != gameList[iii].Result) {
                record.Wrong++;
            }
        }
    }
    


    return record;
}



// https://stackoverflow.com/questions/4652468/is-there-a-javascript-function-that-reduces-a-fraction
function reduce(numerator,denominator){
  var gcd = function gcd(a,b){
    return b ? gcd(b, a%b) : a;
  };
  gcd = gcd(numerator,denominator);
  return [numerator/gcd, denominator/gcd];
}





// Objects
function Game(name, date, home, away, toWin, result, homeScore, awayScore, odds) {
    this.Name = name;
    this.Date = date;
    this.Home = home;
    this.Away = away;
    this.ToWin = toWin;
    this.Result = result;
    this.HomeScore = homeScore;
    this.AwayScore = awayScore;

    if (odds == undefined) {
        odds = "&nbsp;";
    }
    this.Odds = odds;
}

function League(name, win, lose, points, percent, goalsFor, goalsAgainst, goalsDiff, streak, last5, previousPosition, change, avgOdds) {
    this.Name = (name == undefined ? '' : name);
    this.Win = (win == undefined ? 0 : win);
    this.Lose = (lose == undefined ? 0 : lose);
    this.Points = (points == undefined ? 0 : points);
    this.Percent = (percent == undefined ? 0 : percent);
    this.GoalsFor = (goalsFor == undefined ? 0 : goalsFor);
    this.GoalsAgainst = (goalsAgainst == undefined ? 0 : goalsAgainst);
    this.GoalsDiff = (goalsDiff == undefined ? 0 : goalsDiff);
    this.Streak = (streak == undefined ? 'W0' : streak);
    this.Last5 = (last5 == undefined ? '' : last5);
    this.PreviousPosition = (previousPosition == undefined ? 0 : previousPosition);
    this.Change = (change == undefined ? 0 : change);
    this.AvgOdds = (avgOdds == undefined ? "" : avgOdds);


}

function Record(correct, wrong) {
    this.Correct = correct;
    this.Wrong = wrong;
}







// function BuildLeague() {
//     var leagueRowTemplate = $('#LeagueRow_Template').html();
//     var html = '';

//     var gamesArray = new Array();
//     gamesArray.push(SMGameList);
//     gamesArray.push(RCGameList);
//     gamesArray.push(TCGameList);
//     gamesArray.push(TSGameList);

//     var leagueList = new Array();

//     for (g = 0; g < gamesArray.length; g++){
//         var SMLeague = new League();
//         SMLeague.Name = gamesArray[g][0].Name;
        
//         var smW = 0;
//         var smL = 0;
//         var smPTS = 0;
//         var smGF = 0;
//         var smGA = 0;
//         var smStreak = 'W0';
//         var smLast5 = new Array();

//         for (i = 0; i < gamesArray[g].length; i++) {
            
//             if (gamesArray[g][i].Result != "") {
//                 var streakSplit = smStreak.split('');
//                 var nextStreakNo = 0;

//                 if (gamesArray[g][i].ToWin == gamesArray[g][i].Result) {
//                     smW++;
//                     smPTS++;

//                     if (streakSplit[0] == 'W') {
//                         nextStreakNo = parseInt(streakSplit[1]) + 1;
//                         smStreak = 'W' + nextStreakNo;
//                     } else {
//                         smStreak = 'W1';
//                     }
//                 } else {
//                     smL++;

//                     if (streakSplit[0] == 'L') {
//                         nextStreakNo = parseInt(streakSplit[1]) + 1;
//                         smStreak = 'L' + nextStreakNo;
//                     } else {
//                         smStreak = 'L1';
//                     }
//                 }
//             }


//             if (gamesArray[g][i].ToWin == 'H') {
//                 smGF += gamesArray[g][i].HomeScore;
//                 smGA += gamesArray[g][i].AwayScore;
//             } else {
//                 smGA += gamesArray[g][i].HomeScore;
//                 smGF += gamesArray[g][i].AwayScore;
//             }
//         }

//         SMLeague.Win = smW;
//         SMLeague.Lose = smL;
//         SMLeague.Points = smPTS;
//         SMLeague.Percent =  smW / (smW + smL);
//         SMLeague.GoalsFor = smGF;
//         SMLeague.GoalsAgainst = smGA;
//         SMLeague.GoalsDiff = smGF - smGA;
//         SMLeague.Streak = smStreak;

//         // and just go backwards for 5 to get the last 5 ?
//         for (i = gamesArray[g].length-1; i > gamesArray[g].length-6; i--) {
         
//             if (gamesArray[g][i].ToWin == gamesArray[g][i].Result) {
//                 smLast5 = 'W-' + smLast5;
//             } else {
//                 smLast5 = 'L-' + smLast5;
//             }
//         }

//         SMLeague.Last5 = smLast5.substring(0, smLast5.length-1);

//         leagueList.push(SMLeague);
//     }

//     // sort the leagues by pts, then GD
//     // https://typeofnan.dev/sort-array-objects-multiple-properties-javascript/
    
//     leagueList.sort((a, b) => {
//         // Only sort on Points if not identical
//         if (a.Points < b.Points) return -1;
//         if (a.Points > b.Points) return 1;
//         // Sort on GD
//         if (a.GoalsDiff < b.GoalsDiff) return -1;
//         if (a.GoalsDiff > b.GoalsDiff) return 1;
//         // Both idential, return 0
//         return 0;
//     });
    

    
//     // and build the HTML... league backwards
//     html += leagueRowTemplate.replace('$ID$', '&nbsp;')
//                             .replace('$HEADER$', 'header')
//                             .replace(/\$NAME\$/g, 'Name')
//                             .replace('$WL$', 'W-L')
//                             .replace('$PRC$', 'PRC')
//                             .replace('$GF$', 'GF')
//                             .replace('$GA$', 'GA')
//                             .replace('$GD$', 'GD')
//                             .replace('$STREAK$', 'Streak')
//                             .replace('$LAST5$', 'Form')
                            
//                         ;


//     var leaguePos = 0;
//     for (l = leagueList.length-1; l > -1; l--) {
//         leaguePos++;
//         var leader = '';
//         if (leaguePos == 1) {
//             leader = 'leader';
//         }

//         html += leagueRowTemplate.replace('$ID$', leaguePos)
//                                 .replace('$HEADER$', leader)
//                                 .replace(/\$NAME\$/g, leagueList[l].Name)
//                                 .replace('$WL$', leagueList[l].Win + '-' + SMLeague.Lose)
//                                 .replace('$PRC$', leagueList[l].Percent.toString().substring(0,5))
//                                 .replace('$GF$', leagueList[l].GoalsFor)
//                                 .replace('$GA$', leagueList[l].GoalsAgainst)
//                                 .replace('$GD$', leagueList[l].GoalsDiff)
//                                 .replace('$STREAK$', leagueList[l].Streak)
//                                 .replace('$LAST5$', leagueList[l].Last5)
//                             ;
//     }

//     $('#LeagueOuter').html(html);


// }

