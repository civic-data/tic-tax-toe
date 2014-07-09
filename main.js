//    var gresult=undefined

        //C:\tmp\chromeapps\TicTacToe>curl -L "https://script.google.com/macros/s/AKfycbxjSzVAXC54wCmYZNqstXDFN99lUR_0XRCCsqmkZ_b24L-3q86q/exec?input1=collado&limit=10&output=json&callback=jQuery110207950355389621109_1404229712532"

/*
         jQuery( document ).ready(function() {
         //alert('ready')
        var url = 
           //"https://script.google.com/macros/s/AKfycbxjSzVAXC54wCmYZNqstXDFN99lUR_0XRCCsqmkZ_b24L-3q86q/exec?input1=yozzo&limit=10&output=json&callback=?"
           "https://script.google.com/macros/s/AKfycbxjSzVAXC54wCmYZNqstXDFN99lUR_0XRCCsqmkZ_b24L-3q86q/exec?input1=collado,+jose&limit=10&output=json&callback=?"
      var jsonData = $.ajax({
          url: url,
          dataType:"json",
          //async: false
          })
        .done(function(result) {
            alert( "success: " + JSON.stringify(result) );
            //console.log( "success: " + JSON.stringify(result) );
            //gresult=result
            localStorage.setItem("gresult",JSON.stringify(result));
            })  
            .fail(function(jqXHR, textStatus, errorThrown) {
            alert( "error: " + textStatus + ' errorThrown: ' + errorThrown );
            })
         }) 
        */ 

