// get the name of the sheet for calculation
CALCUL = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("CALCUL");

function increment(cell) {
  
  // get the boss status
  status = CALCUL.getRange(cell).getValue();
  
  // if status is 8, means enhanced +3 and dead, it should reset
  if(status == 8) {
    CALCUL.getRange(cell).setValue(1);
  }
  else {
    CALCUL.getRange(cell).setValue(status + 1);
  }
}

// Let's go for a function for each area.
function area_1(){
  increment('E2')
}

function area_2(){
  increment('E3')
}

function area_3(){
  increment('E4')
}

function area_4(){
  increment('E5')
}

function area_5(){
  increment('E6')
}

function area_6(){
  increment('E7')
}

function area_7(){
  increment('E8')
}

function area_8(){
  increment('E9')
}

function area_9(){
  increment('E10')
}

function area_10(){
  increment('E11')
}

function area_11(){
  increment('E12')
}

function area_12(){
  increment('E13')
}

function area_13(){
  increment('E14')
}

function area_14(){
  increment('E15')
}

function area_15(){
  increment('E16')
}

function area_16(){
  increment('E17')
}

function area_17(){
  increment('E18')
}

function area_18(){
  increment('E19')
}

function area_19(){
  increment('E20')
}

function area_20(){
  increment('E21')
}

function area_21(){
  increment('E22')
}

function area_22(){
  increment('E23')
}

function area_23(){
  increment('E24')
}

function area_24(){
  increment('E25')
}

function area_25(){
  increment('E26')
}

function area_26(){
  increment('E27')
}

function area_27(){
  increment('E28')
}

function area_28(){
  increment('E29')
}

function area_29(){
  increment('E30')
}

function area_30(){
  increment('E31')
}

function area_31(){
  increment('E32')
}

function area_32(){
  increment('E33')
}

function area_33(){
  increment('E34')
}

function area_34(){
  increment('E35')
}

function area_35(){
  increment('E36')
}

function area_36(){
  increment('E37')
}

function area_37(){
  increment('E38')
}

function area_38(){
  increment('E39')
}

function area_39(){
  increment('E40')
}

function area_40(){
  increment('E41')
}

function area_41(){
  increment('E42')
}

function area_42(){
  increment('E43')
}

function area_43(){
  increment('E44')
}

function area_44(){
  increment('E45')
}

function area_45(){
  increment('E46')
}

function area_46(){
  increment('E47')
}

function area_47(){
  increment('E48')
}

function area_48(){
  increment('E49')
}

function area_49(){
  increment('E50')
}

function area_50(){
  increment('E51')
}

function area_51(){
  increment('E52')
}

function area_52(){
  increment('E53')
}

function area_53(){
  increment('E54')
}

function area_54(){
  increment('E55')
}

function area_55(){
  increment('E56')
}

function area_56(){
  increment('E57')
}

function area_57(){
  increment('E58')
}

function area_58(){
  increment('E59')
}

function area_59(){
  increment('E60')
}

function area_60(){
  increment('E61')
}

function area_61(){
  increment('E62')
}

function area_62(){
  increment('E63')
}

function area_63(){
  increment('E64')
}

function area_64(){
  increment('E65')
}

function area_65(){
  increment('E66')
}

function area_66(){
  increment('E67')
}

function area_67(){
  increment('E68')
}

function area_68(){
  increment('E69')
}

function area_69(){
  increment('E70')
}

function area_70(){
  increment('E71')
}

function area_71(){
  increment('E72')
}

function area_72(){
  increment('E73')
}

function area_73(){
  increment('E74')
}

function area_74(){
  increment('E75')
}

function area_75(){
  increment('E76')
}

function area_76(){
  increment('E77')
}

function area_77(){
  increment('E78')
}

function area_78(){
  increment('E79')
}

function area_79(){
  increment('E80')
}

function area_80(){
  increment('E81')
}

function area_81(){
  increment('E82')
}

function area_82(){
  increment('E83')
}

function area_83(){
  increment('E84')
}

function area_84(){
  increment('E85')
}

function area_85(){
  increment('E86')
}

function area_86(){
  increment('E87')
}

