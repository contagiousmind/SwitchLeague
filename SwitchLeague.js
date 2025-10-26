// JavaScript source code
$(function () {

    // SetupGames_Year1();

    GetData('Season2', SetupGames);
    
});

// user game lists
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


function SetupGames(data) {

    // get the number of users...
    var userList = new Array();
    for (i=1; i < data.values.length; i++) {
        var userName = data.values[i][0];

        if (!userList.includes(userName))
        {
            userList.push(userName);
        }

        var thisUSerList = new Array();
        if (userName == 'Seb') {
            thisUSerList = SMGameList;
        } else if (userName == 'Russ') {
            thisUSerList = RCGameList;
        } else if (userName == 'Tom') {
            thisUSerList = TCGameList;
        } else if (userName == 'Smith') {
            thisUSerList = TSGameList;
        }

        thisUSerList.push(new Game(
                  data.values[i][0]                         //     'SM'
                , data.values[i][1]                         // ,  weekDate
                , data.values[i][2]                         // , 'Lincoln'
                , data.values[i][3]                         // , 'Reading'
                , data.values[i][4]                         // , 'A'
                , data.values[i][5]                         // , 'H'
                , parseInt(data.values[i][6])                // , 2
                , parseInt(data.values[i][7])                // , 0
                , data.values[i][8]                         // , '31/10'
            ));
    }


    BuildLeague();

    BuildLastScores();

    // set week in title
    $(".titlebottomright").html("Week " + SMGameList.length);


    // now we can create our list of game arrays
    // but that's a todo, let's 'simply' make it work for now...




    // can we build some totals too?
    BuildTotals();

} 

function GetData(sheetName, completeEvent) {

        // photo's key - AIzaSyBnvRLQ5Wfv5MNb5q0APNsijA9xXpOYnaA
    var aaa = 'AIzaSyBnvRLQ5Wfv5MNb5q0APNsijA9xXpOYnaA'; 
    var spreadsheetId = '1vQ3s9xdLVtMLuY_gc8psrxSkLvdsG4_XuTEYJmuxJ4Y'; // Replace with your spreadsheet ID
    // var sheetName = 'Sheet1'; // Replace with your sheet name
    var url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${sheetName}?key=${aaa}`;


    Ajax(url, function(data) {
        completeEvent.call('', data);
        
    }, '');
}

// https://docs.google.com/spreadsheets/d/e/2PACX-1vRB4E_6RnpLP1wWMjqcwsUvotNATB8Np3OntlXb7066ULcAHI9oqqRhucltFifPTYNd7DRNRE56oTdt/pub?output=csv


//https://github.com/orgs/community/discussions/108921
function Ajax(url, completeEvent, args) {
    $.ajax({
        url: url,
        type: 'GET',
        success: function(data) {
            completeEvent.call(this, data);
        }
    });
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


    if (name == "Seb") {
        gameList = SMGameList;
    } else if (name == "Russ") {
        gameList = RCGameList;
    } else if (name == "Tom") {
        gameList = TCGameList;
    } else if (name == "Smith") {
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



function BuildTotals() {
    var allGames = new Array();

    for (i=0; i< SMGameList.length;i++) {
        allGames.push(SMGameList[i]);
    }
    for (i=0; i< RCGameList.length;i++) {
        allGames.push(RCGameList[i]);
    }
    for (i=0; i< TCGameList.length;i++) {
        allGames.push(TCGameList[i]);
    }
    for (i=0; i< TSGameList.length;i++) {
        allGames.push(TSGameList[i]);
    }


    var template = $("#TotalItem_Template").html();

    // let's do... 
    // total games
    // total wins
    // win ratio
    // weekly wins
    // weekly win avg?

    var total = allGames.length;

    // how many winner do we have...
    var winners = 0;
    for (i=0; i< allGames.length; i++) {
        if (allGames[i].ToWin == allGames[i].Result) {
            winners++;
        }
    }

    var winnerRatio = (winners / total) * 100;

    // how do we do weekly wins...
    var weeklyWins = 0;
    for(i=0; i< SMGameList.length; i++) {
        if (
                   SMGameList[i].ToWin == SMGameList[i].Result
                && RCGameList[i].ToWin == RCGameList[i].Result
                && TCGameList[i].ToWin == TCGameList[i].Result
                && TSGameList[i].ToWin == TSGameList[i].Result
            )
            {
                // we won this week!
                weeklyWins++;
            }
    }

    // and similar to weekly avg wins...
    var weeklyWinningGames = new Array();
    for(i=0; i< SMGameList.length; i++) {
        var thisWeeklyWins = 0;
        if (SMGameList[i].ToWin == SMGameList[i].Result) {
            thisWeeklyWins++;
        }
        if (RCGameList[i].ToWin == RCGameList[i].Result) {
            thisWeeklyWins++;
        }
        if (TCGameList[i].ToWin == TCGameList[i].Result) {
            thisWeeklyWins++;
        }
        if (TSGameList[i].ToWin == TSGameList[i].Result) {
            thisWeeklyWins++;
        }

        weeklyWinningGames.push(thisWeeklyWins);
    }

    var weeklyAvgWins = 0;
    var weeklyTotalWins = 0;
    for(i=0; i < weeklyWinningGames.length; i++) {
        weeklyTotalWins = weeklyTotalWins + weeklyWinningGames[i];
    }
    weeklyAvgWins = weeklyTotalWins / weeklyWinningGames.length;


    // and build the html
    var html = "";
    html+= template.replace(/\$TITLE\$/g, 'Total Picks')
                    .replace(/\$VALUE\$/g, total)
                ;
    html+= template.replace(/\$TITLE\$/g, 'Winning Picks')
                    .replace(/\$VALUE\$/g, winners)
                ;
    html+= template.replace(/\$TITLE\$/g, 'Win Ratio')
                    .replace(/\$VALUE\$/g, winnerRatio.toString().substring(0, 5) + '%')
                ;
    html+= template.replace(/\$TITLE\$/g, 'Wins per Week')
                    .replace(/\$VALUE\$/g, weeklyAvgWins.toString().substring(0, 4))
                ;

    html+= template.replace(/\$TITLE\$/g, 'Winning Weeks')
                    .replace(/\$VALUE\$/g, weeklyWins)
                ;



    $("#TotalsOuter").html(html);
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
    this.Home = (home == undefined ? '' : home);
    this.Away = (away == undefined ? '' : away);
    this.ToWin = (toWin == undefined ? '' : toWin);
    this.Result = (result == undefined ? '' : result);
    this.HomeScore = (homeScore == undefined ? 0 : homeScore);
    this.AwayScore = (awayScore == undefined ? 0 : awayScore);

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