//         jQuery( document ).ready(function() {
document.addEventListener('DOMContentLoaded', function() {

         jQuery( document ).ready(function() {
         //alert('ready')
        var url = 
           //"https://script.google.com/macros/s/AKfycbxjSzVAXC54wCmYZNqstXDFN99lUR_0XRCCsqmkZ_b24L-3q86q/exec?input1=yozzo&limit=10&output=json&callback=?"
           "https://script.google.com/macros/s/AKfycbxjSzVAXC54wCmYZNqstXDFN99lUR_0XRCCsqmkZ_b24L-3q86q/exec?input1=collado,+jose&limit=10&output=json&callback=?"
      var jsonData = $.ajax({
          url: url,
          dataType:"json",
          //async: false
          timeout: 10000
          })
        .done(function(result) {
            //alert( "success: " + JSON.stringify(result) );
            jQuery(".loading").html('ready press any box to play...')
            setTimeout(function(){
            jQuery(".loading").html('')
            }, 3000);
            //console.log( "success: " + JSON.stringify(result) );
            //gresult=result
            localStorage.setItem("gresult",JSON.stringify(result));
  window.board = new Board();
  window.board.setCallback('onTurnChanged', redrawBoard);
  window.board.setCallback('onFinished', handleFinished);
  window.board.init(result)
            })  
            .fail(function(jqXHR, textStatus, errorThrown) {
            jQuery(".loading").html('')
            //alert( "error: " + textStatus + ' errorThrown: ' + errorThrown );
            alert( "network issue: " + textStatus + " using defaults. continue to play..." )
    var failsafe_result = {"cols":[{"id":"A","label":"Owner","type":"string"},{"id":"B","label":"Street Number","type":"string"},{"id":"C","label":"Address","type":"string"},{"id":"D","label":"Tax Ratio Percent","type":"number"},{"label":"Assessed Value","type":"number"},{"label":"Market Value","type":"number"},{"label":"Tax Class","type":"string"},{"label":"BORO, BLOCK, LOT, AV_EASEMENT","type":"string"},{"label":"Borough","type":"string"},{"label":"Building Frontage in feet","type":"string"},{"label":"Building Depth in feet","type":"string"},{"label":"Lot Frontage in feet","type":"string"},{"label":"Lot Depth in feet","type":"string"},{"label":"The number of stories for the building ( # of Floors)","type":"string"},{"label":"Building Class","type":"string"},{"label":"Zoning codes From NYC Department of City Planning","type":"string"},{"label":"Residential Units","type":"string"},{"label":"Total Units","type":"string"},{"label":"Gross square footage of the building","type":"string"},{"label":"The year the building was built","type":"string"},{"label":"# Exemptions","type":"string"},{"label":"APPORTIONMENT Block","type":"string"},{"label":"APPORTIONMENT Borough","type":"string"},{"label":"APPORTIONMENT Date","type":"string"},{"label":"APPORTIONMENT Easement","type":"string"},{"label":"APPORTIONMENT Lot","type":"string"},{"label":"APPORTIONMENT Time","type":"string"},{"label":"type of applicant applying for a tax commission reduction","type":"string"},{"label":"type of applicant applying for a tax commission reduction","type":"string"},{"label":"Apartment number for condominium properties.","type":"string"},{"label":"Protest Attorney identification number","type":"string"},{"label":"Protest Attorney identification number","type":"string"},{"label":"V If the building is irregular shaped","type":"string"},{"label":"The number of Buildings on the Property","type":"string"},{"label":"Block","type":"string"},{"label":"During the final period, contains the tax class from the CBN period","type":"string"},{"label":"Date of the last money change occurring during the Tentative Period","type":"string"},{"label":"Building percent of common interest in the entire condo.","type":"string"},{"label":"Land percent of common interest in the entire condo.","type":"string"},{"label":"CONDO_A - NOT USED","type":"string"},{"label":"CONDO identification number","type":"string"},{"label":"AV-CONDO-SUFFIX1 - NOT USED","type":"string"},{"label":"AV-CONDO-SUFFIX2 - NOT USED","type":"string"},{"label":"AV-CONDO-SUFFIX3 - NOT USED","type":"string"},{"label":"CO-OP identification number","type":"string"},{"label":"CORCHG - NOT USED","type":"string"},{"label":"The code to indicate a corner lot on two streets","type":"string"},{"label":"Borough code (1-5) for the community planning board","type":"string"},{"label":"Community planning board number","type":"string"},{"label":"If not zero, Current years total market value of the land","type":"string"},{"label":"If not zero, Current years total market value","type":"string"},{"label":"Current Transitional Assessed Land Value","type":"string"},{"label":"Current Actual Assessed Land Value","type":"string"},{"label":"Current Transitional Assessed Total Value","type":"string"},{"label":"Current Actual Assessed Total Value","type":"string"},{"label":"Current Transitional Exempt Land Value","type":"string"},{"label":"Current Actual Exempt Land Value","type":"string"},{"label":"Current Transitional Exempt Total Value","type":"string"},{"label":"Current Actual Exempt Total Value","type":"string"},{"label":"Date of last descriptive change","type":"string"},{"label":"DELCHG - NOT USED","type":"string"},{"label":"Assessor district code","type":"string"},{"label":"1 = Indicates that the lot will be dropped at the end of the fiscal year","type":"string"},{"label":"Easement","type":"string"},{"label":"Exempt property restored date","type":"string"},{"label":"exemption indicator flags for each of the past four years","type":"string"},{"label":"Exempt Class used for fully exempt properties only","type":"string"},{"label":"Extension Code","type":"string"},{"label":"Date of the last money change occurring during the Final","type":"string"},{"label":"Final Transitional Assessed Land Value","type":"string"},{"label":"Final Actual Assessed Land Value","type":"string"},{"label":"Final Transitional Assessed Total Value","type":"string"},{"label":"Final Actual Assessed Total Value","type":"string"},{"label":"Final Transitional Exempt Land Value","type":"string"},{"label":"Final Actual Exempt Land Value","type":"string"},{"label":"Final Transitional Exempt Total Value","type":"string"},{"label":"Final Actual Exempt Total Value","type":"string"},{"label":"Date of the latest on-line change to the Full Value","type":"string"},{"label":"Status of the address data verification from geosupport","type":"string"},{"label":"contains the highest house number of the property","type":"string"},{"label":"I = Irregularly shaped lot","type":"string"},{"label":"A if the lot is an acre in size","type":"string"},{"label":"1 = AV of property is capped due to state legislation","type":"string"},{"label":"If not zero the Total Land Are","type":"string"},{"label":"Lot Number","type":"string"},{"label":"MBLDG - NOT USED","type":"string"},{"label":"If not zero, New market value of the land","type":"string"},{"label":"If not zero, Current years total market value","type":"string"},{"label":"1 = Indicates a New Lot was created during the fiscal year.","type":"string"},{"label":"building in progress","type":"string"},{"label":"NODESC - NOT USED","type":"string"},{"label":"OLD 1-7 indicates the type of applicant applying for a tax commission reduction","type":"string"},{"label":"OLD Protest Attorney identification number","type":"string"},{"label":"OLD Contains the limitation flag from the prior year","type":"string"},{"label":"OLD same codes as the protest indicator","type":"string"},{"label":"OLD tax class","type":"string"},{"label":"Protest code","type":"string"},{"label":"Protest code","type":"string"},{"label":"Contains the ident number (alpha/numeric) for REUC properties| (Real Estate of Utility Corporation Tax Class 3 only)","type":"string"},{"label":"Indicates Railroads.| Indicates Street| Indicates U.S. Government","type":"string"},{"label":"date of the last change to the BBL summary data possibly","type":"string"},{"label":"Indicator for the Change Period of the File.","type":"string"},{"label":"STATUS2 - NOT USED","type":"string"},{"label":"Tentative Transitional Assessed Land Value","type":"string"},{"label":"Tentative Actual Assessed Land Value","type":"string"},{"label":"Tentative Transitional Assessed Total Value","type":"string"},{"label":"Tentative Actual Assessed Total Value","type":"string"},{"label":"Tentative Transitional Exempt Land Value","type":"string"},{"label":"Tentative Actual Exempt Land Value","type":"string"},{"label":"Tentative Transitional Exempt Total Value","type":"string"},{"label":"Tentative Actual Exempt Total Value","type":"string"},{"label":"1 = The parcels values are reflected in another lot.","type":"string"},{"label":"Four digit year of the file.","type":"string"},{"label":"If building was altered, contains year of alteration","type":"string"},{"label":"If alteration took more than 1 year, contains last year of the alteration","type":"string"},{"label":"If building class was altered twice, year of second alteration","type":"string"},{"label":"If 2nd alteration took more than 1 year, contains last year of the alteration","type":"string"},{"label":"E = Year Built is an Estimate","type":"string"},{"label":"If year built over several years, contains the last year of the range.","type":"string"},{"label":"Postal Zip code of the property","type":"string"}],"rows":[{"c":[{"v":"COLLADO, JOSE R"},{"v":"111-22"},{"v":"42 AVENUE"},{"v":6},{"v":"37200.0"},{"v":"620000.0"},{"v":"1"},{"v":"4020150010"},{"v":"4"},{"v":"20.0"},{"v":"54.0"},{"v":"20.0"},{"v":"100.0"},{"v":"3.0"},{"v":"C0"},{"v":"R4"},{"v":"3.0"},{"v":"3.0"},{"v":"2560.0"},{"v":"1965.0"},{"v":"1.0"},{"v":"0.0"},{"v":"0.0000000000000000e+00"},{"v":null},{"v":null},{"v":"0.0"},{"v":null},{"v":null},{"v":"0.0"},{"v":null},{"v":"0.0"},{"v":"0.0"},{"v":"1.0000000000000000e+00"},{"v":null},{"v":"2015"},{"v":"1"},{"v":"1.3682484E9"},{"v":".000000000"},{"v":".000000000"},{"v":null},{"v":"0.0"},{"v":null},{"v":null},{"v":null},{"v":"0.0"},{"v":"0"},{"v":null},{"v":"4.0000000000000000e+00"},{"v":"4.0000000000000000e+00"},{"v":"23820.0"},{"v":"23820.0"},{"v":"36000.0"},{"v":"36000.0"},{"v":"3460.0"},{"v":"3460.0"},{"v":"3460.0"},{"v":"3460.0"},{"v":"397000.0"},{"v":"600000.0"},{"v":"7.237044E8"},{"v":"0"},{"v":"06"},{"v":"0"},{"v":null},{"v":null},{"v":"EEEE"},{"v":null},{"v":"G"},{"v":"1.3699764E9"},{"v":"10500.0"},{"v":"10500.0"},{"v":"37200.0"},{"v":"37200.0"},{"v":"3380.0"},{"v":"3380.0"},{"v":"3380.0"},{"v":"3380.0"},{"v":"1.3682484E9"},{"v":"0"},{"v":"000000111-22"},{"v":null},{"v":null},{"v":null},{"v":"2000.0"},{"v":"10"},{"v":"0"},{"v":"175000.0"},{"v":"620000.0"},{"v":"0"},{"v":"0"},{"v":"0"},{"v":null},{"v":"0.0"},{"v":null},{"v":null},{"v":"1"},{"v":null},{"v":null},{"v":null},{"v":"1104.0"},{"v":"1.3682484E9"},{"v":"1"},{"v":"0"},{"v":"10500.0"},{"v":"10500.0"},{"v":"37200.0"},{"v":"37200.0"},{"v":"3460.0"},{"v":"3460.0"},{"v":"3460.0"},{"v":"3460.0"},{"v":"0"},{"v":"2012.0"},{"v":"0.0"},{"v":"0.0"},{"v":"0.0"},{"v":"0.0"},{"v":"E"},{"v":"0.0"},{"v":"11368.0"}]},{"c":[{"v":"COLLADO, JOSE"},{"v":"432"},{"v":"LEXINGTON AVENUE"},{"v":5.3},{"v":"36252.0"},{"v":"683000.0"},{"v":"1"},{"v":"3018050019"},{"v":"Brooklyn"},{"v":"18.0"},{"v":"60.0"},{"v":"18.0"},{"v":"100.0"},{"v":"2.0"},{"v":"B9"},{"v":"R6"},{"v":"2.0"},{"v":"2.0"},{"v":"3240.0"},{"v":"2005.0"},{"v":"1.0"},{"v":"0.0"},{"v":"0.0000000000000000e+00"},{"v":null},{"v":null},{"v":"0.0"},{"v":null},{"v":null},{"v":"0.0"},{"v":null},{"v":"0.0"},{"v":"0.0"},{"v":"1.0000000000000000e+00"},{"v":null},{"v":"1805"},{"v":"1"},{"v":"1.3682484E9"},{"v":".000000000"},{"v":".000000000"},{"v":null},{"v":"0.0"},{"v":null},{"v":null},{"v":null},{"v":"0.0"},{"v":"0"},{"v":null},{"v":"3.0000000000000000e+00"},{"v":"3.0000000000000000e+00"},{"v":"21420.0"},{"v":"21420.0"},{"v":"34200.0"},{"v":"34200.0"},{"v":"20098.0"},{"v":"20098.0"},{"v":"32878.0"},{"v":"32878.0"},{"v":"357000.0"},{"v":"570000.0"},{"v":"1.1347956E9"},{"v":"0"},{"v":"07"},{"v":"0"},{"v":null},{"v":null},{"v":"   E"},{"v":null},{"v":null},{"v":null},{"v":"12792.0"},{"v":"12792.0"},{"v":"36252.0"},{"v":"36252.0"},{"v":"11470.0"},{"v":"11470.0"},{"v":"34930.0"},{"v":"34930.0"},{"v":"1.3682484E9"},{"v":"0"},{"v":"000000000432"},{"v":null},{"v":null},{"v":"1"},{"v":"1800.0"},{"v":"19"},{"v":"0"},{"v":"241000.0"},{"v":"683000.0"},{"v":"0"},{"v":"0"},{"v":"0"},{"v":null},{"v":"0.0"},{"v":null},{"v":null},{"v":"1"},{"v":null},{"v":null},{"v":null},{"v":"610.0"},{"v":"1.3682484E9"},{"v":"1"},{"v":"0"},{"v":"12792.0"},{"v":"12792.0"},{"v":"36252.0"},{"v":"36252.0"},{"v":"11470.0"},{"v":"11470.0"},{"v":"34930.0"},{"v":"34930.0"},{"v":"0"},{"v":"2012.0"},{"v":"0.0"},{"v":"0.0"},{"v":"0.0"},{"v":"0.0"},{"v":null},{"v":"0.0"},{"v":"11221.0"}]},{"c":[{"v":"COLLADO, JOSE A"},{"v":"1408"},{"v":"HOBART AVENUE"},{"v":5.2},{"v":"20996.0"},{"v":"402000.0"},{"v":"1"},{"v":"2053980045"},{"v":"2"},{"v":"16.0"},{"v":"36.0"},{"v":"37.5"},{"v":"100.0"},{"v":"2.0"},{"v":"A1"},{"v":"R4A"},{"v":"1.0"},{"v":"1.0"},{"v":"1584.0"},{"v":"1935.0"},{"v":"0.0"},{"v":"0.0"},{"v":"0.0000000000000000e+00"},{"v":null},{"v":null},{"v":"0.0"},{"v":null},{"v":null},{"v":"0.0"},{"v":null},{"v":"0.0"},{"v":"0.0"},{"v":"1.0000000000000000e+00"},{"v":null},{"v":"5398"},{"v":"1"},{"v":"1.3558932E9"},{"v":".000000000"},{"v":".000000000"},{"v":null},{"v":"0.0"},{"v":null},{"v":null},{"v":null},{"v":"0.0"},{"v":"0"},{"v":null},{"v":"2.0000000000000000e+00"},{"v":"1.0000000000000000e+01"},{"v":"10817.0"},{"v":"10817.0"},{"v":"19808.0"},{"v":"19808.0"},{"v":"0.0"},{"v":"0.0"},{"v":"0.0"},{"v":"0.0"},{"v":"231000.0"},{"v":"423000.0"},{"v":"1.1062836E9"},{"v":"0"},{"v":"10"},{"v":"0"},{"v":null},{"v":null},{"v":null},{"v":null},{"v":"G"},{"v":null},{"v":"12065.0"},{"v":"12065.0"},{"v":"20996.0"},{"v":"20996.0"},{"v":"0.0"},{"v":"0.0"},{"v":"0.0"},{"v":"0.0"},{"v":"1.3558932E9"},{"v":"0"},{"v":"000000001408"},{"v":"I"},{"v":null},{"v":"1"},{"v":"2200.0"},{"v":"45"},{"v":"0"},{"v":"231000.0"},{"v":"402000.0"},{"v":"0"},{"v":"0"},{"v":"0"},{"v":null},{"v":"0.0"},{"v":"1"},{"v":null},{"v":"1"},{"v":null},{"v":null},{"v":null},{"v":"1802.0"},{"v":"1.3558932E9"},{"v":"1"},{"v":"0"},{"v":"12065.0"},{"v":"12065.0"},{"v":"20996.0"},{"v":"20996.0"},{"v":"0.0"},{"v":"0.0"},{"v":"0.0"},{"v":"0.0"},{"v":"0"},{"v":"2012.0"},{"v":"0.0"},{"v":"0.0"},{"v":"0.0"},{"v":"0.0"},{"v":"E"},{"v":"0.0"},{"v":"10461.0"}]},{"c":[{"v":"COLLADO, JOSE A"},{"v":"340"},{"v":"BLEECKER STREET"},{"v":4.2},{"v":"19634.0"},{"v":"467000.0"},{"v":"1"},{"v":"3033100026"},{"v":"Brooklyn"},{"v":"20.0"},{"v":"48.0"},{"v":"20.0"},{"v":"100.0"},{"v":"3.0"},{"v":"B9"},{"v":"R6"},{"v":"2.0"},{"v":"2.0"},{"v":"2680.0"},{"v":"1960.0"},{"v":"0.0"},{"v":"0.0"},{"v":"0.0000000000000000e+00"},{"v":null},{"v":null},{"v":"0.0"},{"v":null},{"v":null},{"v":"0.0"},{"v":null},{"v":"0.0"},{"v":"0.0"},{"v":"1.0000000000000000e+00"},{"v":null},{"v":"3310"},{"v":"1"},{"v":"1.3682484E9"},{"v":".000000000"},{"v":".000000000"},{"v":null},{"v":"0.0"},{"v":null},{"v":null},{"v":null},{"v":"0.0"},{"v":"0"},{"v":null},{"v":"3.0000000000000000e+00"},{"v":"4.0000000000000000e+00"},{"v":"12699.0"},{"v":"12699.0"},{"v":"18523.0"},{"v":"18523.0"},{"v":"0.0"},{"v":"0.0"},{"v":"0.0"},{"v":"0.0"},{"v":"314000.0"},{"v":"458000.0"},{"v":"1.048482E9"},{"v":"0"},{"v":"12"},{"v":"0"},{"v":null},{"v":null},{"v":null},{"v":null},{"v":"G"},{"v":null},{"v":"7315.0"},{"v":"7315.0"},{"v":"19634.0"},{"v":"19634.0"},{"v":"0.0"},{"v":"0.0"},{"v":"0.0"},{"v":"0.0"},{"v":"1.3682484E9"},{"v":"0"},{"v":"000000000340"},{"v":null},{"v":null},{"v":"1"},{"v":"2000.0"},{"v":"26"},{"v":"0"},{"v":"174000.0"},{"v":"467000.0"},{"v":"0"},{"v":"0"},{"v":"0"},{"v":null},{"v":"0.0"},{"v":"1"},{"v":null},{"v":"1"},{"v":null},{"v":null},{"v":null},{"v":"1105.0"},{"v":"1.3682484E9"},{"v":"1"},{"v":"0"},{"v":"7315.0"},{"v":"7315.0"},{"v":"19634.0"},{"v":"19634.0"},{"v":"0.0"},{"v":"0.0"},{"v":"0.0"},{"v":"0.0"},{"v":"0"},{"v":"2012.0"},{"v":"0.0"},{"v":"0.0"},{"v":"0.0"},{"v":"0.0"},{"v":"E"},{"v":"0.0"},{"v":"11237.0"}]},{"c":[{"v":"BLOOMBERG, MICHAEL R"},{"v":"17"},{"v":"EAST 79 STREET"},{"v":3.3},{"v":"580608.0"},{"v":"1.7664E7"},{"v":"1"},{"v":"1014910010"},{"v":"Manhattan"},{"v":"18.0"},{"v":"70.0"},{"v":"18.0"},{"v":"102.17"},{"v":"5.0"},{"v":"A4"},{"v":"R10"},{"v":"1.0"},{"v":"1.0"},{"v":"7012.0"},{"v":"1899.0"},{"v":"0.0"},{"v":"0.0"},{"v":"0.0000000000000000e+00"},{"v":null},{"v":null},{"v":"0.0"},{"v":null},{"v":null},{"v":"0.0"},{"v":null},{"v":"0.0"},{"v":"0.0"},{"v":"1.0000000000000000e+00"},{"v":null},{"v":"1491"},{"v":"1"},{"v":"1.3558932E9"},{"v":".000000000"},{"v":".000000000"},{"v":null},{"v":"0.0"},{"v":null},{"v":null},{"v":null},{"v":"0.0"},{"v":"0"},{"v":null},{"v":"1.0000000000000000e+00"},{"v":"8.0000000000000000e+00"},{"v":"347885.0"},{"v":"347885.0"},{"v":"580608.0"},{"v":"580608.0"},{"v":"0.0"},{"v":"0.0"},{"v":"0.0"},{"v":"0.0"},{"v":"9280000.0"},{"v":"1.5488E7"},{"v":"7.237044E8"},{"v":"0"},{"v":"13"},{"v":"0"},{"v":null},{"v":null},{"v":"EE"},{"v":null},{"v":"E"},{"v":null},{"v":"305029.0"},{"v":"305029.0"},{"v":"580608.0"},{"v":"580608.0"},{"v":"0.0"},{"v":"0.0"},{"v":"0.0"},{"v":"0.0"},{"v":"1.3558932E9"},{"v":"0"},{"v":"000000000017"},{"v":null},{"v":null},{"v":"1"},{"v":"1839.0"},{"v":"10"},{"v":"0"},{"v":"9280000.0"},{"v":"1.7664E7"},{"v":"0"},{"v":"0"},{"v":"0"},{"v":null},{"v":"0.0"},{"v":"1"},{"v":null},{"v":"1"},{"v":null},{"v":null},{"v":null},{"v":"513.0"},{"v":"1.3558932E9"},{"v":"1"},{"v":"0"},{"v":"305029.0"},{"v":"305029.0"},{"v":"580608.0"},{"v":"580608.0"},{"v":"0.0"},{"v":"0.0"},{"v":"0.0"},{"v":"0.0"},{"v":"0"},{"v":"2012.0"},{"v":"0.0"},{"v":"0.0"},{"v":"0.0"},{"v":"0.0"},{"v":"E"},{"v":"0.0"},{"v":"10075.0"}]},{"c":[{"v":"DEBLASIO, BILL"},{"v":"384"},{"v":"11 STREET"},{"v":1.4},{"v":"15823.0"},{"v":"1115000.0"},{"v":"1"},{"v":"3010230033"},{"v":"Brooklyn"},{"v":"18.58"},{"v":"50.0"},{"v":"18.58"},{"v":"100.0"},{"v":"2.0"},{"v":"B3"},{"v":"R6B"},{"v":"2.0"},{"v":"2.0"},{"v":"1558.0"},{"v":"1901.0"},{"v":"0.0"},{"v":"0.0"},{"v":"0.0000000000000000e+00"},{"v":null},{"v":null},{"v":"0.0"},{"v":null},{"v":null},{"v":"0.0"},{"v":null},{"v":"0.0"},{"v":"0.0"},{"v":"1.0000000000000000e+00"},{"v":null},{"v":"1023"},{"v":"1"},{"v":"1.3682484E9"},{"v":".000000000"},{"v":".000000000"},{"v":null},{"v":"0.0"},{"v":null},{"v":null},{"v":null},{"v":"0.0"},{"v":"0"},{"v":null},{"v":"3.0000000000000000e+00"},{"v":"6.0000000000000000e+00"},{"v":"8202.0"},{"v":"8202.0"},{"v":"14929.0"},{"v":"14929.0"},{"v":"0.0"},{"v":"0.0"},{"v":"0.0"},{"v":"0.0"},{"v":"556000.0"},{"v":"1012000.0"},{"v":"1.0897812E9"},{"v":"0"},{"v":"04"},{"v":"0"},{"v":null},{"v":null},{"v":null},{"v":null},{"v":null},{"v":null},{"v":"7195.0"},{"v":"7195.0"},{"v":"15823.0"},{"v":"15823.0"},{"v":"0.0"},{"v":"0.0"},{"v":"0.0"},{"v":"0.0"},{"v":"1.3682484E9"},{"v":"0"},{"v":"000000000384"},{"v":null},{"v":null},{"v":"1"},{"v":"1858.0"},{"v":"33"},{"v":"0"},{"v":"507000.0"},{"v":"1115000.0"},{"v":"0"},{"v":"0"},{"v":"0"},{"v":null},{"v":"0.0"},{"v":"1"},{"v":null},{"v":"1"},{"v":null},{"v":null},{"v":null},{"v":"403.0"},{"v":"1.3682484E9"},{"v":"1"},{"v":"0"},{"v":"7195.0"},{"v":"7195.0"},{"v":"15823.0"},{"v":"15823.0"},{"v":"0.0"},{"v":"0.0"},{"v":"0.0"},{"v":"0.0"},{"v":"0"},{"v":"2012.0"},{"v":"0.0"},{"v":"0.0"},{"v":"0.0"},{"v":"0.0"},{"v":"E"},{"v":"0.0"},{"v":"11215.0"}]},{"c":[{"v":"MCCRAY, CHIRLANE"},{"v":"442"},{"v":"11 STREET"},{"v":1.3},{"v":"15823.0"},{"v":"1180000.0"},{"v":"1"},{"v":"3010240018"},{"v":"Brooklyn"},{"v":"16.67"},{"v":"30.0"},{"v":"16.67"},{"v":"100.0"},{"v":"3.0"},{"v":"B9"},{"v":"R6B"},{"v":"2.0"},{"v":"2.0"},{"v":"1248.0"},{"v":"1910.0"},{"v":"1.0"},{"v":"0.0"},{"v":"0.0000000000000000e+00"},{"v":null},{"v":null},{"v":"0.0"},{"v":null},{"v":null},{"v":"0.0"},{"v":null},{"v":"0.0"},{"v":"0.0"},{"v":"1.0000000000000000e+00"},{"v":null},{"v":"1024"},{"v":"1"},{"v":"1.3558932E9"},{"v":".000000000"},{"v":".000000000"},{"v":null},{"v":"0.0"},{"v":null},{"v":null},{"v":null},{"v":"0.0"},{"v":"0"},{"v":null},{"v":"3.0000000000000000e+00"},{"v":"6.0000000000000000e+00"},{"v":"7423.0"},{"v":"7423.0"},{"v":"14929.0"},{"v":"14929.0"},{"v":"1670.0"},{"v":"1670.0"},{"v":"1670.0"},{"v":"1670.0"},{"v":"538000.0"},{"v":"1082000.0"},{"v":"1.0896084E9"},{"v":"0"},{"v":"04"},{"v":"0"},{"v":null},{"v":null},{"v":"EEEE"},{"v":null},{"v":null},{"v":"1.3699764E9"},{"v":"7214.0"},{"v":"7214.0"},{"v":"15823.0"},{"v":"15823.0"},{"v":"1600.0"},{"v":"1600.0"},{"v":"1600.0"},{"v":"1600.0"},{"v":"1.3558932E9"},{"v":"0"},{"v":"000000000442"},{"v":null},{"v":null},{"v":"1"},{"v":"1667.0"},{"v":"18"},{"v":"0"},{"v":"538000.0"},{"v":"1180000.0"},{"v":"0"},{"v":"0"},{"v":"0"},{"v":null},{"v":"0.0"},{"v":"1"},{"v":null},{"v":"1"},{"v":null},{"v":null},{"v":null},{"v":"403.0"},{"v":"1.3558932E9"},{"v":"1"},{"v":"0"},{"v":"7214.0"},{"v":"7214.0"},{"v":"15823.0"},{"v":"15823.0"},{"v":"1670.0"},{"v":"1670.0"},{"v":"1670.0"},{"v":"1670.0"},{"v":"0"},{"v":"2012.0"},{"v":"0.0"},{"v":"0.0"},{"v":"0.0"},{"v":"0.0"},{"v":"E"},{"v":"0.0"},{"v":"11215.0"}]}]}
  window.board = new Board();
  window.board.setCallback('onTurnChanged', redrawBoard);
  window.board.setCallback('onFinished', handleFinished);
  window.board.init(failsafe_result)
            })
         }) 
  var gameEl = document.getElementById('game');
  var cells = game.querySelectorAll('.board .cell');

/*
  window.board = new Board();

  window.board.setCallback('onTurnChanged', redrawBoard);
  window.board.setCallback('onFinished', handleFinished);
  window.board.init()
*/

  // set click listeners
  Array.prototype.forEach.call(cells, function(e, i) {
    e.setAttribute("board_cell", i );
    e.addEventListener('click', function(e) {
        //alert(gresult)

        //var gresult = JSON.parse(localStorage.getItem("gresult"));
        //if (! gresult ) return;

        //alert('hi: ' + gresult);
        //console.log( "success: " + JSON.stringify(gresult) );
      window.board.play(i);
    });
  });

  function getPlayerLabel(board, player) {
    switch (player) {
      case board.PLAYER_1: return '1';
      case board.PLAYER_2: return '2';
      default: return '';
    }
  }

  function redrawBoard(board) {
  //console.log('QQQ redrawboard 1')
    // redraw cell states:
    Array.prototype.forEach.call(cells, function(e, i) {
      var state = board.getCellState(i);
      //var state=true
      //console.log('QQQ state: ' + state)
//      console.log('e: ' + e)
//      console.log(e)
//      console.log('e.classList: ' + e.classList)
//      console.log('board: ' + board)
//      console.log(board)
      if (state) {
        e.classList.add(state == board.PLAYER_1 ? 'tic' : 'tac');
        //e.append(board.boardwords[i])
        //console.log('board.boardwords[i]:')
        //console.log(board.boardwords[i])
        //e.appendChild(board.boardwords[i])
        //alert(board.boardwords[i])

        //console.log(e)
        e.innerHTML = board.boardwords[i]
        var elem = document.createElement("img");
        elem.src ="deblasiobydonkeyhoteysmall.png";
        elem.setAttribute("alt", "deblasio");
        elem.setAttribute("position", "fixed");
        elem.setAttribute("top", "0");
        elem.setAttribute("left", "0");
        //console.log('i: ' + "a"+i)
        //console.log(document.getElementById("a"+i))
        //var foo = document.getElementById("a"+i);
        //foo.appendChild(elem);
        document.getElementById("a"+i).appendChild(elem);
        //console.log( "success: " + JSON.stringify(gresult) );
        //e.classList.add('text');
      }
    });
    drawStatusMessage(board);
  }

  function drawStatusMessage(board) {
    // redraw "next player" status message:
    var message = '';
    switch (board.getBoardState()) {
      case board.STATE_PLAYING:
        message = 'Player '+getPlayerLabel(board, board.getNextPlayer());
        break;
      case board.STATE_FINISHED:
        if (board.getWinner()) {
          message = 'Winner: player '+getPlayerLabel(board, board.getWinner());
        } else {
          message = 'Draw!';
        }
        break;
    }
    game.querySelector('.controls .message').innerText = message;
  }

  game.querySelector('.controls .restart').addEventListener('click', function() {
    game.classList.remove('finished');
    Array.prototype.forEach.call(cells, function(e, i) {
      e.classList.remove('solution');
      e.classList.remove('tic');
      e.classList.remove('tac');
      e.innerHTML=''
    });
    var result = JSON.parse(localStorage.getItem("gresult"));
    window.board.init(result);
    //redrawBoard(board);
    drawStatusMessage(board);
  });


  function handleFinished(board) {
    redrawBoard(board);
    game.classList.add('finished');
    if (board.getWinningCells()) {
      for (var c=0; c < board.getWinningCells().length ; c++) {
        if (board.getWinningCells()[c]) {
          cells.item(c).classList.add('solution');
        } else {
          cells.item(c).classList.remove('solution');
        }
      }
    }
  }

//});
})