function area_87(){
  increment('E88')
}

function area_88(){
  increment('E89')
}

function area_89(){
  increment('E90')
}

function area_90(){
  increment('E91')
}

function area_91(){
  increment('E92')
}

function area_92(){
  increment('E93')
}

function area_93(){
  increment('E94')
}

function area_94(){
  increment('E95')
}

function area_95(){
  increment('E96')
}

function area_96(){
  increment('E97')
}

function area_97(){
  increment('E98')
}

function area_98(){
  increment('E99')
}

function area_99(){
  increment('E100')
}

function area_100(){
  increment('E101')
}

function area_101(){
  increment('E102')
}

function area_102(){
  increment('E103')
}

function area_103(){
  increment('E104')
}

function area_104(){
  increment('E105')
}

function area_105(){
  increment('E106')
}

function area_106(){
  increment('E107')
}

function area_107(){
  increment('E108')
}

function area_108(){
  increment('E109')
}

function area_109(){
  increment('E110')
}

function area_110(){
  increment('E111')
}

function area_111(){
  increment('E112')
}

function area_112(){
  increment('E113')
}

function area_113(){
  increment('E114')
}

function area_114(){
  increment('E115')
}

function area_115(){
  increment('E116')
}

function area_116(){
  increment('E117')
}

function area_117(){
  increment('E118')
}

function area_118(){
  increment('E119')
}

function area_119(){
  increment('E120')
}

function area_120(){
  increment('E121')
}

function area_121(){
  increment('E122')
}

function area_122(){
  increment('E123')
}

function area_123(){
  increment('E124')
}

function area_124(){
  increment('E125')
}

function area_125(){
  increment('E126')
}

function area_126(){
  increment('E127')
}

function area_127(){
  increment('E128')
}

function area_128(){
  increment('E129')
}

function area_129(){
  increment('E130')
}

function area_130(){
  increment('E131')
}

function area_131(){
  increment('E132')
}

function area_132(){
  increment('E133')
}

function area_133(){
  increment('E134')
}

function area_134(){
  increment('E135')
}

function area_135(){
  increment('E136')
}

function area_136(){
  increment('E137')
}

function area_137(){
  increment('E138')
}

function area_138(){
  increment('E139')
}

function area_139(){
  increment('E140')
}

function area_140(){
  increment('E141')
}

function area_141(){
  increment('E142')
}

function area_142(){
  increment('E143')
}

function area_143(){
  increment('E144')
}

function area_144(){
  increment('E145')
}

function area_145(){
  increment('E146')
}

function area_146(){
  increment('E147')
}

function area_147(){
  increment('E148')
}

function area_148(){
  increment('E149')
}

function area_149(){
  increment('E150')
}

function area_150(){
  increment('E151')
}

function area_151(){
  increment('E152')
}

function area_152(){
  increment('E153')
}

function area_153(){
  increment('E154')
}

function area_154(){
  increment('E155')
}

function area_155(){
  increment('E156')
}

function area_156(){
  increment('E157')
}

function area_157(){
  increment('E158')
}

function area_158(){
  increment('E159')
}

function area_159(){
  increment('E160')
}

function area_160(){
  increment('E161')
}

function area_161(){
  increment('E162')
}

function area_162(){
  increment('E163')
}

function area_163(){
  increment('E164')
}

function area_164(){
  increment('E165')
}

function area_165(){
  increment('E166')
}

function area_166(){
  increment('E167')
}

function area_167(){
  increment('E168')
}

function area_168(){
  increment('E169')
}

function area_169(){
  increment('E170')
}

function area_170(){
  increment('E171')
}

function area_171(){
  increment('E172')
}

function area_172(){
  increment('E173')
}

function area_173(){
  increment('E174')
}

function area_174(){
  increment('E175')
}

function area_175(){
  increment('E176')
}

function area_176(){
  increment('E177')
}

function area_177(){
  increment('E178')
}

function area_178(){
  increment('E179')
}

function area_179(){
  increment('E180')
}

function area_180(){
  increment('E181')
}

function area_181(){
  increment('E182')
}

function area_182(){
  increment('E183')
}
