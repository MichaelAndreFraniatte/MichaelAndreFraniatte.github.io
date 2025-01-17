/**
* All rights reserved Michael Andre Franiatte
**/

var xH2S;
var xO2;
var xCO;
var xN2;
var xNH3;
var xCO2;
var xH2O;
var xH2;
var yH2S;
var yO2;
var yCO;
var yN2;
var yNH3;
var yCO2;
var yH2O;
var yH2;
var MH2S;
var MO2;
var MCO;
var MN2;
var MNH3;
var MCO2;
var MH2O;
var MH2;
var sumy;
var XH2Obis;
var XCO2bis;
var XCObis;
var XH2bis;
var XN2bis;
var XCH4bis;
var XNH3bis;
var XMGbis;
var Pb;
var P;
var T;
var TcH2O;//temp�rature critique de H2O
var PcH2O;//pression critique de H2O
var TcCO2;
var PcCO2;
var TcCO;
var PcCO;
var TcH2;
var PcH2;
var TcN2;
var PcN2;
var TcCH4;
var PcCH4;
var TcNH3;
var PcNH3;
var TcMG;
var PcMG;
var R;
var wH2O;
var nH2O;
var alphaH2O;
var wCO2;
var nCO2;
var alphaCO2;
var wCO;
var nCO;
var alphaCO;
var wH2;
var nH2;
var alphaH2;
var wN2;
var nN2;
var alphaN2;
var wCH4;
var nCH4;
var alphaCH4;
var wNH3;
var nNH3;
var alphaNH3;
var wMG;
var nMG;
var alphaMG;
var AH2;
var BH2;
var ACO2;
var BCO2;
var AN2;
var BN2;
var AH2O;
var BH2O;
var ACO;
var BCO;
var ACH4;
var BCH4;
var ANH3;
var BNH3;
var AMG;
var BMG;
var grAbis;
var grAsuite;
var GRA;
var GRB;
var test;
var ZN;
var FZ;
var FpZ;
var ZN1;
var VN;
var V;
var BiH2;
var BiCO2;
var BiN2;
var BiH2O;
var BiCO;
var BiCH4;
var BiNH3;
var BiMG;
var A;
var B;
var ArH2;
var ArCO2;
var ArN2;
var ArH2O;
var ArCO;
var ArCH4;
var ArNH3;
var ArMG;
var SB;
var DVDXH2;
var DVDXCO2;
var DVDXN2;
var DVDXH2O;
var DVDXCO;
var DVDXCH4;
var DVDXNH3;
var DVDXMG;
var VCO2M;
var VCOM;
var VH2M;
var VN2M;
var VCH4M;
var VNH3M;
var VH2OM;
var VMGM;
var logFIH2O;
var FIH2Oinc;
var FUH2Oinc;
var FUH2Oi;
var logFIH2;
var FIH2inc;
var FUH2inc;
var FUH2i;
var logFICO;
var FICOinc;
var FUCOinc;
var FUCOi;
var logFICO2;
var FICO2inc;
var FUCO2inc;
var FUCO2i;
var logFIN2;
var FIN2inc;
var FUN2inc;
var FUN2i;
var logFICH4;
var FICH4inc;
var FUCH4inc;
var FUCH4i;
var logFINH3;
var FINH3inc;
var FUNH3inc;
var FUNH3i;
var logFIMG;
var FIMGinc;
var FUMGinc;
var FUMGi;
var M;
var Vlgg;
var Vlglg;
var Vgg;
var xl;
var LogKr;
var LogKeq;
var LogKrLogkeq;
var volume = false;
var fugacity = false;
var reaction = false;

function Volume() {
    $("#sub-output").css('display','none');
    xH2S = parseFloat($("#8-7").text());
    xO2 = parseFloat($("#7-7").text());
    xCO = parseFloat($("#6-7").text());
    xN2 = parseFloat($("#5-7").text());
    xNH3 = parseFloat($("#4-7").text());
    xCO2 = parseFloat($("#3-7").text());
    xH2O = parseFloat($("#2-7").text());
    xH2 = parseFloat($("#1-7").text());
    xH2S = parseFloat($("#8-7").text()) / (parseFloat($("#8-7").text()) + parseFloat($("#7-7").text()) + parseFloat($("#6-7").text()) + parseFloat($("#5-7").text()) + parseFloat($("#4-7").text()) + parseFloat($("#3-7").text()) + parseFloat($("#2-7").text()) + parseFloat($("#1-7").text()));
    xO2 = parseFloat($("#7-7").text()) / (parseFloat($("#8-7").text()) + parseFloat($("#7-7").text()) + parseFloat($("#6-7").text()) + parseFloat($("#5-7").text()) + parseFloat($("#4-7").text()) + parseFloat($("#3-7").text()) + parseFloat($("#2-7").text()) + parseFloat($("#1-7").text()));
    xCO = parseFloat($("#6-7").text()) / (parseFloat($("#8-7").text()) + parseFloat($("#7-7").text()) + parseFloat($("#6-7").text()) + parseFloat($("#5-7").text()) + parseFloat($("#4-7").text()) + parseFloat($("#3-7").text()) + parseFloat($("#2-7").text()) + parseFloat($("#1-7").text()));
    xN2 = parseFloat($("#5-7").text()) / (parseFloat($("#8-7").text()) + parseFloat($("#7-7").text()) + parseFloat($("#6-7").text()) + parseFloat($("#5-7").text()) + parseFloat($("#4-7").text()) + parseFloat($("#3-7").text()) + parseFloat($("#2-7").text()) + parseFloat($("#1-7").text()));
    xNH3 = parseFloat($("#4-7").text()) / (parseFloat($("#8-7").text()) + parseFloat($("#7-7").text()) + parseFloat($("#6-7").text()) + parseFloat($("#5-7").text()) + parseFloat($("#4-7").text()) + parseFloat($("#3-7").text()) + parseFloat($("#2-7").text()) + parseFloat($("#1-7").text()));
    xCO2 = parseFloat($("#3-7").text()) / (parseFloat($("#8-7").text()) + parseFloat($("#7-7").text()) + parseFloat($("#6-7").text()) + parseFloat($("#5-7").text()) + parseFloat($("#4-7").text()) + parseFloat($("#3-7").text()) + parseFloat($("#2-7").text()) + parseFloat($("#1-7").text()));
    xH2O = parseFloat($("#2-7").text()) / (parseFloat($("#8-7").text()) + parseFloat($("#7-7").text()) + parseFloat($("#6-7").text()) + parseFloat($("#5-7").text()) + parseFloat($("#4-7").text()) + parseFloat($("#3-7").text()) + parseFloat($("#2-7").text()) + parseFloat($("#1-7").text()));
    xH2 = parseFloat($("#1-7").text()) / (parseFloat($("#8-7").text()) + parseFloat($("#7-7").text()) + parseFloat($("#6-7").text()) + parseFloat($("#5-7").text()) + parseFloat($("#4-7").text()) + parseFloat($("#3-7").text()) + parseFloat($("#2-7").text()) + parseFloat($("#1-7").text()));
    $("#8-7").text(Number((xH2S).toFixed(5)).toString()); //"H2";//xH2S
    $("#7-7").text(Number((xO2).toFixed(5)).toString()); //"H2O";//xO2
    $("#6-7").text(Number((xCO).toFixed(5)).toString()); //"CO2";//xCO
    $("#5-7").text(Number((xN2).toFixed(5)).toString()); //"NH3";//xN2
    $("#4-7").text(Number((xNH3).toFixed(5)).toString()); //"N2";//xNH3
    $("#3-7").text(Number((xCO2).toFixed(5)).toString()); //"CO";//xCO2
    $("#2-7").text(Number((xH2O).toFixed(5)).toString()); //"O2";//xH2O
    $("#1-7").text(Number((xH2).toFixed(5)).toString()); //"H2S";//xH2
    MH2S = parseFloat($("#8-6").text());//MH2S
    MO2 = parseFloat($("#7-6").text());//MO2
    MCO = parseFloat($("#6-6").text());//MCO
    MN2 = parseFloat($("#5-6").text());//MN2
    MNH3 = parseFloat($("#4-6").text());//MNH3
    MCO2 = parseFloat($("#3-6").text());//MCO2
    MH2O = parseFloat($("#2-6").text());//MH2O
    MH2 = parseFloat($("#1-6").text());//MH2
    yH2S = xH2S * MH2S / (xH2S * MH2S + xO2 * MO2 + xCO * MCO + xCO2 * MCO2 + xN2 * MN2 + xCO2 * MCO2 + xH2O * MH2O + xH2 * MH2);
    yO2 = xO2 * MO2 / (xH2S * MH2S + xO2 * MO2 + xCO * MCO + xCO2 * MCO2 + xN2 * MN2 + xCO2 * MCO2 + xH2O * MH2O + xH2 * MH2);
    yCO = xCO * MCO / (xH2S * MH2S + xO2 * MO2 + xCO * MCO + xCO2 * MCO2 + xN2 * MN2 + xCO2 * MCO2 + xH2O * MH2O + xH2 * MH2);
    yN2 = xN2 * MN2 / (xH2S * MH2S + xO2 * MO2 + xCO * MCO + xCO2 * MCO2 + xN2 * MN2 + xCO2 * MCO2 + xH2O * MH2O + xH2 * MH2);
    yNH3 = xNH3 * MNH3 / (xH2S * MH2S + xO2 * MO2 + xCO * MCO + xCO2 * MCO2 + xN2 * MN2 + xCO2 * MCO2 + xH2O * MH2O + xH2 * MH2);
    yCO2 = xCO2 * MCO2 / (xH2S * MH2S + xO2 * MO2 + xCO * MCO + xCO2 * MCO2 + xN2 * MN2 + xCO2 * MCO2 + xH2O * MH2O + xH2 * MH2);
    yH2O = xH2O * MH2O / (xH2S * MH2S + xO2 * MO2 + xCO * MCO + xCO2 * MCO2 + xN2 * MN2 + xCO2 * MCO2 + xH2O * MH2O + xH2 * MH2);
    yH2 = xH2 * MH2 / (xH2S * MH2S + xO2 * MO2 + xCO * MCO + xCO2 * MCO2 + xN2 * MN2 + xCO2 * MCO2 + xH2O * MH2O + xH2 * MH2);
    sumy = yH2S + yO2 + yCO + yN2 + yNH3 + yCO2 + yH2O + yH2;
    yH2S = yH2S / sumy;
    yO2 = yO2 / sumy;
    yCO = yCO / sumy;
    yN2 = yN2 / sumy;
    yNH3 = yNH3 / sumy;
    yCO2 = yCO2 / sumy;
    yH2O = yH2O / sumy;
    yH2 = yH2 / sumy;
    $("#8-8").text(Number((yH2S).toFixed(5)).toString());//yH2S
    $("#7-8").text(Number((yO2).toFixed(5)).toString());//yO2
    $("#6-8").text(Number((yCO).toFixed(5)).toString());//yCO
    $("#5-8").text(Number((yN2).toFixed(5)).toString());//yN2
    $("#4-8").text(Number((yNH3).toFixed(5)).toString());//yNH3
    $("#3-8").text(Number((yCO2).toFixed(5)).toString());//yCO2
    $("#2-8").text(Number((yH2O).toFixed(5)).toString());//yH2O
    $("#1-8").text(Number((yH2).toFixed(5)).toString());//yH2
    /////////////////////////////////////////
    XH2Obis = parseFloat($("#2-7").text());
    XCO2bis = parseFloat($("#3-7").text());
    XCObis = parseFloat($("#4-7").text());
    XH2bis = parseFloat($("#1-7").text());
    XN2bis = parseFloat($("#7-7").text());
    XCH4bis = parseFloat($("#5-7").text());
    XNH3bis = parseFloat($("#8-7").text());
    XMGbis = parseFloat($("#6-7").text());
    Pb = parseFloat($("#0-1").text());
    P = Pb * 100000; //passage de la pression de bar en Pa
    T = parseFloat($("#1-1").text()) + 273.15;
    TcH2O = parseFloat($("#2-4").text()); //temp�rature critique de H2O dans la cellule J8
    PcH2O = parseFloat($("#2-3").text()); //pression critique de H2O
    TcCO2 = parseFloat($("#3-4").text());
    PcCO2 = parseFloat($("#3-3").text());
    TcCO = parseFloat($("#4-4").text());
    PcCO = parseFloat($("#4-3").text());
    TcH2 = parseFloat($("#1-4").text());
    PcH2 = parseFloat($("#1-3").text());
    TcN2 = parseFloat($("#7-4").text());
    PcN2 = parseFloat($("#7-3").text());
    TcCH4 = parseFloat($("#5-4").text());
    PcCH4 = parseFloat($("#5-3").text());
    TcNH3 = parseFloat($("#8-4").text());
    PcNH3 = parseFloat($("#8-3").text());
    TcMG = parseFloat($("#6-4").text());
    PcMG = parseFloat($("#6-3").text());
    R = 8.314472; //constante des gaz parfaits
    ///////////////////////////////////////////////
    //calcul des facteurs acentriques
    wH2O = parseFloat($("#2-5").text());
    nH2O = 0.48508 + 1.55171 * wH2O - 0.15613 * Math.pow(wH2O, 2);
    alphaH2O = Math.pow(1 + nH2O * (1 - Math.pow(T / TcH2O, 0.5)), 2);
    wCO2 = parseFloat($("#3-5").text());
    nCO2 = 0.48508 + 1.55171 * wCO2 - 0.15613 * Math.pow(wCO2, 2);
    alphaCO2 = Math.pow(1 + nCO2 * (1 - Math.pow(T / TcCO2, 0.5)), 2);
    wCO = parseFloat($("#4-5").text());
    nCO = 0.48508 + 1.55171 * wCO - 0.15613 * Math.pow(wCO, 2);
    alphaCO = Math.pow(1 + nCO * (1 - Math.pow(T / TcCO, 0.5)), 2);
    wH2 = parseFloat($("#1-5").text());
    nH2 = 0.48508 + 1.55171 * wH2 - 0.15613 * Math.pow(wH2, 2);
    alphaH2 = Math.pow(1 + nH2 * (1 - Math.pow(T / TcH2, 0.5)), 2);
    wN2 = parseFloat($("#7-5").text());
    nN2 = 0.48508 + 1.55171 * wN2 - 0.15613 * Math.pow(wN2, 2);
    alphaN2 = Math.pow(1 + nN2 * (1 - Math.pow(T / TcN2, 0.5)), 2);
    wCH4 = parseFloat($("#5-5").text());
    nCH4 = 0.48508 + 1.55171 * wCH4 - 0.15613 * Math.pow(wCH4, 2);
    alphaCH4 = Math.pow(1 + nCH4 * (1 - Math.pow(T / TcCH4, 0.5)), 2);
    wNH3 = parseFloat($("#8-5").text());
    nNH3 = 0.48508 + 1.55171 * wNH3 - 0.15613 * Math.pow(wNH3, 2);
    alphaNH3 = Math.pow(1 + nNH3 * (1 - Math.pow(T / TcNH3, 0.5)), 2);
    wMG = parseFloat($("#6-5").text());
    nMG = 0.48508 + 1.55171 * wMG - 0.15613 * Math.pow(wMG, 2);
    alphaMG = Math.pow(1 + nMG * (1 - Math.pow(T / TcMG, 0.5)), 2);
    /////////////////////////
    AH2 = 0.42748 * alphaH2 * Math.pow(TcH2, 2) / (PcH2 * 100000) * P / Math.pow(T, 2); //avec Tr=T/Tc et Pr=P/Pc
    BH2 = 0.08664 * TcH2 / (PcH2 * 100000) * P / (T);
    ACO2 = 0.42748 * alphaCO2 * Math.pow(TcCO2, 2) / (PcCO2 * 100000) * P / Math.pow(T, 2);
    BCO2 = 0.08664 * TcCO2 / (PcCO2 * 100000) * P / (T);
    AN2 = 0.42748 * alphaN2 * Math.pow(TcN2, 2) / (PcN2 * 100000) * P / Math.pow(T, 2);
    BN2 = 0.08664 * TcN2 / (PcN2 * 100000) * P / (T);
    AH2O = 0.42748 * alphaH2O * Math.pow(TcH2O, 2) / (PcH2O * 100000) * P / Math.pow(T, 2);
    BH2O = 0.08664 * TcH2O / (PcH2O * 100000) * P / (T);
    ACO = 0.42748 * alphaCO * Math.pow(TcCO, 2) / (PcCO * 100000) * P / Math.pow(T, 2);
    BCO = 0.08664 * TcCO / (PcCO * 100000) * P / (T);
    ACH4 = 0.42748 * alphaCH4 * Math.pow(TcCH4, 2) / (PcCH4 * 100000) * P / Math.pow(T, 2);
    BCH4 = 0.08664 * TcCH4 / (PcCH4 * 100000) * P / (T);
    ANH3 = 0.42748 * alphaNH3 * Math.pow(TcNH3, 2) / (PcNH3 * 100000) * P / Math.pow(T, 2);
    BNH3 = 0.08664 * TcNH3 / (PcNH3 * 100000) * P / (T);
    AMG = 0.42748 * alphaMG * Math.pow(TcMG, 2) / (PcMG * 100000) * P / Math.pow(T, 2);
    BMG = 0.08664 * TcMG / (PcMG * 100000) * P / (T);
    ///////////////////////////////////
    grAbis = Math.pow(XMGbis, 2) * AMG + 2 * (1 - 0) * XMGbis * XH2bis * Math.pow(AMG * AH2, 0.5) + 2 * (1 - 0) * XMGbis * XCO2bis * Math.pow(AMG * ACO2, 0.5) + 2 * (1 - 0) * XMGbis * XN2bis * Math.pow(AMG * AN2, 0.5) + 2 * (1 - 0) * XMGbis * XH2Obis * Math.pow(AMG * AH2O, 0.5) + 2 * (1 - 0) * XMGbis * XCObis * Math.pow(AMG * ACO2, 0.5) + 2 * (1 - 0) * XMGbis * XCH4bis * Math.pow(AMG * ACH4, 0.5) + 2 * (1 - 0) * XMGbis * XNH3bis * Math.pow(AMG * ANH3, 0.5);
    grAsuite = Math.pow(XCH4bis, 2) * ACH4 + Math.pow(XNH3bis, 2) * ANH3 + 2 * (1 - 0) * XCH4bis * XCObis * Math.pow(ACO * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XH2Obis * Math.pow(AH2O * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XCO2bis * Math.pow(ACO2 * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XH2bis * Math.pow(AH2 * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XN2bis * Math.pow(AN2 * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XNH3bis * Math.pow(ANH3 * ACH4, 0.5) + 2 * (1 - 0) * XH2Obis * XNH3bis * Math.pow(ANH3 * AH2O, 0.5) + 2 * (1 - 0) * XCO2bis * XNH3bis * Math.pow(ANH3 * ACO2, 0.5) + 2 * (1 - 0) * XCObis * XNH3bis * Math.pow(ANH3 * ACO, 0.5) + 2 * (1 - 0) * XH2bis * XNH3bis * Math.pow(ANH3 * AH2, 0.5) + 2 * (1 - 0) * XN2bis * XNH3bis * Math.pow(ANH3 * AN2, 0.5) + grAbis;
    GRA = Math.pow(XH2Obis, 2) * AH2O + Math.pow(XCO2bis, 2) * ACO2 + 2 * (1 - 0) * XH2Obis * XCO2bis * Math.pow(AH2O * ACO2, 0.5) + Math.pow(XH2bis, 2) * AH2 + 2 * (1 - 0) * XH2Obis * XH2bis * Math.pow(AH2O * AH2, 0.5) + Math.pow(XN2bis, 2) * AN2 + 2 * (1 - 0) * XH2Obis * XN2bis * Math.pow(AH2O * AN2, 0.5) + 2 * (1 - 0) * XCO2bis * XH2bis * Math.pow(ACO2 * AH2, 0.5) + 2 * (1 - 0) * XCO2bis * XN2bis * Math.pow(ACO2 * AN2, 0.5) + 2 * (1 - 0) * XN2bis * XH2bis * Math.pow(AN2 * AH2, 0.5) + Math.pow(XCObis, 2) * ACO + 2 * (1 - 0) * XH2Obis * XCObis * Math.pow(AH2O * ACO, 0.5) + 2 * (1 - 0) * XCObis * XH2bis * Math.pow(ACO * AH2, 0.5) + 2 * (1 - 0) * XCObis * XN2bis * Math.pow(ACO * AN2, 0.5) + 2 * (1 - 0) * XCObis * XCO2bis * Math.pow(ACO * ACO2, 0.5) + grAsuite;
    GRB = XH2Obis * BH2O + XH2bis * BH2 + XCO2bis * BCO2 + XN2bis * BN2 + XCObis * BCO + XNH3bis * BNH3 + XCH4bis * BCH4 + XMGbis * BMG;
    //////////////////////////////////
    test = 10;
    ZN = 1000.01; //initialisation NR � changer si plantage
    while (test > 0.000000001)
    {
        FZ = Math.pow(ZN, 3) - Math.pow(ZN, 2) + (GRA - Math.pow(GRB, 2) - GRB) * ZN - GRA * GRB;
        FpZ = 3 * Math.pow(ZN, 2) - 2 * ZN + (GRA - Math.pow(GRB, 2) - GRB);
        ZN1 = ZN - FZ / FpZ;
        test = Math.abs(ZN1 - ZN);
        ZN = ZN1;
    }
    VN = (ZN * R * T / P);
    V = VN * 1000000;
    /////////////////////////////////////////
    //calculs des param�tres de repulsion et d'attraction de l'equation d'etat, aialphai et bialphai qui interviennent dans le calcul des coefficients de fugacit�
    AH2 = 0.42748 * alphaH2 * (R * Math.pow(TcH2, 2)) / (PcH2 * 100000);
    BH2 = 0.08664 * R * TcH2 / (PcH2 * 100000);
    BiH2 = BH2; //stockage de bialphai
    ACO2 = 0.42748 * alphaCO2 * (R * Math.pow(TcCO2, 2)) / (PcCO2 * 100000);
    BCO2 = 0.08664 * R * TcCO2 / (PcCO2 * 100000);
    BiCO2 = BCO2;
    AN2 = 0.42748 * alphaN2 * (R * Math.pow(TcN2, 2)) / (PcN2 * 100000);
    BN2 = 0.08664 * R * TcN2 / (PcN2 * 100000);
    BiN2 = BN2;
    AH2O = 0.42748 * alphaH2O * (R * Math.pow(TcH2O, 2)) / (PcH2O * 100000);
    BH2O = 0.08664 * R * TcH2O / (PcH2O * 100000);
    BiH2O = BH2O;
    ACO = 0.42748 * alphaCO * (R * Math.pow(TcCO, 2)) / (PcCO * 100000);
    BCO = 0.08664 * R * TcCO / (PcCO * 100000);
    BiCO = BCO;
    ACH4 = 0.42748 * alphaCH4 * (R * Math.pow(TcCH4, 2)) / (PcCH4 * 100000);
    BCH4 = 0.08664 * R * TcCH4 / (PcCH4 * 100000);
    BiCH4 = BCH4;
    ANH3 = 0.42748 * alphaNH3 * (R * Math.pow(TcNH3, 2)) / (PcNH3 * 100000);
    BNH3 = 0.08664 * R * TcNH3 / (PcNH3 * 100000);
    BiNH3 = BNH3;
    AMG = 0.42748 * alphaMG * (R * Math.pow(TcMG, 2)) / (PcMG * 100000);
    BMG = 0.08664 * R * TcMG / (PcMG * 100000);
    BiMG = BMG;
    ////////////////////////////////
    //calculs des param�tres de repulsion et d'attraction de l'equation d'etat, a et b qui n'interviennent pas dans le calcul du coefficient de fugacit�
    grAbis = Math.pow(XMGbis, 2) * AMG + 2 * (1 - 0) * XMGbis * XH2bis * Math.pow(AMG * AH2, 0.5) + 2 * (1 - 0) * XMGbis * XCO2bis * Math.pow(AMG * ACO2, 0.5) + 2 * (1 - 0) * XMGbis * XN2bis * Math.pow(AMG * AN2, 0.5) + 2 * (1 - 0) * XMGbis * XH2Obis * Math.pow(AMG * AH2O, 0.5) + 2 * (1 - 0) * XMGbis * XCObis * Math.pow(AMG * ACO2, 0.5) + 2 * (1 - 0) * XMGbis * XCH4bis * Math.pow(AMG * ACH4, 0.5) + 2 * (1 - 0) * XMGbis * XNH3bis * Math.pow(AMG * ANH3, 0.5);
    grAsuite = Math.pow(XCH4bis, 2) * ACH4 + Math.pow(XNH3bis, 2) * ANH3 + 2 * (1 - 0) * XCH4bis * XCObis * Math.pow(ACO * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XH2Obis * Math.pow(AH2O * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XCO2bis * Math.pow(ACO2 * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XH2bis * Math.pow(AH2 * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XN2bis * Math.pow(AN2 * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XNH3bis * Math.pow(ANH3 * ACH4, 0.5) + 2 * (1 - 0) * XH2Obis * XNH3bis * Math.pow(ANH3 * AH2O, 0.5) + 2 * (1 - 0) * XCO2bis * XNH3bis * Math.pow(ANH3 * ACO2, 0.5) + 2 * (1 - 0) * XCObis * XNH3bis * Math.pow(ANH3 * ACO, 0.5) + 2 * (1 - 0) * XH2bis * XNH3bis * Math.pow(ANH3 * AH2, 0.5) + 2 * (1 - 0) * XN2bis * XNH3bis * Math.pow(ANH3 * AN2, 0.5) + grAbis;
    A = Math.pow(XH2Obis, 2) * AH2O + Math.pow(XCO2bis, 2) * ACO2 + 2 * (1 - 0) * XH2Obis * XCO2bis * Math.pow(AH2O * ACO2, 0.5) + Math.pow(XH2bis, 2) * AH2 + 2 * (1 - 0) * XH2Obis * XH2bis * Math.pow(AH2O * AH2, 0.5) + Math.pow(XN2bis, 2) * AN2 + 2 * (1 - 0) * XH2Obis * XN2bis * Math.pow(AH2O * AN2, 0.5) + 2 * (1 - 0) * XCO2bis * XH2bis * Math.pow(ACO2 * AH2, 0.5) + 2 * (1 - 0) * XCO2bis * XN2bis * Math.pow(ACO2 * AN2, 0.5) + 2 * (1 - 0) * XN2bis * XH2bis * Math.pow(AN2 * AH2, 0.5) + Math.pow(XCObis, 2) * ACO + 2 * (1 - 0) * XH2Obis * XCObis * Math.pow(AH2O * ACO, 0.5) + 2 * (1 - 0) * XCObis * XH2bis * Math.pow(ACO * AH2, 0.5) + 2 * (1 - 0) * XCObis * XN2bis * Math.pow(ACO * AN2, 0.5) + 2 * (1 - 0) * XCObis * XCO2bis * Math.pow(ACO * ACO2, 0.5) + grAsuite;
    B = XH2Obis * BH2O + XH2bis * BH2 + XCO2bis * BCO2 + XN2bis * BN2 + XCObis * BCO + XNH3bis * BNH3 + XCH4bis * BCH4 + XMGbis * BMG;
    ////////////////////////////
    //calcul de d�riv�s de XiXj(1-Kji)racine(aialphai*akalphak)
    grAbis = (XMGbis) * Math.pow(AH2 * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(AH2 * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * AH2, 0.5) + grAbis;
    ArH2 = ((XH2bis)) * AH2 + (1 - 0) * (XH2Obis) * Math.pow(AH2O * AH2, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * AH2, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * AH2, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * AH2, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(ACO2 * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(ACO2 * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * ACO2, 0.5) + grAbis;
    ArCO2 = ((XCO2bis)) * ACO2 + (1 - 0) * (XH2Obis) * Math.pow(AH2O * ACO2, 0.5) + (1 - 0) * (XH2bis) * Math.pow(ACO2 * AH2, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * ACO2, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * ACO2, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(AN2 * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(AN2 * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * AN2, 0.5) + grAbis;
    ArN2 = ((XN2bis)) * AN2 + (1 - 0) * (XH2Obis) * Math.pow(AH2O * AN2, 0.5) + (1 - 0) * (XH2bis) * Math.pow(AN2 * AH2, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(AN2 * ACO2, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * AN2, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(AH2O * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(AH2O * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * AH2O, 0.5) + grAbis;
    ArH2O = (XH2Obis) * AH2O + (1 - 0) * (XH2bis) * Math.pow(AH2O * AH2, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * AH2O, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * AH2O, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * AH2O, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(ACO * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(ACO * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * ACO, 0.5) + grAbis;
    ArCO = (XCObis) * ACO + (1 - 0) * (XH2Obis) * Math.pow(AH2O * ACO, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * ACO, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * ACO, 0.5) + (1 - 0) * (XH2bis) * Math.pow(ACO * AH2, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(ACH4 * AMG, 0.5);
    grAsuite = (1 - 0) * (XH2bis) * Math.pow(AH2 * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * ACH4, 0.5) + grAbis;
    ArCH4 = ((XCH4bis)) * ACH4 + (1 - 0) * (XH2Obis) * Math.pow(AH2O * ACH4, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * ACH4, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * ACH4, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * ACH4, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(ANH3 * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(ANH3 * ACH4, 0.5) + (1 - 0) * (XH2bis) * Math.pow(ANH3 * AH2, 0.5) + grAbis;
    ArNH3 = ((XNH3bis)) * ANH3 + (1 - 0) * (XH2Obis) * Math.pow(AH2O * ANH3, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * ANH3, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * ANH3, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * ANH3, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XNH3bis) * Math.pow(AMG * ANH3, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(AMG * ACH4, 0.5) + (1 - 0) * (XH2bis) * Math.pow(AMG * AH2, 0.5) + grAbis;
    ArMG = ((XMGbis)) * AMG + (1 - 0) * (XH2Obis) * Math.pow(AH2O * AMG, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * AMG, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * AMG, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * AMG, 0.5) + grAsuite;
    /////////////////////////////
    SB = BH2O + BH2 + BCO2 + BN2 + BCO + BNH3 + BCH4 + BMG;
    DVDXH2 = (-(R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * VN * Math.pow(VN - B, 2)) * SB + (VN - B) * VN * (Math.pow(VN, 2) - Math.pow(B, 2)) * ArH2) / (-R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * (2 * VN + B) * Math.pow(VN - B, 2));
    DVDXH2O = (-(R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * VN * Math.pow(VN - B, 2)) * SB + (VN - B) * VN * (Math.pow(VN, 2) - Math.pow(B, 2)) * ArH2O) / (-R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * (2 * VN + B) * Math.pow(VN - B, 2));
    DVDXCO2 = (-(R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * VN * Math.pow(VN - B, 2)) * SB + (VN - B) * VN * (Math.pow(VN, 2) - Math.pow(B, 2)) * ArCO2) / (-R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * (2 * VN + B) * Math.pow(VN - B, 2));
    DVDXCO = (-(R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * VN * Math.pow(VN - B, 2)) * SB + (VN - B) * VN * (Math.pow(VN, 2) - Math.pow(B, 2)) * ArCO) / (-R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * (2 * VN + B) * Math.pow(VN - B, 2));
    DVDXN2 = (-(R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * VN * Math.pow(VN - B, 2)) * SB + (VN - B) * VN * (Math.pow(VN, 2) - Math.pow(B, 2)) * ArN2) / (-R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * (2 * VN + B) * Math.pow(VN - B, 2));
    DVDXCH4 = (-(R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * VN * Math.pow(VN - B, 2)) * SB + (VN - B) * VN * (Math.pow(VN, 2) - Math.pow(B, 2)) * ArCH4) / (-R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * (2 * VN + B) * Math.pow(VN - B, 2));
    DVDXNH3 = (-(R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * VN * Math.pow(VN - B, 2)) * SB + (VN - B) * VN * (Math.pow(VN, 2) - Math.pow(B, 2)) * ArNH3) / (-R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * (2 * VN + B) * Math.pow(VN - B, 2));
    DVDXMG = (-(R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * VN * Math.pow(VN - B, 2)) * SB + (VN - B) * VN * (Math.pow(VN, 2) - Math.pow(B, 2)) * ArMG) / (-R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * (2 * VN + B) * Math.pow(VN - B, 2));

    VCO2M = (VN * 1 * (XCO2bis) - 1 * (XCO2bis - 0 * XCO2bis) * 1 / 3 / 8 / 2 * DVDXCO2) * 1000000;
    VCOM = (VN * 1 * (XCObis) - 1 * (XCObis - 0 * XCObis) * 1 / 3 / 8 / 2 * DVDXCO) * 1000000;
    VH2M = (VN * 1 * (XH2bis) - 1 * (XH2bis - 0 * XH2bis) * 1 / 3 / 8 / 2 * DVDXH2) * 1000000;
    VN2M = (VN * 1 * (XN2bis) - 1 * (XN2bis - 0 * XN2bis) * 1 / 3 / 8 / 2 * DVDXN2) * 1000000;
    VCH4M = (VN * 1 * (XCH4bis) - 1 * (XCH4bis - 0 * XCH4bis) * 1 / 3 / 8 / 2 * DVDXCH4) * 1000000;
    VNH3M = (VN * 1 * (XNH3bis) - 1 * (XNH3bis - 0 * XNH3bis) * 1 / 3 / 8 / 2 * DVDXNH3) * 1000000;
    VH2OM = (VN * 1 * (XH2Obis) - 1 * (XH2Obis - 0 * XH2Obis) * 1 / 3 / 8 / 2 * DVDXH2O) * 1000000;
    VMGM = (VN * 1 * (XMGbis) - 1 * (XMGbis - 0 * XMGbis) * 1 / 3 / 8 / 2 * DVDXMG) * 1000000;
    $("#3-9").text(Number((VCO2M).toFixed(5)).toString());
    $("#4-9").text(Number((VCOM).toFixed(5)).toString());
    $("#1-9").text(Number((VH2M).toFixed(5)).toString());
    $("#7-9").text(Number((VN2M).toFixed(5)).toString());
    $("#5-9").text(Number((VCH4M).toFixed(5)).toString());
    $("#8-9").text(Number((VNH3M).toFixed(5)).toString());
    $("#2-9").text(Number((VH2OM).toFixed(5)).toString());
    $("#6-9").text(Number((VMGM).toFixed(5)).toString());
    //calcul de somme de Xk(1-Kki)racine(aialphai*akalphak)  (avant le 2 dans le calcul du coefficient de fugacit� de l'esp�ce k)
    grAbis = (XMGbis) * Math.pow(AH2 * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(AH2 * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * AH2, 0.5) + grAbis;
    ArH2 = ((XH2bis)) * AH2 + (1 - 0) * (XH2Obis) * Math.pow(AH2O * AH2, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * AH2, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * AH2, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * AH2, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(ACO2 * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(ACO2 * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * ACO2, 0.5) + grAbis;
    ArCO2 = ((XCO2bis)) * ACO2 + (1 - 0) * (XH2Obis) * Math.pow(AH2O * ACO2, 0.5) + (1 - 0) * (XH2bis) * Math.pow(ACO2 * AH2, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * ACO2, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * ACO2, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(AN2 * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(AN2 * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * AN2, 0.5) + grAbis;
    ArN2 = ((XN2bis)) * AN2 + (1 - 0) * (XH2Obis) * Math.pow(AH2O * AN2, 0.5) + (1 - 0) * (XH2bis) * Math.pow(AN2 * AH2, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(AN2 * ACO2, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * AN2, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(AH2O * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(AH2O * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * AH2O, 0.5) + grAbis;
    ArH2O = (XH2Obis) * AH2O + (1 - 0) * (XH2bis) * Math.pow(AH2O * AH2, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * AH2O, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * AH2O, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * AH2O, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(ACO * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(ACO * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * ACO, 0.5) + grAbis;
    ArCO = (XCObis) * ACO + (1 - 0) * (XH2Obis) * Math.pow(AH2O * ACO, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * ACO, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * ACO, 0.5) + (1 - 0) * (XH2bis) * Math.pow(ACO * AH2, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(ACH4 * AMG, 0.5);
    grAsuite = (1 - 0) * (XH2bis) * Math.pow(AH2 * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * ACH4, 0.5) + grAbis;
    ArCH4 = ((XCH4bis)) * ACH4 + (1 - 0) * (XH2Obis) * Math.pow(AH2O * ACH4, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * ACH4, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * ACH4, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * ACH4, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(ANH3 * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(ANH3 * ACH4, 0.5) + (1 - 0) * (XH2bis) * Math.pow(ANH3 * AH2, 0.5) + grAbis;
    ArNH3 = ((XNH3bis)) * ANH3 + (1 - 0) * (XH2Obis) * Math.pow(AH2O * ANH3, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * ANH3, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * ANH3, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * ANH3, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XNH3bis) * Math.pow(AMG * ANH3, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(AMG * ACH4, 0.5) + (1 - 0) * (XH2bis) * Math.pow(AMG * AH2, 0.5) + grAbis;
    ArMG = ((XMGbis)) * AMG + (1 - 0) * (XH2Obis) * Math.pow(AH2O * AMG, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * AMG, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * AMG, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * AMG, 0.5) + grAsuite;
    //calculs des param�tres de repulsion et d'attraction de l'equation d'etat, Ai et Bi qui interviennent dans le calcul du coefficient de fugacit�
    AH2 = 0.42748 * alphaH2 * Math.pow(TcH2, 2) / (PcH2 * 100000) * P / Math.pow(T, 2); //avec Tr=T/Tc et Pr=P/Pc
    BH2 = 0.08664 * TcH2 / (PcH2 * 100000) * P / (T);
    ACO2 = 0.42748 * alphaCO2 * Math.pow(TcCO2, 2) / (PcCO2 * 100000) * P / Math.pow(T, 2);
    BCO2 = 0.08664 * TcCO2 / (PcCO2 * 100000) * P / (T);
    AN2 = 0.42748 * alphaN2 * Math.pow(TcN2, 2) / (PcN2 * 100000) * P / Math.pow(T, 2);
    BN2 = 0.08664 * TcN2 / (PcN2 * 100000) * P / (T);
    AH2O = 0.42748 * alphaH2O * Math.pow(TcH2O, 2) / (PcH2O * 100000) * P / Math.pow(T, 2);
    BH2O = 0.08664 * TcH2O / (PcH2O * 100000) * P / (T);
    ACO = 0.42748 * alphaCO * Math.pow(TcCO, 2) / (PcCO * 100000) * P / Math.pow(T, 2);
    BCO = 0.08664 * TcCO / (PcCO * 100000) * P / (T);
    ACH4 = 0.42748 * alphaCH4 * Math.pow(TcCH4, 2) / (PcCH4 * 100000) * P / Math.pow(T, 2);
    BCH4 = 0.08664 * TcCH4 / (PcCH4 * 100000) * P / (T);
    ANH3 = 0.42748 * alphaNH3 * Math.pow(TcNH3, 2) / (PcNH3 * 100000) * P / Math.pow(T, 2);
    BNH3 = 0.08664 * TcNH3 / (PcNH3 * 100000) * P / (T);
    AMG = 0.42748 * alphaMG * Math.pow(TcMG, 2) / (PcMG * 100000) * P / Math.pow(T, 2);
    BMG = 0.08664 * TcMG / (PcMG * 100000) * P / (T);
    ///////////////////////////////////
    //calculs des param�tres de repulsion et d'attraction de l'equation d'etat, A et B qui interviennent dans le calcul du coefficient de fugacit�
    grAbis = Math.pow(XMGbis, 2) * AMG + 2 * (1 - 0) * XMGbis * XH2bis * Math.pow(AMG * AH2, 0.5) + 2 * (1 - 0) * XMGbis * XCO2bis * Math.pow(AMG * ACO2, 0.5) + 2 * (1 - 0) * XMGbis * XN2bis * Math.pow(AMG * AN2, 0.5) + 2 * (1 - 0) * XMGbis * XH2Obis * Math.pow(AMG * AH2O, 0.5) + 2 * (1 - 0) * XMGbis * XCObis * Math.pow(AMG * ACO2, 0.5) + 2 * (1 - 0) * XMGbis * XCH4bis * Math.pow(AMG * ACH4, 0.5) + 2 * (1 - 0) * XMGbis * XNH3bis * Math.pow(AMG * ANH3, 0.5);
    grAsuite = Math.pow(XCH4bis, 2) * ACH4 + Math.pow(XNH3bis, 2) * ANH3 + 2 * (1 - 0) * XCH4bis * XCObis * Math.pow(ACO * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XH2Obis * Math.pow(AH2O * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XCO2bis * Math.pow(ACO2 * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XH2bis * Math.pow(AH2 * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XN2bis * Math.pow(AN2 * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XNH3bis * Math.pow(ANH3 * ACH4, 0.5) + 2 * (1 - 0) * XH2Obis * XNH3bis * Math.pow(ANH3 * AH2O, 0.5) + 2 * (1 - 0) * XCO2bis * XNH3bis * Math.pow(ANH3 * ACO2, 0.5) + 2 * (1 - 0) * XCObis * XNH3bis * Math.pow(ANH3 * ACO, 0.5) + 2 * (1 - 0) * XH2bis * XNH3bis * Math.pow(ANH3 * AH2, 0.5) + 2 * (1 - 0) * XN2bis * XNH3bis * Math.pow(ANH3 * AN2, 0.5) + grAbis;
    GRA = Math.pow(XH2Obis, 2) * AH2O + Math.pow(XCO2bis, 2) * ACO2 + 2 * (1 - 0) * XH2Obis * XCO2bis * Math.pow(AH2O * ACO2, 0.5) + Math.pow(XH2bis, 2) * AH2 + 2 * (1 - 0) * XH2Obis * XH2bis * Math.pow(AH2O * AH2, 0.5) + Math.pow(XN2bis, 2) * AN2 + 2 * (1 - 0) * XH2Obis * XN2bis * Math.pow(AH2O * AN2, 0.5) + 2 * (1 - 0) * XCO2bis * XH2bis * Math.pow(ACO2 * AH2, 0.5) + 2 * (1 - 0) * XCO2bis * XN2bis * Math.pow(ACO2 * AN2, 0.5) + 2 * (1 - 0) * XN2bis * XH2bis * Math.pow(AN2 * AH2, 0.5) + Math.pow(XCObis, 2) * ACO + 2 * (1 - 0) * XH2Obis * XCObis * Math.pow(AH2O * ACO, 0.5) + 2 * (1 - 0) * XCObis * XH2bis * Math.pow(ACO * AH2, 0.5) + 2 * (1 - 0) * XCObis * XN2bis * Math.pow(ACO * AN2, 0.5) + 2 * (1 - 0) * XCObis * XCO2bis * Math.pow(ACO * ACO2, 0.5) + grAsuite;
    GRB = XH2Obis * BH2O + XH2bis * BH2 + XCO2bis * BCO2 + XN2bis * BN2 + XCObis * BCO + XNH3bis * BNH3 + XCH4bis * BCH4 + XMGbis * BMG;
    //calculs des coefficients de fugacit�s   
    //logFIH2Osoave = ZN - 1 - Log(ZN - GRB) - GRA / GRB * Log((ZN + GRB) / ZN)
    //FIH2Oincsoave = 10 ^ (logFIH2Osoave / 2.303)
    //Worksheets(1).Range("C31").Value = FIH2Oincsoave
    logFIH2O = (BH2O / GRB * (ZN - 1) - Math.log(ZN - GRB) + GRA / GRB * (BH2O / GRB - 2 / A * ArH2O) * Math.log(1 + GRB / ZN));
    FIH2Oinc = Math.exp(logFIH2O);
    FUH2Oinc = FIH2Oinc * P * XH2Obis;
    FUH2Oi = FUH2Oinc * 0.00001;
    logFIH2 = (BH2 / GRB * (ZN - 1) - Math.log(ZN - GRB) + GRA / GRB * (BH2 / GRB - 2 / A * ArH2) * Math.log(1 + GRB / ZN));
    FIH2inc = Math.exp(logFIH2);
    FUH2inc = FIH2inc * P * XH2bis;
    FUH2i = FUH2inc * 0.00001;
    logFICO = (BCO / GRB * (ZN - 1) - Math.log(ZN - GRB) + GRA / GRB * (BCO / GRB - 2 / A * ArCO) * Math.log(1 + GRB / ZN));
    FICOinc = Math.exp(logFICO);
    FUCOinc = FICOinc * P * XCObis;
    FUCOi = FUCOinc * 0.00001;
    logFICO2 = (BCO2 / GRB * (ZN - 1) - Math.log(ZN - GRB) + GRA / GRB * (BCO2 / GRB - 2 / A * ArCO2) * Math.log(1 + GRB / ZN));
    FICO2inc = Math.exp(logFICO2);
    FUCO2inc = FICO2inc * P * XCO2bis;
    FUCO2i = FUCO2inc * 0.00001; //la m�me chose mais en bar
    logFIN2 = (BN2 / GRB * (ZN - 1) - Math.log(ZN - GRB) + GRA / GRB * (BN2 / GRB - 2 / A * ArN2) * Math.log(1 + GRB / ZN));
    FIN2inc = Math.exp(logFIN2);
    FUN2inc = FIN2inc * P * XN2bis;
    FUN2i = FUN2inc * 0.00001;
    logFICH4 = (BCH4 / GRB * (ZN - 1) - Math.log(ZN - GRB) + GRA / GRB * (BCH4 / GRB - 2 / A * ArCH4) * Math.log(1 + GRB / ZN));
    FICH4inc = Math.exp(logFICH4);
    FUCH4inc = FICH4inc * P * XCH4bis;
    FUCH4i = FUCH4inc * 0.00001;
    logFINH3 = (BNH3 / GRB * (ZN - 1) - Math.log(ZN - GRB) + GRA / GRB * (BNH3 / GRB - 2 / A * ArNH3) * Math.log(1 + GRB / ZN));
    FINH3inc = Math.exp(logFINH3);
    FUNH3inc = FINH3inc * P * XNH3bis;
    FUNH3i = FUNH3inc * 0.00001;
    logFIMG = (BMG / GRB * (ZN - 1) - Math.log(ZN - GRB) + GRA / GRB * (BMG / GRB - 2 / A * ArMG) * Math.log(1 + GRB / ZN));
    FIMGinc = Math.exp(logFIMG);
    FUMGinc = FIMGinc * P * XMGbis;
    FUMGi = FUMGinc * 0.00001;
    ///////////////////////////
    $("#2-10").text(Number((FUH2Oi).toFixed(5)).toString());
    $("#3-10").text(Number((FUCO2i).toFixed(5)).toString());
    $("#4-10").text(Number((FUCOi).toFixed(5)).toString());
    $("#1-10").text(Number((FUH2i).toFixed(5)).toString());
    $("#7-10").text(Number((FUN2i).toFixed(5)).toString());
    $("#5-10").text(Number((FUCH4i).toFixed(5)).toString());
    $("#8-10").text(Number((FUNH3i).toFixed(5)).toString());
    $("#6-10").text(Number((FUMGi).toFixed(5)).toString());
    /////////////////////////
    M = MH2 * xH2 + MH2O * xH2O + MCO2 * xCO2 + MNH3 * xNH3 + MN2 * xN2 + MCO * xCO + MO2 * xO2 + MH2S * xH2S;
    $("#2-1").text(Number((M).toFixed(5)).toString());
    Vlgg = VMGM + VH2OM + VNH3M + VCH4M + VN2M + VH2M + VCOM + VCO2M;
    $("#3-1").text(Number((Vlgg).toFixed(5)).toString());
    Vlglg = Vlgg / 2;
    $("#4-1").text(Number((Vlglg).toFixed(5)).toString());
    Vgg = Vlgg - M;
    $("#5-1").text(Number((Vgg).toFixed(5)).toString());
    xl = M / Vlgg;
    $("#6-1").text(Number((xl).toFixed(5)).toString());
    $("#7-1").text((Number((M / Vlglg)).toFixed(5)).toString());
    volume = true;
}

function Fugacity() {
    $("#sub-output").css('display','none');
    XH2Obis = 0;
    XCO2bis = 0;
    XCObis = 0;
    XH2bis = 0;
    XN2bis = 0;
    XCH4bis = 0;
    XNH3bis = 1;
    XMGbis = 0;
    Pb = parseFloat($("#0-1").text());
    P = Pb * 100000; //passage de la pression de bar en Pa
    T = parseFloat($("#1-1").text()) + 273.15;
    TcH2O = parseFloat($("#2-4").text()); //temp�rature critique de H2O dans la cellule J8
    PcH2O = parseFloat($("#2-3").text()); //pression critique de H2O
    TcCO2 = parseFloat($("#3-4").text());
    PcCO2 = parseFloat($("#3-3").text());
    TcCO = parseFloat($("#4-4").text());
    PcCO = parseFloat($("#4-3").text());
    TcH2 = parseFloat($("#1-4").text());
    PcH2 = parseFloat($("#1-3").text());
    TcN2 = parseFloat($("#7-4").text());
    PcN2 = parseFloat($("#7-3").text());
    TcCH4 = parseFloat($("#5-4").text());
    PcCH4 = parseFloat($("#5-3").text());
    TcNH3 = parseFloat($("#8-4").text());
    PcNH3 = parseFloat($("#8-3").text());
    TcMG = parseFloat($("#6-4").text());
    PcMG = parseFloat($("#6-3").text());
    R = 8.314472; //constante des gaz parfaits
    ///////////////////////////////////////////////
    //calcul des facteurs acentriques
    wH2O = parseFloat($("#2-5").text());
    nH2O = 0.48508 + 1.55171 * wH2O - 0.15613 * Math.pow(wH2O, 2);
    alphaH2O = Math.pow(1 + nH2O * (1 - Math.pow(T / TcH2O, 0.5)), 2);
    wCO2 = parseFloat($("#3-5").text());
    nCO2 = 0.48508 + 1.55171 * wCO2 - 0.15613 * Math.pow(wCO2, 2);
    alphaCO2 = Math.pow(1 + nCO2 * (1 - Math.pow(T / TcCO2, 0.5)), 2);
    wCO = parseFloat($("#4-5").text());
    nCO = 0.48508 + 1.55171 * wCO - 0.15613 * Math.pow(wCO, 2);
    alphaCO = Math.pow(1 + nCO * (1 - Math.pow(T / TcCO, 0.5)), 2);
    wH2 = parseFloat($("#1-5").text());
    nH2 = 0.48508 + 1.55171 * wH2 - 0.15613 * Math.pow(wH2, 2);
    alphaH2 = Math.pow(1 + nH2 * (1 - Math.pow(T / TcH2, 0.5)), 2);
    wN2 = parseFloat($("#7-5").text());
    nN2 = 0.48508 + 1.55171 * wN2 - 0.15613 * Math.pow(wN2, 2);
    alphaN2 = Math.pow(1 + nN2 * (1 - Math.pow(T / TcN2, 0.5)), 2);
    wCH4 = parseFloat($("#5-5").text());
    nCH4 = 0.48508 + 1.55171 * wCH4 - 0.15613 * Math.pow(wCH4, 2);
    alphaCH4 = Math.pow(1 + nCH4 * (1 - Math.pow(T / TcCH4, 0.5)), 2);
    wNH3 = parseFloat($("#8-5").text());
    nNH3 = 0.48508 + 1.55171 * wNH3 - 0.15613 * Math.pow(wNH3, 2);
    alphaNH3 = Math.pow(1 + nNH3 * (1 - Math.pow(T / TcNH3, 0.5)), 2);
    wMG = parseFloat($("#6-5").text());
    nMG = 0.48508 + 1.55171 * wMG - 0.15613 * Math.pow(wMG, 2);
    alphaMG = Math.pow(1 + nMG * (1 - Math.pow(T / TcMG, 0.5)), 2);
    /////////////////////////
    AH2 = 0.42748 * alphaH2 * Math.pow(TcH2, 2) / (PcH2 * 100000) * P / Math.pow(T, 2); //avec Tr=T/Tc et Pr=P/Pc
    BH2 = 0.08664 * TcH2 / (PcH2 * 100000) * P / (T);
    ACO2 = 0.42748 * alphaCO2 * Math.pow(TcCO2, 2) / (PcCO2 * 100000) * P / Math.pow(T, 2);
    BCO2 = 0.08664 * TcCO2 / (PcCO2 * 100000) * P / (T);
    AN2 = 0.42748 * alphaN2 * Math.pow(TcN2, 2) / (PcN2 * 100000) * P / Math.pow(T, 2);
    BN2 = 0.08664 * TcN2 / (PcN2 * 100000) * P / (T);
    AH2O = 0.42748 * alphaH2O * Math.pow(TcH2O, 2) / (PcH2O * 100000) * P / Math.pow(T, 2);
    BH2O = 0.08664 * TcH2O / (PcH2O * 100000) * P / (T);
    ACO = 0.42748 * alphaCO * Math.pow(TcCO, 2) / (PcCO * 100000) * P / Math.pow(T, 2);
    BCO = 0.08664 * TcCO / (PcCO * 100000) * P / (T);
    ACH4 = 0.42748 * alphaCH4 * Math.pow(TcCH4, 2) / (PcCH4 * 100000) * P / Math.pow(T, 2);
    BCH4 = 0.08664 * TcCH4 / (PcCH4 * 100000) * P / (T);
    ANH3 = 0.42748 * alphaNH3 * Math.pow(TcNH3, 2) / (PcNH3 * 100000) * P / Math.pow(T, 2);
    BNH3 = 0.08664 * TcNH3 / (PcNH3 * 100000) * P / (T);
    AMG = 0.42748 * alphaMG * Math.pow(TcMG, 2) / (PcMG * 100000) * P / Math.pow(T, 2);
    BMG = 0.08664 * TcMG / (PcMG * 100000) * P / (T);
    ///////////////////////////////////
    grAbis = Math.pow(XMGbis, 2) * AMG + 2 * (1 - 0) * XMGbis * XH2bis * Math.pow(AMG * AH2, 0.5) + 2 * (1 - 0) * XMGbis * XCO2bis * Math.pow(AMG * ACO2, 0.5) + 2 * (1 - 0) * XMGbis * XN2bis * Math.pow(AMG * AN2, 0.5) + 2 * (1 - 0) * XMGbis * XH2Obis * Math.pow(AMG * AH2O, 0.5) + 2 * (1 - 0) * XMGbis * XCObis * Math.pow(AMG * ACO2, 0.5) + 2 * (1 - 0) * XMGbis * XCH4bis * Math.pow(AMG * ACH4, 0.5) + 2 * (1 - 0) * XMGbis * XNH3bis * Math.pow(AMG * ANH3, 0.5);
    grAsuite = Math.pow(XCH4bis, 2) * ACH4 + Math.pow(XNH3bis, 2) * ANH3 + 2 * (1 - 0) * XCH4bis * XCObis * Math.pow(ACO * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XH2Obis * Math.pow(AH2O * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XCO2bis * Math.pow(ACO2 * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XH2bis * Math.pow(AH2 * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XN2bis * Math.pow(AN2 * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XNH3bis * Math.pow(ANH3 * ACH4, 0.5) + 2 * (1 - 0) * XH2Obis * XNH3bis * Math.pow(ANH3 * AH2O, 0.5) + 2 * (1 - 0) * XCO2bis * XNH3bis * Math.pow(ANH3 * ACO2, 0.5) + 2 * (1 - 0) * XCObis * XNH3bis * Math.pow(ANH3 * ACO, 0.5) + 2 * (1 - 0) * XH2bis * XNH3bis * Math.pow(ANH3 * AH2, 0.5) + 2 * (1 - 0) * XN2bis * XNH3bis * Math.pow(ANH3 * AN2, 0.5) + grAbis;
    GRA = Math.pow(XH2Obis, 2) * AH2O + Math.pow(XCO2bis, 2) * ACO2 + 2 * (1 - 0) * XH2Obis * XCO2bis * Math.pow(AH2O * ACO2, 0.5) + Math.pow(XH2bis, 2) * AH2 + 2 * (1 - 0) * XH2Obis * XH2bis * Math.pow(AH2O * AH2, 0.5) + Math.pow(XN2bis, 2) * AN2 + 2 * (1 - 0) * XH2Obis * XN2bis * Math.pow(AH2O * AN2, 0.5) + 2 * (1 - 0) * XCO2bis * XH2bis * Math.pow(ACO2 * AH2, 0.5) + 2 * (1 - 0) * XCO2bis * XN2bis * Math.pow(ACO2 * AN2, 0.5) + 2 * (1 - 0) * XN2bis * XH2bis * Math.pow(AN2 * AH2, 0.5) + Math.pow(XCObis, 2) * ACO + 2 * (1 - 0) * XH2Obis * XCObis * Math.pow(AH2O * ACO, 0.5) + 2 * (1 - 0) * XCObis * XH2bis * Math.pow(ACO * AH2, 0.5) + 2 * (1 - 0) * XCObis * XN2bis * Math.pow(ACO * AN2, 0.5) + 2 * (1 - 0) * XCObis * XCO2bis * Math.pow(ACO * ACO2, 0.5) + grAsuite;
    GRB = XH2Obis * BH2O + XH2bis * BH2 + XCO2bis * BCO2 + XN2bis * BN2 + XCObis * BCO + XNH3bis * BNH3 + XCH4bis * BCH4 + XMGbis * BMG;
    //////////////////////////////////
    test = 10;
    ZN = 1000.01; //initialisation NR � changer si plantage
    while (test > 0.000000001)
    {
        FZ = Math.pow(ZN, 3) - Math.pow(ZN, 2) + (GRA - Math.pow(GRB, 2) - GRB) * ZN - GRA * GRB;
        FpZ = 3 * Math.pow(ZN, 2) - 2 * ZN + (GRA - Math.pow(GRB, 2) - GRB);
        ZN1 = ZN - FZ / FpZ;
        test = Math.abs(ZN1 - ZN);
        ZN = ZN1;
    }
    VN = (ZN * R * T / P);
    V = VN * 1000000;
    /////////////////////////////////////////
    //calculs des param�tres de repulsion et d'attraction de l'equation d'etat, aialphai et bialphai qui interviennent dans le calcul des coefficients de fugacit�
    AH2 = 0.42748 * alphaH2 * (R * Math.pow(TcH2, 2)) / (PcH2 * 100000);
    BH2 = 0.08664 * R * TcH2 / (PcH2 * 100000);
    BiH2 = BH2; //stockage de bialphai
    ACO2 = 0.42748 * alphaCO2 * (R * Math.pow(TcCO2, 2)) / (PcCO2 * 100000);
    BCO2 = 0.08664 * R * TcCO2 / (PcCO2 * 100000);
    BiCO2 = BCO2;
    AN2 = 0.42748 * alphaN2 * (R * Math.pow(TcN2, 2)) / (PcN2 * 100000);
    BN2 = 0.08664 * R * TcN2 / (PcN2 * 100000);
    BiN2 = BN2;
    AH2O = 0.42748 * alphaH2O * (R * Math.pow(TcH2O, 2)) / (PcH2O * 100000);
    BH2O = 0.08664 * R * TcH2O / (PcH2O * 100000);
    BiH2O = BH2O;
    ACO = 0.42748 * alphaCO * (R * Math.pow(TcCO, 2)) / (PcCO * 100000);
    BCO = 0.08664 * R * TcCO / (PcCO * 100000);
    BiCO = BCO;
    ACH4 = 0.42748 * alphaCH4 * (R * Math.pow(TcCH4, 2)) / (PcCH4 * 100000);
    BCH4 = 0.08664 * R * TcCH4 / (PcCH4 * 100000);
    BiCH4 = BCH4;
    ANH3 = 0.42748 * alphaNH3 * (R * Math.pow(TcNH3, 2)) / (PcNH3 * 100000);
    BNH3 = 0.08664 * R * TcNH3 / (PcNH3 * 100000);
    BiNH3 = BNH3;
    AMG = 0.42748 * alphaMG * (R * Math.pow(TcMG, 2)) / (PcMG * 100000);
    BMG = 0.08664 * R * TcMG / (PcMG * 100000);
    BiMG = BMG;
    ////////////////////////////////
    //calculs des param�tres de repulsion et d'attraction de l'equation d'etat, a et b qui n'interviennent pas dans le calcul du coefficient de fugacit�
    grAbis = Math.pow(XMGbis, 2) * AMG + 2 * (1 - 0) * XMGbis * XH2bis * Math.pow(AMG * AH2, 0.5) + 2 * (1 - 0) * XMGbis * XCO2bis * Math.pow(AMG * ACO2, 0.5) + 2 * (1 - 0) * XMGbis * XN2bis * Math.pow(AMG * AN2, 0.5) + 2 * (1 - 0) * XMGbis * XH2Obis * Math.pow(AMG * AH2O, 0.5) + 2 * (1 - 0) * XMGbis * XCObis * Math.pow(AMG * ACO2, 0.5) + 2 * (1 - 0) * XMGbis * XCH4bis * Math.pow(AMG * ACH4, 0.5) + 2 * (1 - 0) * XMGbis * XNH3bis * Math.pow(AMG * ANH3, 0.5);
    grAsuite = Math.pow(XCH4bis, 2) * ACH4 + Math.pow(XNH3bis, 2) * ANH3 + 2 * (1 - 0) * XCH4bis * XCObis * Math.pow(ACO * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XH2Obis * Math.pow(AH2O * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XCO2bis * Math.pow(ACO2 * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XH2bis * Math.pow(AH2 * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XN2bis * Math.pow(AN2 * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XNH3bis * Math.pow(ANH3 * ACH4, 0.5) + 2 * (1 - 0) * XH2Obis * XNH3bis * Math.pow(ANH3 * AH2O, 0.5) + 2 * (1 - 0) * XCO2bis * XNH3bis * Math.pow(ANH3 * ACO2, 0.5) + 2 * (1 - 0) * XCObis * XNH3bis * Math.pow(ANH3 * ACO, 0.5) + 2 * (1 - 0) * XH2bis * XNH3bis * Math.pow(ANH3 * AH2, 0.5) + 2 * (1 - 0) * XN2bis * XNH3bis * Math.pow(ANH3 * AN2, 0.5) + grAbis;
    A = Math.pow(XH2Obis, 2) * AH2O + Math.pow(XCO2bis, 2) * ACO2 + 2 * (1 - 0) * XH2Obis * XCO2bis * Math.pow(AH2O * ACO2, 0.5) + Math.pow(XH2bis, 2) * AH2 + 2 * (1 - 0) * XH2Obis * XH2bis * Math.pow(AH2O * AH2, 0.5) + Math.pow(XN2bis, 2) * AN2 + 2 * (1 - 0) * XH2Obis * XN2bis * Math.pow(AH2O * AN2, 0.5) + 2 * (1 - 0) * XCO2bis * XH2bis * Math.pow(ACO2 * AH2, 0.5) + 2 * (1 - 0) * XCO2bis * XN2bis * Math.pow(ACO2 * AN2, 0.5) + 2 * (1 - 0) * XN2bis * XH2bis * Math.pow(AN2 * AH2, 0.5) + Math.pow(XCObis, 2) * ACO + 2 * (1 - 0) * XH2Obis * XCObis * Math.pow(AH2O * ACO, 0.5) + 2 * (1 - 0) * XCObis * XH2bis * Math.pow(ACO * AH2, 0.5) + 2 * (1 - 0) * XCObis * XN2bis * Math.pow(ACO * AN2, 0.5) + 2 * (1 - 0) * XCObis * XCO2bis * Math.pow(ACO * ACO2, 0.5) + grAsuite;
    B = XH2Obis * BH2O + XH2bis * BH2 + XCO2bis * BCO2 + XN2bis * BN2 + XCObis * BCO + XNH3bis * BNH3 + XCH4bis * BCH4 + XMGbis * BMG;
    ////////////////////////////
    //calcul de d�riv�s de XiXj(1-Kji)racine(aialphai*akalphak)
    grAbis = (XMGbis) * Math.pow(AH2 * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(AH2 * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * AH2, 0.5) + grAbis;
    ArH2 = ((XH2bis)) * AH2 + (1 - 0) * (XH2Obis) * Math.pow(AH2O * AH2, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * AH2, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * AH2, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * AH2, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(ACO2 * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(ACO2 * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * ACO2, 0.5) + grAbis;
    ArCO2 = ((XCO2bis)) * ACO2 + (1 - 0) * (XH2Obis) * Math.pow(AH2O * ACO2, 0.5) + (1 - 0) * (XH2bis) * Math.pow(ACO2 * AH2, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * ACO2, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * ACO2, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(AN2 * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(AN2 * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * AN2, 0.5) + grAbis;
    ArN2 = ((XN2bis)) * AN2 + (1 - 0) * (XH2Obis) * Math.pow(AH2O * AN2, 0.5) + (1 - 0) * (XH2bis) * Math.pow(AN2 * AH2, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(AN2 * ACO2, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * AN2, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(AH2O * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(AH2O * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * AH2O, 0.5) + grAbis;
    ArH2O = (XH2Obis) * AH2O + (1 - 0) * (XH2bis) * Math.pow(AH2O * AH2, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * AH2O, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * AH2O, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * AH2O, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(ACO * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(ACO * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * ACO, 0.5) + grAbis;
    ArCO = (XCObis) * ACO + (1 - 0) * (XH2Obis) * Math.pow(AH2O * ACO, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * ACO, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * ACO, 0.5) + (1 - 0) * (XH2bis) * Math.pow(ACO * AH2, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(ACH4 * AMG, 0.5);
    grAsuite = (1 - 0) * (XH2bis) * Math.pow(AH2 * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * ACH4, 0.5) + grAbis;
    ArCH4 = ((XCH4bis)) * ACH4 + (1 - 0) * (XH2Obis) * Math.pow(AH2O * ACH4, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * ACH4, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * ACH4, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * ACH4, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(ANH3 * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(ANH3 * ACH4, 0.5) + (1 - 0) * (XH2bis) * Math.pow(ANH3 * AH2, 0.5) + grAbis;
    ArNH3 = ((XNH3bis)) * ANH3 + (1 - 0) * (XH2Obis) * Math.pow(AH2O * ANH3, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * ANH3, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * ANH3, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * ANH3, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XNH3bis) * Math.pow(AMG * ANH3, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(AMG * ACH4, 0.5) + (1 - 0) * (XH2bis) * Math.pow(AMG * AH2, 0.5) + grAbis;
    ArMG = ((XMGbis)) * AMG + (1 - 0) * (XH2Obis) * Math.pow(AH2O * AMG, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * AMG, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * AMG, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * AMG, 0.5) + grAsuite;
    /////////////////////////////
    SB = BH2O + BH2 + BCO2 + BN2 + BCO + BNH3 + BCH4 + BMG;
    DVDXH2 = (-(R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * VN * Math.pow(VN - B, 2)) * SB + (VN - B) * VN * (Math.pow(VN, 2) - Math.pow(B, 2)) * ArH2) / (-R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * (2 * VN + B) * Math.pow(VN - B, 2));
    DVDXH2O = (-(R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * VN * Math.pow(VN - B, 2)) * SB + (VN - B) * VN * (Math.pow(VN, 2) - Math.pow(B, 2)) * ArH2O) / (-R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * (2 * VN + B) * Math.pow(VN - B, 2));
    DVDXCO2 = (-(R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * VN * Math.pow(VN - B, 2)) * SB + (VN - B) * VN * (Math.pow(VN, 2) - Math.pow(B, 2)) * ArCO2) / (-R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * (2 * VN + B) * Math.pow(VN - B, 2));
    DVDXCO = (-(R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * VN * Math.pow(VN - B, 2)) * SB + (VN - B) * VN * (Math.pow(VN, 2) - Math.pow(B, 2)) * ArCO) / (-R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * (2 * VN + B) * Math.pow(VN - B, 2));
    DVDXN2 = (-(R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * VN * Math.pow(VN - B, 2)) * SB + (VN - B) * VN * (Math.pow(VN, 2) - Math.pow(B, 2)) * ArN2) / (-R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * (2 * VN + B) * Math.pow(VN - B, 2));
    DVDXCH4 = (-(R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * VN * Math.pow(VN - B, 2)) * SB + (VN - B) * VN * (Math.pow(VN, 2) - Math.pow(B, 2)) * ArCH4) / (-R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * (2 * VN + B) * Math.pow(VN - B, 2));
    DVDXNH3 = (-(R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * VN * Math.pow(VN - B, 2)) * SB + (VN - B) * VN * (Math.pow(VN, 2) - Math.pow(B, 2)) * ArNH3) / (-R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * (2 * VN + B) * Math.pow(VN - B, 2));
    DVDXMG = (-(R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * VN * Math.pow(VN - B, 2)) * SB + (VN - B) * VN * (Math.pow(VN, 2) - Math.pow(B, 2)) * ArMG) / (-R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * (2 * VN + B) * Math.pow(VN - B, 2));

    VCO2M = (VN * 1 * (XCO2bis) - 1 * (XCO2bis - 0 * XCO2bis) * 1 / 3 / 8 / 2 * DVDXCO2) * 1000000;
    VCOM = (VN * 1 * (XCObis) - 1 * (XCObis - 0 * XCObis) * 1 / 3 / 8 / 2 * DVDXCO) * 1000000;
    VH2M = (VN * 1 * (XH2bis) - 1 * (XH2bis - 0 * XH2bis) * 1 / 3 / 8 / 2 * DVDXH2) * 1000000;
    VN2M = (VN * 1 * (XN2bis) - 1 * (XN2bis - 0 * XN2bis) * 1 / 3 / 8 / 2 * DVDXN2) * 1000000;
    VCH4M = (VN * 1 * (XCH4bis) - 1 * (XCH4bis - 0 * XCH4bis) * 1 / 3 / 8 / 2 * DVDXCH4) * 1000000;
    VNH3M = (VN * 1 * (XNH3bis) - 1 * (XNH3bis - 0 * XNH3bis) * 1 / 3 / 8 / 2 * DVDXNH3) * 1000000;
    VH2OM = (VN * 1 * (XH2Obis) - 1 * (XH2Obis - 0 * XH2Obis) * 1 / 3 / 8 / 2 * DVDXH2O) * 1000000;
    VMGM = (VN * 1 * (XMGbis) - 1 * (XMGbis - 0 * XMGbis) * 1 / 3 / 8 / 2 * DVDXMG) * 1000000;
    //calcul de somme de Xk(1-Kki)racine(aialphai*akalphak)  (avant le 2 dans le calcul du coefficient de fugacit� de l'esp�ce k)
    grAbis = (XMGbis) * Math.pow(AH2 * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(AH2 * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * AH2, 0.5) + grAbis;
    ArH2 = ((XH2bis)) * AH2 + (1 - 0) * (XH2Obis) * Math.pow(AH2O * AH2, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * AH2, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * AH2, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * AH2, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(ACO2 * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(ACO2 * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * ACO2, 0.5) + grAbis;
    ArCO2 = ((XCO2bis)) * ACO2 + (1 - 0) * (XH2Obis) * Math.pow(AH2O * ACO2, 0.5) + (1 - 0) * (XH2bis) * Math.pow(ACO2 * AH2, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * ACO2, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * ACO2, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(AN2 * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(AN2 * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * AN2, 0.5) + grAbis;
    ArN2 = ((XN2bis)) * AN2 + (1 - 0) * (XH2Obis) * Math.pow(AH2O * AN2, 0.5) + (1 - 0) * (XH2bis) * Math.pow(AN2 * AH2, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(AN2 * ACO2, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * AN2, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(AH2O * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(AH2O * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * AH2O, 0.5) + grAbis;
    ArH2O = (XH2Obis) * AH2O + (1 - 0) * (XH2bis) * Math.pow(AH2O * AH2, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * AH2O, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * AH2O, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * AH2O, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(ACO * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(ACO * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * ACO, 0.5) + grAbis;
    ArCO = (XCObis) * ACO + (1 - 0) * (XH2Obis) * Math.pow(AH2O * ACO, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * ACO, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * ACO, 0.5) + (1 - 0) * (XH2bis) * Math.pow(ACO * AH2, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(ACH4 * AMG, 0.5);
    grAsuite = (1 - 0) * (XH2bis) * Math.pow(AH2 * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * ACH4, 0.5) + grAbis;
    ArCH4 = ((XCH4bis)) * ACH4 + (1 - 0) * (XH2Obis) * Math.pow(AH2O * ACH4, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * ACH4, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * ACH4, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * ACH4, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(ANH3 * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(ANH3 * ACH4, 0.5) + (1 - 0) * (XH2bis) * Math.pow(ANH3 * AH2, 0.5) + grAbis;
    ArNH3 = ((XNH3bis)) * ANH3 + (1 - 0) * (XH2Obis) * Math.pow(AH2O * ANH3, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * ANH3, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * ANH3, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * ANH3, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XNH3bis) * Math.pow(AMG * ANH3, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(AMG * ACH4, 0.5) + (1 - 0) * (XH2bis) * Math.pow(AMG * AH2, 0.5) + grAbis;
    ArMG = ((XMGbis)) * AMG + (1 - 0) * (XH2Obis) * Math.pow(AH2O * AMG, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * AMG, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * AMG, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * AMG, 0.5) + grAsuite;
    //calculs des param�tres de repulsion et d'attraction de l'equation d'etat, Ai et Bi qui interviennent dans le calcul du coefficient de fugacit�
    AH2 = 0.42748 * alphaH2 * Math.pow(TcH2, 2) / (PcH2 * 100000) * P / Math.pow(T, 2); //avec Tr=T/Tc et Pr=P/Pc
    BH2 = 0.08664 * TcH2 / (PcH2 * 100000) * P / (T);
    ACO2 = 0.42748 * alphaCO2 * Math.pow(TcCO2, 2) / (PcCO2 * 100000) * P / Math.pow(T, 2);
    BCO2 = 0.08664 * TcCO2 / (PcCO2 * 100000) * P / (T);
    AN2 = 0.42748 * alphaN2 * Math.pow(TcN2, 2) / (PcN2 * 100000) * P / Math.pow(T, 2);
    BN2 = 0.08664 * TcN2 / (PcN2 * 100000) * P / (T);
    AH2O = 0.42748 * alphaH2O * Math.pow(TcH2O, 2) / (PcH2O * 100000) * P / Math.pow(T, 2);
    BH2O = 0.08664 * TcH2O / (PcH2O * 100000) * P / (T);
    ACO = 0.42748 * alphaCO * Math.pow(TcCO, 2) / (PcCO * 100000) * P / Math.pow(T, 2);
    BCO = 0.08664 * TcCO / (PcCO * 100000) * P / (T);
    ACH4 = 0.42748 * alphaCH4 * Math.pow(TcCH4, 2) / (PcCH4 * 100000) * P / Math.pow(T, 2);
    BCH4 = 0.08664 * TcCH4 / (PcCH4 * 100000) * P / (T);
    ANH3 = 0.42748 * alphaNH3 * Math.pow(TcNH3, 2) / (PcNH3 * 100000) * P / Math.pow(T, 2);
    BNH3 = 0.08664 * TcNH3 / (PcNH3 * 100000) * P / (T);
    AMG = 0.42748 * alphaMG * Math.pow(TcMG, 2) / (PcMG * 100000) * P / Math.pow(T, 2);
    BMG = 0.08664 * TcMG / (PcMG * 100000) * P / (T);
    ///////////////////////////////////
    //calculs des param�tres de repulsion et d'attraction de l'equation d'etat, A et B qui interviennent dans le calcul du coefficient de fugacit�
    grAbis = Math.pow(XMGbis, 2) * AMG + 2 * (1 - 0) * XMGbis * XH2bis * Math.pow(AMG * AH2, 0.5) + 2 * (1 - 0) * XMGbis * XCO2bis * Math.pow(AMG * ACO2, 0.5) + 2 * (1 - 0) * XMGbis * XN2bis * Math.pow(AMG * AN2, 0.5) + 2 * (1 - 0) * XMGbis * XH2Obis * Math.pow(AMG * AH2O, 0.5) + 2 * (1 - 0) * XMGbis * XCObis * Math.pow(AMG * ACO2, 0.5) + 2 * (1 - 0) * XMGbis * XCH4bis * Math.pow(AMG * ACH4, 0.5) + 2 * (1 - 0) * XMGbis * XNH3bis * Math.pow(AMG * ANH3, 0.5);
    grAsuite = Math.pow(XCH4bis, 2) * ACH4 + Math.pow(XNH3bis, 2) * ANH3 + 2 * (1 - 0) * XCH4bis * XCObis * Math.pow(ACO * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XH2Obis * Math.pow(AH2O * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XCO2bis * Math.pow(ACO2 * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XH2bis * Math.pow(AH2 * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XN2bis * Math.pow(AN2 * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XNH3bis * Math.pow(ANH3 * ACH4, 0.5) + 2 * (1 - 0) * XH2Obis * XNH3bis * Math.pow(ANH3 * AH2O, 0.5) + 2 * (1 - 0) * XCO2bis * XNH3bis * Math.pow(ANH3 * ACO2, 0.5) + 2 * (1 - 0) * XCObis * XNH3bis * Math.pow(ANH3 * ACO, 0.5) + 2 * (1 - 0) * XH2bis * XNH3bis * Math.pow(ANH3 * AH2, 0.5) + 2 * (1 - 0) * XN2bis * XNH3bis * Math.pow(ANH3 * AN2, 0.5) + grAbis;
    GRA = Math.pow(XH2Obis, 2) * AH2O + Math.pow(XCO2bis, 2) * ACO2 + 2 * (1 - 0) * XH2Obis * XCO2bis * Math.pow(AH2O * ACO2, 0.5) + Math.pow(XH2bis, 2) * AH2 + 2 * (1 - 0) * XH2Obis * XH2bis * Math.pow(AH2O * AH2, 0.5) + Math.pow(XN2bis, 2) * AN2 + 2 * (1 - 0) * XH2Obis * XN2bis * Math.pow(AH2O * AN2, 0.5) + 2 * (1 - 0) * XCO2bis * XH2bis * Math.pow(ACO2 * AH2, 0.5) + 2 * (1 - 0) * XCO2bis * XN2bis * Math.pow(ACO2 * AN2, 0.5) + 2 * (1 - 0) * XN2bis * XH2bis * Math.pow(AN2 * AH2, 0.5) + Math.pow(XCObis, 2) * ACO + 2 * (1 - 0) * XH2Obis * XCObis * Math.pow(AH2O * ACO, 0.5) + 2 * (1 - 0) * XCObis * XH2bis * Math.pow(ACO * AH2, 0.5) + 2 * (1 - 0) * XCObis * XN2bis * Math.pow(ACO * AN2, 0.5) + 2 * (1 - 0) * XCObis * XCO2bis * Math.pow(ACO * ACO2, 0.5) + grAsuite;
    GRB = XH2Obis * BH2O + XH2bis * BH2 + XCO2bis * BCO2 + XN2bis * BN2 + XCObis * BCO + XNH3bis * BNH3 + XCH4bis * BCH4 + XMGbis * BMG;
    //calculs des coefficients de fugacit�s   
    //logFIH2Osoave = ZN - 1 - Log(ZN - GRB) - GRA / GRB * Log((ZN + GRB) / ZN)
    //FIH2Oincsoave = 10 ^ (logFIH2Osoave / 2.303)
    //Worksheets(1).Range("C31").Value = FIH2Oincsoave
    logFIH2O = (BH2O / GRB * (ZN - 1) - Math.log(ZN - GRB) + GRA / GRB * (BH2O / GRB - 2 / A * ArH2O) * Math.log(1 + GRB / ZN));
    FIH2Oinc = Math.exp(logFIH2O);
    FUH2Oinc = FIH2Oinc * P * XH2Obis;
    FUH2Oi = FUH2Oinc * 0.00001;
    logFIH2 = (BH2 / GRB * (ZN - 1) - Math.log(ZN - GRB) + GRA / GRB * (BH2 / GRB - 2 / A * ArH2) * Math.log(1 + GRB / ZN));
    FIH2inc = Math.exp(logFIH2);
    FUH2inc = FIH2inc * P * XH2bis;
    FUH2i = FUH2inc * 0.00001;
    logFICO = (BCO / GRB * (ZN - 1) - Math.log(ZN - GRB) + GRA / GRB * (BCO / GRB - 2 / A * ArCO) * Math.log(1 + GRB / ZN));
    FICOinc = Math.exp(logFICO);
    FUCOinc = FICOinc * P * XCObis;
    FUCOi = FUCOinc * 0.00001;
    logFICO2 = (BCO2 / GRB * (ZN - 1) - Math.log(ZN - GRB) + GRA / GRB * (BCO2 / GRB - 2 / A * ArCO2) * Math.log(1 + GRB / ZN));
    FICO2inc = Math.exp(logFICO2);
    FUCO2inc = FICO2inc * P * XCO2bis;
    FUCO2i = FUCO2inc * 0.00001; //la m�me chose mais en bar
    logFIN2 = (BN2 / GRB * (ZN - 1) - Math.log(ZN - GRB) + GRA / GRB * (BN2 / GRB - 2 / A * ArN2) * Math.log(1 + GRB / ZN));
    FIN2inc = Math.exp(logFIN2);
    FUN2inc = FIN2inc * P * XN2bis;
    FUN2i = FUN2inc * 0.00001;
    logFICH4 = (BCH4 / GRB * (ZN - 1) - Math.log(ZN - GRB) + GRA / GRB * (BCH4 / GRB - 2 / A * ArCH4) * Math.log(1 + GRB / ZN));
    FICH4inc = Math.exp(logFICH4);
    FUCH4inc = FICH4inc * P * XCH4bis;
    FUCH4i = FUCH4inc * 0.00001;
    logFINH3 = (BNH3 / GRB * (ZN - 1) - Math.log(ZN - GRB) + GRA / GRB * (BNH3 / GRB - 2 / A * ArNH3) * Math.log(1 + GRB / ZN));
    FINH3inc = Math.exp(logFINH3);
    FUNH3inc = FINH3inc * P * XNH3bis;
    FUNH3i = FUNH3inc * 0.00001;
    logFIMG = (BMG / GRB * (ZN - 1) - Math.log(ZN - GRB) + GRA / GRB * (BMG / GRB - 2 / A * ArMG) * Math.log(1 + GRB / ZN));
    FIMGinc = Math.exp(logFIMG);
    FUMGinc = FIMGinc * P * XMGbis;
    FUMGi = FUMGinc * 0.00001;
    ///////////////////////////
    $("#8-11").text(Number((FUNH3i).toFixed(5)).toString());
    ////////////////////////////////////
    /////////////////////////////////////////
    XH2Obis = 0;
    XCO2bis = 0;
    XCObis = 0;
    XH2bis = 0;
    XN2bis = 1;
    XCH4bis = 0;
    XNH3bis = 0;
    XMGbis = 0;
    Pb = parseFloat($("#0-1").text());
    P = Pb * 100000; //passage de la pression de bar en Pa
    T = parseFloat($("#1-1").text()) + 273.15;
    TcH2O = parseFloat($("#2-4").text()); //temp�rature critique de H2O dans la cellule J8
    PcH2O = parseFloat($("#2-3").text()); //pression critique de H2O
    TcCO2 = parseFloat($("#3-4").text());
    PcCO2 = parseFloat($("#3-3").text());
    TcCO = parseFloat($("#4-4").text());
    PcCO = parseFloat($("#4-3").text());
    TcH2 = parseFloat($("#1-4").text());
    PcH2 = parseFloat($("#1-3").text());
    TcN2 = parseFloat($("#7-4").text());
    PcN2 = parseFloat($("#7-3").text());
    TcCH4 = parseFloat($("#5-4").text());
    PcCH4 = parseFloat($("#5-3").text());
    TcNH3 = parseFloat($("#8-4").text());
    PcNH3 = parseFloat($("#8-3").text());
    TcMG = parseFloat($("#6-4").text());
    PcMG = parseFloat($("#6-3").text());
    R = 8.314472; //constante des gaz parfaits
    ///////////////////////////////////////////////
    //calcul des facteurs acentriques
    wH2O = parseFloat($("#2-5").text());
    nH2O = 0.48508 + 1.55171 * wH2O - 0.15613 * Math.pow(wH2O, 2);
    alphaH2O = Math.pow(1 + nH2O * (1 - Math.pow(T / TcH2O, 0.5)), 2);
    wCO2 = parseFloat($("#3-5").text());
    nCO2 = 0.48508 + 1.55171 * wCO2 - 0.15613 * Math.pow(wCO2, 2);
    alphaCO2 = Math.pow(1 + nCO2 * (1 - Math.pow(T / TcCO2, 0.5)), 2);
    wCO = parseFloat($("#4-5").text());
    nCO = 0.48508 + 1.55171 * wCO - 0.15613 * Math.pow(wCO, 2);
    alphaCO = Math.pow(1 + nCO * (1 - Math.pow(T / TcCO, 0.5)), 2);
    wH2 = parseFloat($("#1-5").text());
    nH2 = 0.48508 + 1.55171 * wH2 - 0.15613 * Math.pow(wH2, 2);
    alphaH2 = Math.pow(1 + nH2 * (1 - Math.pow(T / TcH2, 0.5)), 2);
    wN2 = parseFloat($("#7-5").text());
    nN2 = 0.48508 + 1.55171 * wN2 - 0.15613 * Math.pow(wN2, 2);
    alphaN2 = Math.pow(1 + nN2 * (1 - Math.pow(T / TcN2, 0.5)), 2);
    wCH4 = parseFloat($("#5-5").text());
    nCH4 = 0.48508 + 1.55171 * wCH4 - 0.15613 * Math.pow(wCH4, 2);
    alphaCH4 = Math.pow(1 + nCH4 * (1 - Math.pow(T / TcCH4, 0.5)), 2);
    wNH3 = parseFloat($("#8-5").text());
    nNH3 = 0.48508 + 1.55171 * wNH3 - 0.15613 * Math.pow(wNH3, 2);
    alphaNH3 = Math.pow(1 + nNH3 * (1 - Math.pow(T / TcNH3, 0.5)), 2);
    wMG = parseFloat($("#6-5").text());
    nMG = 0.48508 + 1.55171 * wMG - 0.15613 * Math.pow(wMG, 2);
    alphaMG = Math.pow(1 + nMG * (1 - Math.pow(T / TcMG, 0.5)), 2);
    /////////////////////////
    AH2 = 0.42748 * alphaH2 * Math.pow(TcH2, 2) / (PcH2 * 100000) * P / Math.pow(T, 2); //avec Tr=T/Tc et Pr=P/Pc
    BH2 = 0.08664 * TcH2 / (PcH2 * 100000) * P / (T);
    ACO2 = 0.42748 * alphaCO2 * Math.pow(TcCO2, 2) / (PcCO2 * 100000) * P / Math.pow(T, 2);
    BCO2 = 0.08664 * TcCO2 / (PcCO2 * 100000) * P / (T);
    AN2 = 0.42748 * alphaN2 * Math.pow(TcN2, 2) / (PcN2 * 100000) * P / Math.pow(T, 2);
    BN2 = 0.08664 * TcN2 / (PcN2 * 100000) * P / (T);
    AH2O = 0.42748 * alphaH2O * Math.pow(TcH2O, 2) / (PcH2O * 100000) * P / Math.pow(T, 2);
    BH2O = 0.08664 * TcH2O / (PcH2O * 100000) * P / (T);
    ACO = 0.42748 * alphaCO * Math.pow(TcCO, 2) / (PcCO * 100000) * P / Math.pow(T, 2);
    BCO = 0.08664 * TcCO / (PcCO * 100000) * P / (T);
    ACH4 = 0.42748 * alphaCH4 * Math.pow(TcCH4, 2) / (PcCH4 * 100000) * P / Math.pow(T, 2);
    BCH4 = 0.08664 * TcCH4 / (PcCH4 * 100000) * P / (T);
    ANH3 = 0.42748 * alphaNH3 * Math.pow(TcNH3, 2) / (PcNH3 * 100000) * P / Math.pow(T, 2);
    BNH3 = 0.08664 * TcNH3 / (PcNH3 * 100000) * P / (T);
    AMG = 0.42748 * alphaMG * Math.pow(TcMG, 2) / (PcMG * 100000) * P / Math.pow(T, 2);
    BMG = 0.08664 * TcMG / (PcMG * 100000) * P / (T);
    ///////////////////////////////////
    grAbis = Math.pow(XMGbis, 2) * AMG + 2 * (1 - 0) * XMGbis * XH2bis * Math.pow(AMG * AH2, 0.5) + 2 * (1 - 0) * XMGbis * XCO2bis * Math.pow(AMG * ACO2, 0.5) + 2 * (1 - 0) * XMGbis * XN2bis * Math.pow(AMG * AN2, 0.5) + 2 * (1 - 0) * XMGbis * XH2Obis * Math.pow(AMG * AH2O, 0.5) + 2 * (1 - 0) * XMGbis * XCObis * Math.pow(AMG * ACO2, 0.5) + 2 * (1 - 0) * XMGbis * XCH4bis * Math.pow(AMG * ACH4, 0.5) + 2 * (1 - 0) * XMGbis * XNH3bis * Math.pow(AMG * ANH3, 0.5);
    grAsuite = Math.pow(XCH4bis, 2) * ACH4 + Math.pow(XNH3bis, 2) * ANH3 + 2 * (1 - 0) * XCH4bis * XCObis * Math.pow(ACO * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XH2Obis * Math.pow(AH2O * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XCO2bis * Math.pow(ACO2 * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XH2bis * Math.pow(AH2 * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XN2bis * Math.pow(AN2 * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XNH3bis * Math.pow(ANH3 * ACH4, 0.5) + 2 * (1 - 0) * XH2Obis * XNH3bis * Math.pow(ANH3 * AH2O, 0.5) + 2 * (1 - 0) * XCO2bis * XNH3bis * Math.pow(ANH3 * ACO2, 0.5) + 2 * (1 - 0) * XCObis * XNH3bis * Math.pow(ANH3 * ACO, 0.5) + 2 * (1 - 0) * XH2bis * XNH3bis * Math.pow(ANH3 * AH2, 0.5) + 2 * (1 - 0) * XN2bis * XNH3bis * Math.pow(ANH3 * AN2, 0.5) + grAbis;
    GRA = Math.pow(XH2Obis, 2) * AH2O + Math.pow(XCO2bis, 2) * ACO2 + 2 * (1 - 0) * XH2Obis * XCO2bis * Math.pow(AH2O * ACO2, 0.5) + Math.pow(XH2bis, 2) * AH2 + 2 * (1 - 0) * XH2Obis * XH2bis * Math.pow(AH2O * AH2, 0.5) + Math.pow(XN2bis, 2) * AN2 + 2 * (1 - 0) * XH2Obis * XN2bis * Math.pow(AH2O * AN2, 0.5) + 2 * (1 - 0) * XCO2bis * XH2bis * Math.pow(ACO2 * AH2, 0.5) + 2 * (1 - 0) * XCO2bis * XN2bis * Math.pow(ACO2 * AN2, 0.5) + 2 * (1 - 0) * XN2bis * XH2bis * Math.pow(AN2 * AH2, 0.5) + Math.pow(XCObis, 2) * ACO + 2 * (1 - 0) * XH2Obis * XCObis * Math.pow(AH2O * ACO, 0.5) + 2 * (1 - 0) * XCObis * XH2bis * Math.pow(ACO * AH2, 0.5) + 2 * (1 - 0) * XCObis * XN2bis * Math.pow(ACO * AN2, 0.5) + 2 * (1 - 0) * XCObis * XCO2bis * Math.pow(ACO * ACO2, 0.5) + grAsuite;
    GRB = XH2Obis * BH2O + XH2bis * BH2 + XCO2bis * BCO2 + XN2bis * BN2 + XCObis * BCO + XNH3bis * BNH3 + XCH4bis * BCH4 + XMGbis * BMG;
    //////////////////////////////////
    test = 10;
    ZN = 1000.01; //initialisation NR � changer si plantage
    while (test > 0.000000001)
    {
        FZ = Math.pow(ZN, 3) - Math.pow(ZN, 2) + (GRA - Math.pow(GRB, 2) - GRB) * ZN - GRA * GRB;
        FpZ = 3 * Math.pow(ZN, 2) - 2 * ZN + (GRA - Math.pow(GRB, 2) - GRB);
        ZN1 = ZN - FZ / FpZ;
        test = Math.abs(ZN1 - ZN);
        ZN = ZN1;
    }
    VN = (ZN * R * T / P);
    V = VN * 1000000;
    /////////////////////////////////////////
    //calculs des param�tres de repulsion et d'attraction de l'equation d'etat, aialphai et bialphai qui interviennent dans le calcul des coefficients de fugacit�
    AH2 = 0.42748 * alphaH2 * (R * Math.pow(TcH2, 2)) / (PcH2 * 100000);
    BH2 = 0.08664 * R * TcH2 / (PcH2 * 100000);
    BiH2 = BH2; //stockage de bialphai
    ACO2 = 0.42748 * alphaCO2 * (R * Math.pow(TcCO2, 2)) / (PcCO2 * 100000);
    BCO2 = 0.08664 * R * TcCO2 / (PcCO2 * 100000);
    BiCO2 = BCO2;
    AN2 = 0.42748 * alphaN2 * (R * Math.pow(TcN2, 2)) / (PcN2 * 100000);
    BN2 = 0.08664 * R * TcN2 / (PcN2 * 100000);
    BiN2 = BN2;
    AH2O = 0.42748 * alphaH2O * (R * Math.pow(TcH2O, 2)) / (PcH2O * 100000);
    BH2O = 0.08664 * R * TcH2O / (PcH2O * 100000);
    BiH2O = BH2O;
    ACO = 0.42748 * alphaCO * (R * Math.pow(TcCO, 2)) / (PcCO * 100000);
    BCO = 0.08664 * R * TcCO / (PcCO * 100000);
    BiCO = BCO;
    ACH4 = 0.42748 * alphaCH4 * (R * Math.pow(TcCH4, 2)) / (PcCH4 * 100000);
    BCH4 = 0.08664 * R * TcCH4 / (PcCH4 * 100000);
    BiCH4 = BCH4;
    ANH3 = 0.42748 * alphaNH3 * (R * Math.pow(TcNH3, 2)) / (PcNH3 * 100000);
    BNH3 = 0.08664 * R * TcNH3 / (PcNH3 * 100000);
    BiNH3 = BNH3;
    AMG = 0.42748 * alphaMG * (R * Math.pow(TcMG, 2)) / (PcMG * 100000);
    BMG = 0.08664 * R * TcMG / (PcMG * 100000);
    BiMG = BMG;
    ////////////////////////////////
    //calculs des param�tres de repulsion et d'attraction de l'equation d'etat, a et b qui n'interviennent pas dans le calcul du coefficient de fugacit�
    grAbis = Math.pow(XMGbis, 2) * AMG + 2 * (1 - 0) * XMGbis * XH2bis * Math.pow(AMG * AH2, 0.5) + 2 * (1 - 0) * XMGbis * XCO2bis * Math.pow(AMG * ACO2, 0.5) + 2 * (1 - 0) * XMGbis * XN2bis * Math.pow(AMG * AN2, 0.5) + 2 * (1 - 0) * XMGbis * XH2Obis * Math.pow(AMG * AH2O, 0.5) + 2 * (1 - 0) * XMGbis * XCObis * Math.pow(AMG * ACO2, 0.5) + 2 * (1 - 0) * XMGbis * XCH4bis * Math.pow(AMG * ACH4, 0.5) + 2 * (1 - 0) * XMGbis * XNH3bis * Math.pow(AMG * ANH3, 0.5);
    grAsuite = Math.pow(XCH4bis, 2) * ACH4 + Math.pow(XNH3bis, 2) * ANH3 + 2 * (1 - 0) * XCH4bis * XCObis * Math.pow(ACO * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XH2Obis * Math.pow(AH2O * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XCO2bis * Math.pow(ACO2 * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XH2bis * Math.pow(AH2 * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XN2bis * Math.pow(AN2 * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XNH3bis * Math.pow(ANH3 * ACH4, 0.5) + 2 * (1 - 0) * XH2Obis * XNH3bis * Math.pow(ANH3 * AH2O, 0.5) + 2 * (1 - 0) * XCO2bis * XNH3bis * Math.pow(ANH3 * ACO2, 0.5) + 2 * (1 - 0) * XCObis * XNH3bis * Math.pow(ANH3 * ACO, 0.5) + 2 * (1 - 0) * XH2bis * XNH3bis * Math.pow(ANH3 * AH2, 0.5) + 2 * (1 - 0) * XN2bis * XNH3bis * Math.pow(ANH3 * AN2, 0.5) + grAbis;
    A = Math.pow(XH2Obis, 2) * AH2O + Math.pow(XCO2bis, 2) * ACO2 + 2 * (1 - 0) * XH2Obis * XCO2bis * Math.pow(AH2O * ACO2, 0.5) + Math.pow(XH2bis, 2) * AH2 + 2 * (1 - 0) * XH2Obis * XH2bis * Math.pow(AH2O * AH2, 0.5) + Math.pow(XN2bis, 2) * AN2 + 2 * (1 - 0) * XH2Obis * XN2bis * Math.pow(AH2O * AN2, 0.5) + 2 * (1 - 0) * XCO2bis * XH2bis * Math.pow(ACO2 * AH2, 0.5) + 2 * (1 - 0) * XCO2bis * XN2bis * Math.pow(ACO2 * AN2, 0.5) + 2 * (1 - 0) * XN2bis * XH2bis * Math.pow(AN2 * AH2, 0.5) + Math.pow(XCObis, 2) * ACO + 2 * (1 - 0) * XH2Obis * XCObis * Math.pow(AH2O * ACO, 0.5) + 2 * (1 - 0) * XCObis * XH2bis * Math.pow(ACO * AH2, 0.5) + 2 * (1 - 0) * XCObis * XN2bis * Math.pow(ACO * AN2, 0.5) + 2 * (1 - 0) * XCObis * XCO2bis * Math.pow(ACO * ACO2, 0.5) + grAsuite;
    B = XH2Obis * BH2O + XH2bis * BH2 + XCO2bis * BCO2 + XN2bis * BN2 + XCObis * BCO + XNH3bis * BNH3 + XCH4bis * BCH4 + XMGbis * BMG;
    ////////////////////////////
    //calcul de d�riv�s de XiXj(1-Kji)racine(aialphai*akalphak)
    grAbis = (XMGbis) * Math.pow(AH2 * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(AH2 * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * AH2, 0.5) + grAbis;
    ArH2 = ((XH2bis)) * AH2 + (1 - 0) * (XH2Obis) * Math.pow(AH2O * AH2, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * AH2, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * AH2, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * AH2, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(ACO2 * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(ACO2 * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * ACO2, 0.5) + grAbis;
    ArCO2 = ((XCO2bis)) * ACO2 + (1 - 0) * (XH2Obis) * Math.pow(AH2O * ACO2, 0.5) + (1 - 0) * (XH2bis) * Math.pow(ACO2 * AH2, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * ACO2, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * ACO2, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(AN2 * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(AN2 * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * AN2, 0.5) + grAbis;
    ArN2 = ((XN2bis)) * AN2 + (1 - 0) * (XH2Obis) * Math.pow(AH2O * AN2, 0.5) + (1 - 0) * (XH2bis) * Math.pow(AN2 * AH2, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(AN2 * ACO2, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * AN2, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(AH2O * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(AH2O * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * AH2O, 0.5) + grAbis;
    ArH2O = (XH2Obis) * AH2O + (1 - 0) * (XH2bis) * Math.pow(AH2O * AH2, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * AH2O, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * AH2O, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * AH2O, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(ACO * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(ACO * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * ACO, 0.5) + grAbis;
    ArCO = (XCObis) * ACO + (1 - 0) * (XH2Obis) * Math.pow(AH2O * ACO, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * ACO, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * ACO, 0.5) + (1 - 0) * (XH2bis) * Math.pow(ACO * AH2, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(ACH4 * AMG, 0.5);
    grAsuite = (1 - 0) * (XH2bis) * Math.pow(AH2 * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * ACH4, 0.5) + grAbis;
    ArCH4 = ((XCH4bis)) * ACH4 + (1 - 0) * (XH2Obis) * Math.pow(AH2O * ACH4, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * ACH4, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * ACH4, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * ACH4, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(ANH3 * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(ANH3 * ACH4, 0.5) + (1 - 0) * (XH2bis) * Math.pow(ANH3 * AH2, 0.5) + grAbis;
    ArNH3 = ((XNH3bis)) * ANH3 + (1 - 0) * (XH2Obis) * Math.pow(AH2O * ANH3, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * ANH3, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * ANH3, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * ANH3, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XNH3bis) * Math.pow(AMG * ANH3, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(AMG * ACH4, 0.5) + (1 - 0) * (XH2bis) * Math.pow(AMG * AH2, 0.5) + grAbis;
    ArMG = ((XMGbis)) * AMG + (1 - 0) * (XH2Obis) * Math.pow(AH2O * AMG, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * AMG, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * AMG, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * AMG, 0.5) + grAsuite;
    /////////////////////////////
    SB = BH2O + BH2 + BCO2 + BN2 + BCO + BNH3 + BCH4 + BMG;
    DVDXH2 = (-(R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * VN * Math.pow(VN - B, 2)) * SB + (VN - B) * VN * (Math.pow(VN, 2) - Math.pow(B, 2)) * ArH2) / (-R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * (2 * VN + B) * Math.pow(VN - B, 2));
    DVDXH2O = (-(R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * VN * Math.pow(VN - B, 2)) * SB + (VN - B) * VN * (Math.pow(VN, 2) - Math.pow(B, 2)) * ArH2O) / (-R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * (2 * VN + B) * Math.pow(VN - B, 2));
    DVDXCO2 = (-(R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * VN * Math.pow(VN - B, 2)) * SB + (VN - B) * VN * (Math.pow(VN, 2) - Math.pow(B, 2)) * ArCO2) / (-R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * (2 * VN + B) * Math.pow(VN - B, 2));
    DVDXCO = (-(R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * VN * Math.pow(VN - B, 2)) * SB + (VN - B) * VN * (Math.pow(VN, 2) - Math.pow(B, 2)) * ArCO) / (-R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * (2 * VN + B) * Math.pow(VN - B, 2));
    DVDXN2 = (-(R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * VN * Math.pow(VN - B, 2)) * SB + (VN - B) * VN * (Math.pow(VN, 2) - Math.pow(B, 2)) * ArN2) / (-R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * (2 * VN + B) * Math.pow(VN - B, 2));
    DVDXCH4 = (-(R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * VN * Math.pow(VN - B, 2)) * SB + (VN - B) * VN * (Math.pow(VN, 2) - Math.pow(B, 2)) * ArCH4) / (-R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * (2 * VN + B) * Math.pow(VN - B, 2));
    DVDXNH3 = (-(R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * VN * Math.pow(VN - B, 2)) * SB + (VN - B) * VN * (Math.pow(VN, 2) - Math.pow(B, 2)) * ArNH3) / (-R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * (2 * VN + B) * Math.pow(VN - B, 2));
    DVDXMG = (-(R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * VN * Math.pow(VN - B, 2)) * SB + (VN - B) * VN * (Math.pow(VN, 2) - Math.pow(B, 2)) * ArMG) / (-R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * (2 * VN + B) * Math.pow(VN - B, 2));

    VCO2M = (VN * 1 * (XCO2bis) - 1 * (XCO2bis - 0 * XCO2bis) * 1 / 3 / 8 / 2 * DVDXCO2) * 1000000;
    VCOM = (VN * 1 * (XCObis) - 1 * (XCObis - 0 * XCObis) * 1 / 3 / 8 / 2 * DVDXCO) * 1000000;
    VH2M = (VN * 1 * (XH2bis) - 1 * (XH2bis - 0 * XH2bis) * 1 / 3 / 8 / 2 * DVDXH2) * 1000000;
    VN2M = (VN * 1 * (XN2bis) - 1 * (XN2bis - 0 * XN2bis) * 1 / 3 / 8 / 2 * DVDXN2) * 1000000;
    VCH4M = (VN * 1 * (XCH4bis) - 1 * (XCH4bis - 0 * XCH4bis) * 1 / 3 / 8 / 2 * DVDXCH4) * 1000000;
    VNH3M = (VN * 1 * (XNH3bis) - 1 * (XNH3bis - 0 * XNH3bis) * 1 / 3 / 8 / 2 * DVDXNH3) * 1000000;
    VH2OM = (VN * 1 * (XH2Obis) - 1 * (XH2Obis - 0 * XH2Obis) * 1 / 3 / 8 / 2 * DVDXH2O) * 1000000;
    VMGM = (VN * 1 * (XMGbis) - 1 * (XMGbis - 0 * XMGbis) * 1 / 3 / 8 / 2 * DVDXMG) * 1000000;
    //calcul de somme de Xk(1-Kki)racine(aialphai*akalphak)  (avant le 2 dans le calcul du coefficient de fugacit� de l'esp�ce k)
    grAbis = (XMGbis) * Math.pow(AH2 * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(AH2 * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * AH2, 0.5) + grAbis;
    ArH2 = ((XH2bis)) * AH2 + (1 - 0) * (XH2Obis) * Math.pow(AH2O * AH2, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * AH2, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * AH2, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * AH2, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(ACO2 * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(ACO2 * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * ACO2, 0.5) + grAbis;
    ArCO2 = ((XCO2bis)) * ACO2 + (1 - 0) * (XH2Obis) * Math.pow(AH2O * ACO2, 0.5) + (1 - 0) * (XH2bis) * Math.pow(ACO2 * AH2, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * ACO2, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * ACO2, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(AN2 * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(AN2 * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * AN2, 0.5) + grAbis;
    ArN2 = ((XN2bis)) * AN2 + (1 - 0) * (XH2Obis) * Math.pow(AH2O * AN2, 0.5) + (1 - 0) * (XH2bis) * Math.pow(AN2 * AH2, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(AN2 * ACO2, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * AN2, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(AH2O * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(AH2O * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * AH2O, 0.5) + grAbis;
    ArH2O = (XH2Obis) * AH2O + (1 - 0) * (XH2bis) * Math.pow(AH2O * AH2, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * AH2O, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * AH2O, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * AH2O, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(ACO * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(ACO * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * ACO, 0.5) + grAbis;
    ArCO = (XCObis) * ACO + (1 - 0) * (XH2Obis) * Math.pow(AH2O * ACO, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * ACO, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * ACO, 0.5) + (1 - 0) * (XH2bis) * Math.pow(ACO * AH2, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(ACH4 * AMG, 0.5);
    grAsuite = (1 - 0) * (XH2bis) * Math.pow(AH2 * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * ACH4, 0.5) + grAbis;
    ArCH4 = ((XCH4bis)) * ACH4 + (1 - 0) * (XH2Obis) * Math.pow(AH2O * ACH4, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * ACH4, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * ACH4, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * ACH4, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(ANH3 * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(ANH3 * ACH4, 0.5) + (1 - 0) * (XH2bis) * Math.pow(ANH3 * AH2, 0.5) + grAbis;
    ArNH3 = ((XNH3bis)) * ANH3 + (1 - 0) * (XH2Obis) * Math.pow(AH2O * ANH3, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * ANH3, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * ANH3, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * ANH3, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XNH3bis) * Math.pow(AMG * ANH3, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(AMG * ACH4, 0.5) + (1 - 0) * (XH2bis) * Math.pow(AMG * AH2, 0.5) + grAbis;
    ArMG = ((XMGbis)) * AMG + (1 - 0) * (XH2Obis) * Math.pow(AH2O * AMG, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * AMG, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * AMG, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * AMG, 0.5) + grAsuite;
    //calculs des param�tres de repulsion et d'attraction de l'equation d'etat, Ai et Bi qui interviennent dans le calcul du coefficient de fugacit�
    AH2 = 0.42748 * alphaH2 * Math.pow(TcH2, 2) / (PcH2 * 100000) * P / Math.pow(T, 2); //avec Tr=T/Tc et Pr=P/Pc
    BH2 = 0.08664 * TcH2 / (PcH2 * 100000) * P / (T);
    ACO2 = 0.42748 * alphaCO2 * Math.pow(TcCO2, 2) / (PcCO2 * 100000) * P / Math.pow(T, 2);
    BCO2 = 0.08664 * TcCO2 / (PcCO2 * 100000) * P / (T);
    AN2 = 0.42748 * alphaN2 * Math.pow(TcN2, 2) / (PcN2 * 100000) * P / Math.pow(T, 2);
    BN2 = 0.08664 * TcN2 / (PcN2 * 100000) * P / (T);
    AH2O = 0.42748 * alphaH2O * Math.pow(TcH2O, 2) / (PcH2O * 100000) * P / Math.pow(T, 2);
    BH2O = 0.08664 * TcH2O / (PcH2O * 100000) * P / (T);
    ACO = 0.42748 * alphaCO * Math.pow(TcCO, 2) / (PcCO * 100000) * P / Math.pow(T, 2);
    BCO = 0.08664 * TcCO / (PcCO * 100000) * P / (T);
    ACH4 = 0.42748 * alphaCH4 * Math.pow(TcCH4, 2) / (PcCH4 * 100000) * P / Math.pow(T, 2);
    BCH4 = 0.08664 * TcCH4 / (PcCH4 * 100000) * P / (T);
    ANH3 = 0.42748 * alphaNH3 * Math.pow(TcNH3, 2) / (PcNH3 * 100000) * P / Math.pow(T, 2);
    BNH3 = 0.08664 * TcNH3 / (PcNH3 * 100000) * P / (T);
    AMG = 0.42748 * alphaMG * Math.pow(TcMG, 2) / (PcMG * 100000) * P / Math.pow(T, 2);
    BMG = 0.08664 * TcMG / (PcMG * 100000) * P / (T);
    ///////////////////////////////////
    //calculs des param�tres de repulsion et d'attraction de l'equation d'etat, A et B qui interviennent dans le calcul du coefficient de fugacit�
    grAbis = Math.pow(XMGbis, 2) * AMG + 2 * (1 - 0) * XMGbis * XH2bis * Math.pow(AMG * AH2, 0.5) + 2 * (1 - 0) * XMGbis * XCO2bis * Math.pow(AMG * ACO2, 0.5) + 2 * (1 - 0) * XMGbis * XN2bis * Math.pow(AMG * AN2, 0.5) + 2 * (1 - 0) * XMGbis * XH2Obis * Math.pow(AMG * AH2O, 0.5) + 2 * (1 - 0) * XMGbis * XCObis * Math.pow(AMG * ACO2, 0.5) + 2 * (1 - 0) * XMGbis * XCH4bis * Math.pow(AMG * ACH4, 0.5) + 2 * (1 - 0) * XMGbis * XNH3bis * Math.pow(AMG * ANH3, 0.5);
    grAsuite = Math.pow(XCH4bis, 2) * ACH4 + Math.pow(XNH3bis, 2) * ANH3 + 2 * (1 - 0) * XCH4bis * XCObis * Math.pow(ACO * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XH2Obis * Math.pow(AH2O * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XCO2bis * Math.pow(ACO2 * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XH2bis * Math.pow(AH2 * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XN2bis * Math.pow(AN2 * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XNH3bis * Math.pow(ANH3 * ACH4, 0.5) + 2 * (1 - 0) * XH2Obis * XNH3bis * Math.pow(ANH3 * AH2O, 0.5) + 2 * (1 - 0) * XCO2bis * XNH3bis * Math.pow(ANH3 * ACO2, 0.5) + 2 * (1 - 0) * XCObis * XNH3bis * Math.pow(ANH3 * ACO, 0.5) + 2 * (1 - 0) * XH2bis * XNH3bis * Math.pow(ANH3 * AH2, 0.5) + 2 * (1 - 0) * XN2bis * XNH3bis * Math.pow(ANH3 * AN2, 0.5) + grAbis;
    GRA = Math.pow(XH2Obis, 2) * AH2O + Math.pow(XCO2bis, 2) * ACO2 + 2 * (1 - 0) * XH2Obis * XCO2bis * Math.pow(AH2O * ACO2, 0.5) + Math.pow(XH2bis, 2) * AH2 + 2 * (1 - 0) * XH2Obis * XH2bis * Math.pow(AH2O * AH2, 0.5) + Math.pow(XN2bis, 2) * AN2 + 2 * (1 - 0) * XH2Obis * XN2bis * Math.pow(AH2O * AN2, 0.5) + 2 * (1 - 0) * XCO2bis * XH2bis * Math.pow(ACO2 * AH2, 0.5) + 2 * (1 - 0) * XCO2bis * XN2bis * Math.pow(ACO2 * AN2, 0.5) + 2 * (1 - 0) * XN2bis * XH2bis * Math.pow(AN2 * AH2, 0.5) + Math.pow(XCObis, 2) * ACO + 2 * (1 - 0) * XH2Obis * XCObis * Math.pow(AH2O * ACO, 0.5) + 2 * (1 - 0) * XCObis * XH2bis * Math.pow(ACO * AH2, 0.5) + 2 * (1 - 0) * XCObis * XN2bis * Math.pow(ACO * AN2, 0.5) + 2 * (1 - 0) * XCObis * XCO2bis * Math.pow(ACO * ACO2, 0.5) + grAsuite;
    GRB = XH2Obis * BH2O + XH2bis * BH2 + XCO2bis * BCO2 + XN2bis * BN2 + XCObis * BCO + XNH3bis * BNH3 + XCH4bis * BCH4 + XMGbis * BMG;
    //calculs des coefficients de fugacit�s   
    //logFIH2Osoave = ZN - 1 - Log(ZN - GRB) - GRA / GRB * Log((ZN + GRB) / ZN)
    //FIH2Oincsoave = 10 ^ (logFIH2Osoave / 2.303)
    //Worksheets(1).Range("C31").Value = FIH2Oincsoave
    logFIH2O = (BH2O / GRB * (ZN - 1) - Math.log(ZN - GRB) + GRA / GRB * (BH2O / GRB - 2 / A * ArH2O) * Math.log(1 + GRB / ZN));
    FIH2Oinc = Math.exp(logFIH2O);
    FUH2Oinc = FIH2Oinc * P * XH2Obis;
    FUH2Oi = FUH2Oinc * 0.00001;
    logFIH2 = (BH2 / GRB * (ZN - 1) - Math.log(ZN - GRB) + GRA / GRB * (BH2 / GRB - 2 / A * ArH2) * Math.log(1 + GRB / ZN));
    FIH2inc = Math.exp(logFIH2);
    FUH2inc = FIH2inc * P * XH2bis;
    FUH2i = FUH2inc * 0.00001;
    logFICO = (BCO / GRB * (ZN - 1) - Math.log(ZN - GRB) + GRA / GRB * (BCO / GRB - 2 / A * ArCO) * Math.log(1 + GRB / ZN));
    FICOinc = Math.exp(logFICO);
    FUCOinc = FICOinc * P * XCObis;
    FUCOi = FUCOinc * 0.00001;
    logFICO2 = (BCO2 / GRB * (ZN - 1) - Math.log(ZN - GRB) + GRA / GRB * (BCO2 / GRB - 2 / A * ArCO2) * Math.log(1 + GRB / ZN));
    FICO2inc = Math.exp(logFICO2);
    FUCO2inc = FICO2inc * P * XCO2bis;
    FUCO2i = FUCO2inc * 0.00001; //la m�me chose mais en bar
    logFIN2 = (BN2 / GRB * (ZN - 1) - Math.log(ZN - GRB) + GRA / GRB * (BN2 / GRB - 2 / A * ArN2) * Math.log(1 + GRB / ZN));
    FIN2inc = Math.exp(logFIN2);
    FUN2inc = FIN2inc * P * XN2bis;
    FUN2i = FUN2inc * 0.00001;
    logFICH4 = (BCH4 / GRB * (ZN - 1) - Math.log(ZN - GRB) + GRA / GRB * (BCH4 / GRB - 2 / A * ArCH4) * Math.log(1 + GRB / ZN));
    FICH4inc = Math.exp(logFICH4);
    FUCH4inc = FICH4inc * P * XCH4bis;
    FUCH4i = FUCH4inc * 0.00001;
    logFINH3 = (BNH3 / GRB * (ZN - 1) - Math.log(ZN - GRB) + GRA / GRB * (BNH3 / GRB - 2 / A * ArNH3) * Math.log(1 + GRB / ZN));
    FINH3inc = Math.exp(logFINH3);
    FUNH3inc = FINH3inc * P * XNH3bis;
    FUNH3i = FUNH3inc * 0.00001;
    logFIMG = (BMG / GRB * (ZN - 1) - Math.log(ZN - GRB) + GRA / GRB * (BMG / GRB - 2 / A * ArMG) * Math.log(1 + GRB / ZN));
    FIMGinc = Math.exp(logFIMG);
    FUMGinc = FIMGinc * P * XMGbis;
    FUMGi = FUMGinc * 0.00001;
    ///////////////////////////
    $("#7-11").text(Number((FUN2i).toFixed(5)).toString());
    /////////////////////////////////////////////:
    /////////////////////////////////////////
    XH2Obis = 0;
    XCO2bis = 0;
    XCObis = 0;
    XH2bis = 0;
    XN2bis = 0;
    XCH4bis = 0;
    XNH3bis = 0;
    XMGbis = 1;
    Pb = parseFloat($("#0-1").text());
    P = Pb * 100000; //passage de la pression de bar en Pa
    T = parseFloat($("#1-1").text()) + 273.15;
    TcH2O = parseFloat($("#2-4").text()); //temp�rature critique de H2O dans la cellule J8
    PcH2O = parseFloat($("#2-3").text()); //pression critique de H2O
    TcCO2 = parseFloat($("#3-4").text());
    PcCO2 = parseFloat($("#3-3").text());
    TcCO = parseFloat($("#4-4").text());
    PcCO = parseFloat($("#4-3").text());
    TcH2 = parseFloat($("#1-4").text());
    PcH2 = parseFloat($("#1-3").text());
    TcN2 = parseFloat($("#7-4").text());
    PcN2 = parseFloat($("#7-3").text());
    TcCH4 = parseFloat($("#5-4").text());
    PcCH4 = parseFloat($("#5-3").text());
    TcNH3 = parseFloat($("#8-4").text());
    PcNH3 = parseFloat($("#8-3").text());
    TcMG = parseFloat($("#6-4").text());
    PcMG = parseFloat($("#6-3").text());
    R = 8.314472; //constante des gaz parfaits
    ///////////////////////////////////////////////
    //calcul des facteurs acentriques
    wH2O = parseFloat($("#2-5").text());
    nH2O = 0.48508 + 1.55171 * wH2O - 0.15613 * Math.pow(wH2O, 2);
    alphaH2O = Math.pow(1 + nH2O * (1 - Math.pow(T / TcH2O, 0.5)), 2);
    wCO2 = parseFloat($("#3-5").text());
    nCO2 = 0.48508 + 1.55171 * wCO2 - 0.15613 * Math.pow(wCO2, 2);
    alphaCO2 = Math.pow(1 + nCO2 * (1 - Math.pow(T / TcCO2, 0.5)), 2);
    wCO = parseFloat($("#4-5").text());
    nCO = 0.48508 + 1.55171 * wCO - 0.15613 * Math.pow(wCO, 2);
    alphaCO = Math.pow(1 + nCO * (1 - Math.pow(T / TcCO, 0.5)), 2);
    wH2 = parseFloat($("#1-5").text());
    nH2 = 0.48508 + 1.55171 * wH2 - 0.15613 * Math.pow(wH2, 2);
    alphaH2 = Math.pow(1 + nH2 * (1 - Math.pow(T / TcH2, 0.5)), 2);
    wN2 = parseFloat($("#7-5").text());
    nN2 = 0.48508 + 1.55171 * wN2 - 0.15613 * Math.pow(wN2, 2);
    alphaN2 = Math.pow(1 + nN2 * (1 - Math.pow(T / TcN2, 0.5)), 2);
    wCH4 = parseFloat($("#5-5").text());
    nCH4 = 0.48508 + 1.55171 * wCH4 - 0.15613 * Math.pow(wCH4, 2);
    alphaCH4 = Math.pow(1 + nCH4 * (1 - Math.pow(T / TcCH4, 0.5)), 2);
    wNH3 = parseFloat($("#8-5").text());
    nNH3 = 0.48508 + 1.55171 * wNH3 - 0.15613 * Math.pow(wNH3, 2);
    alphaNH3 = Math.pow(1 + nNH3 * (1 - Math.pow(T / TcNH3, 0.5)), 2);
    wMG = parseFloat($("#6-5").text());
    nMG = 0.48508 + 1.55171 * wMG - 0.15613 * Math.pow(wMG, 2);
    alphaMG = Math.pow(1 + nMG * (1 - Math.pow(T / TcMG, 0.5)), 2);
    /////////////////////////
    AH2 = 0.42748 * alphaH2 * Math.pow(TcH2, 2) / (PcH2 * 100000) * P / Math.pow(T, 2); //avec Tr=T/Tc et Pr=P/Pc
    BH2 = 0.08664 * TcH2 / (PcH2 * 100000) * P / (T);
    ACO2 = 0.42748 * alphaCO2 * Math.pow(TcCO2, 2) / (PcCO2 * 100000) * P / Math.pow(T, 2);
    BCO2 = 0.08664 * TcCO2 / (PcCO2 * 100000) * P / (T);
    AN2 = 0.42748 * alphaN2 * Math.pow(TcN2, 2) / (PcN2 * 100000) * P / Math.pow(T, 2);
    BN2 = 0.08664 * TcN2 / (PcN2 * 100000) * P / (T);
    AH2O = 0.42748 * alphaH2O * Math.pow(TcH2O, 2) / (PcH2O * 100000) * P / Math.pow(T, 2);
    BH2O = 0.08664 * TcH2O / (PcH2O * 100000) * P / (T);
    ACO = 0.42748 * alphaCO * Math.pow(TcCO, 2) / (PcCO * 100000) * P / Math.pow(T, 2);
    BCO = 0.08664 * TcCO / (PcCO * 100000) * P / (T);
    ACH4 = 0.42748 * alphaCH4 * Math.pow(TcCH4, 2) / (PcCH4 * 100000) * P / Math.pow(T, 2);
    BCH4 = 0.08664 * TcCH4 / (PcCH4 * 100000) * P / (T);
    ANH3 = 0.42748 * alphaNH3 * Math.pow(TcNH3, 2) / (PcNH3 * 100000) * P / Math.pow(T, 2);
    BNH3 = 0.08664 * TcNH3 / (PcNH3 * 100000) * P / (T);
    AMG = 0.42748 * alphaMG * Math.pow(TcMG, 2) / (PcMG * 100000) * P / Math.pow(T, 2);
    BMG = 0.08664 * TcMG / (PcMG * 100000) * P / (T);
    ///////////////////////////////////
    grAbis = Math.pow(XMGbis, 2) * AMG + 2 * (1 - 0) * XMGbis * XH2bis * Math.pow(AMG * AH2, 0.5) + 2 * (1 - 0) * XMGbis * XCO2bis * Math.pow(AMG * ACO2, 0.5) + 2 * (1 - 0) * XMGbis * XN2bis * Math.pow(AMG * AN2, 0.5) + 2 * (1 - 0) * XMGbis * XH2Obis * Math.pow(AMG * AH2O, 0.5) + 2 * (1 - 0) * XMGbis * XCObis * Math.pow(AMG * ACO2, 0.5) + 2 * (1 - 0) * XMGbis * XCH4bis * Math.pow(AMG * ACH4, 0.5) + 2 * (1 - 0) * XMGbis * XNH3bis * Math.pow(AMG * ANH3, 0.5);
    grAsuite = Math.pow(XCH4bis, 2) * ACH4 + Math.pow(XNH3bis, 2) * ANH3 + 2 * (1 - 0) * XCH4bis * XCObis * Math.pow(ACO * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XH2Obis * Math.pow(AH2O * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XCO2bis * Math.pow(ACO2 * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XH2bis * Math.pow(AH2 * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XN2bis * Math.pow(AN2 * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XNH3bis * Math.pow(ANH3 * ACH4, 0.5) + 2 * (1 - 0) * XH2Obis * XNH3bis * Math.pow(ANH3 * AH2O, 0.5) + 2 * (1 - 0) * XCO2bis * XNH3bis * Math.pow(ANH3 * ACO2, 0.5) + 2 * (1 - 0) * XCObis * XNH3bis * Math.pow(ANH3 * ACO, 0.5) + 2 * (1 - 0) * XH2bis * XNH3bis * Math.pow(ANH3 * AH2, 0.5) + 2 * (1 - 0) * XN2bis * XNH3bis * Math.pow(ANH3 * AN2, 0.5) + grAbis;
    GRA = Math.pow(XH2Obis, 2) * AH2O + Math.pow(XCO2bis, 2) * ACO2 + 2 * (1 - 0) * XH2Obis * XCO2bis * Math.pow(AH2O * ACO2, 0.5) + Math.pow(XH2bis, 2) * AH2 + 2 * (1 - 0) * XH2Obis * XH2bis * Math.pow(AH2O * AH2, 0.5) + Math.pow(XN2bis, 2) * AN2 + 2 * (1 - 0) * XH2Obis * XN2bis * Math.pow(AH2O * AN2, 0.5) + 2 * (1 - 0) * XCO2bis * XH2bis * Math.pow(ACO2 * AH2, 0.5) + 2 * (1 - 0) * XCO2bis * XN2bis * Math.pow(ACO2 * AN2, 0.5) + 2 * (1 - 0) * XN2bis * XH2bis * Math.pow(AN2 * AH2, 0.5) + Math.pow(XCObis, 2) * ACO + 2 * (1 - 0) * XH2Obis * XCObis * Math.pow(AH2O * ACO, 0.5) + 2 * (1 - 0) * XCObis * XH2bis * Math.pow(ACO * AH2, 0.5) + 2 * (1 - 0) * XCObis * XN2bis * Math.pow(ACO * AN2, 0.5) + 2 * (1 - 0) * XCObis * XCO2bis * Math.pow(ACO * ACO2, 0.5) + grAsuite;
    GRB = XH2Obis * BH2O + XH2bis * BH2 + XCO2bis * BCO2 + XN2bis * BN2 + XCObis * BCO + XNH3bis * BNH3 + XCH4bis * BCH4 + XMGbis * BMG;
    //////////////////////////////////
    test = 10;
    ZN = 1000.01; //initialisation NR � changer si plantage
    while (test > 0.000000001)
    {
        FZ = Math.pow(ZN, 3) - Math.pow(ZN, 2) + (GRA - Math.pow(GRB, 2) - GRB) * ZN - GRA * GRB;
        FpZ = 3 * Math.pow(ZN, 2) - 2 * ZN + (GRA - Math.pow(GRB, 2) - GRB);
        ZN1 = ZN - FZ / FpZ;
        test = Math.abs(ZN1 - ZN);
        ZN = ZN1;
    }
    VN = (ZN * R * T / P);
    V = VN * 1000000;
    /////////////////////////////////////////
    //calculs des param�tres de repulsion et d'attraction de l'equation d'etat, aialphai et bialphai qui interviennent dans le calcul des coefficients de fugacit�
    AH2 = 0.42748 * alphaH2 * (R * Math.pow(TcH2, 2)) / (PcH2 * 100000);
    BH2 = 0.08664 * R * TcH2 / (PcH2 * 100000);
    BiH2 = BH2; //stockage de bialphai
    ACO2 = 0.42748 * alphaCO2 * (R * Math.pow(TcCO2, 2)) / (PcCO2 * 100000);
    BCO2 = 0.08664 * R * TcCO2 / (PcCO2 * 100000);
    BiCO2 = BCO2;
    AN2 = 0.42748 * alphaN2 * (R * Math.pow(TcN2, 2)) / (PcN2 * 100000);
    BN2 = 0.08664 * R * TcN2 / (PcN2 * 100000);
    BiN2 = BN2;
    AH2O = 0.42748 * alphaH2O * (R * Math.pow(TcH2O, 2)) / (PcH2O * 100000);
    BH2O = 0.08664 * R * TcH2O / (PcH2O * 100000);
    BiH2O = BH2O;
    ACO = 0.42748 * alphaCO * (R * Math.pow(TcCO, 2)) / (PcCO * 100000);
    BCO = 0.08664 * R * TcCO / (PcCO * 100000);
    BiCO = BCO;
    ACH4 = 0.42748 * alphaCH4 * (R * Math.pow(TcCH4, 2)) / (PcCH4 * 100000);
    BCH4 = 0.08664 * R * TcCH4 / (PcCH4 * 100000);
    BiCH4 = BCH4;
    ANH3 = 0.42748 * alphaNH3 * (R * Math.pow(TcNH3, 2)) / (PcNH3 * 100000);
    BNH3 = 0.08664 * R * TcNH3 / (PcNH3 * 100000);
    BiNH3 = BNH3;
    AMG = 0.42748 * alphaMG * (R * Math.pow(TcMG, 2)) / (PcMG * 100000);
    BMG = 0.08664 * R * TcMG / (PcMG * 100000);
    BiMG = BMG;
    ////////////////////////////////
    //calculs des param�tres de repulsion et d'attraction de l'equation d'etat, a et b qui n'interviennent pas dans le calcul du coefficient de fugacit�
    grAbis = Math.pow(XMGbis, 2) * AMG + 2 * (1 - 0) * XMGbis * XH2bis * Math.pow(AMG * AH2, 0.5) + 2 * (1 - 0) * XMGbis * XCO2bis * Math.pow(AMG * ACO2, 0.5) + 2 * (1 - 0) * XMGbis * XN2bis * Math.pow(AMG * AN2, 0.5) + 2 * (1 - 0) * XMGbis * XH2Obis * Math.pow(AMG * AH2O, 0.5) + 2 * (1 - 0) * XMGbis * XCObis * Math.pow(AMG * ACO2, 0.5) + 2 * (1 - 0) * XMGbis * XCH4bis * Math.pow(AMG * ACH4, 0.5) + 2 * (1 - 0) * XMGbis * XNH3bis * Math.pow(AMG * ANH3, 0.5);
    grAsuite = Math.pow(XCH4bis, 2) * ACH4 + Math.pow(XNH3bis, 2) * ANH3 + 2 * (1 - 0) * XCH4bis * XCObis * Math.pow(ACO * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XH2Obis * Math.pow(AH2O * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XCO2bis * Math.pow(ACO2 * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XH2bis * Math.pow(AH2 * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XN2bis * Math.pow(AN2 * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XNH3bis * Math.pow(ANH3 * ACH4, 0.5) + 2 * (1 - 0) * XH2Obis * XNH3bis * Math.pow(ANH3 * AH2O, 0.5) + 2 * (1 - 0) * XCO2bis * XNH3bis * Math.pow(ANH3 * ACO2, 0.5) + 2 * (1 - 0) * XCObis * XNH3bis * Math.pow(ANH3 * ACO, 0.5) + 2 * (1 - 0) * XH2bis * XNH3bis * Math.pow(ANH3 * AH2, 0.5) + 2 * (1 - 0) * XN2bis * XNH3bis * Math.pow(ANH3 * AN2, 0.5) + grAbis;
    A = Math.pow(XH2Obis, 2) * AH2O + Math.pow(XCO2bis, 2) * ACO2 + 2 * (1 - 0) * XH2Obis * XCO2bis * Math.pow(AH2O * ACO2, 0.5) + Math.pow(XH2bis, 2) * AH2 + 2 * (1 - 0) * XH2Obis * XH2bis * Math.pow(AH2O * AH2, 0.5) + Math.pow(XN2bis, 2) * AN2 + 2 * (1 - 0) * XH2Obis * XN2bis * Math.pow(AH2O * AN2, 0.5) + 2 * (1 - 0) * XCO2bis * XH2bis * Math.pow(ACO2 * AH2, 0.5) + 2 * (1 - 0) * XCO2bis * XN2bis * Math.pow(ACO2 * AN2, 0.5) + 2 * (1 - 0) * XN2bis * XH2bis * Math.pow(AN2 * AH2, 0.5) + Math.pow(XCObis, 2) * ACO + 2 * (1 - 0) * XH2Obis * XCObis * Math.pow(AH2O * ACO, 0.5) + 2 * (1 - 0) * XCObis * XH2bis * Math.pow(ACO * AH2, 0.5) + 2 * (1 - 0) * XCObis * XN2bis * Math.pow(ACO * AN2, 0.5) + 2 * (1 - 0) * XCObis * XCO2bis * Math.pow(ACO * ACO2, 0.5) + grAsuite;
    B = XH2Obis * BH2O + XH2bis * BH2 + XCO2bis * BCO2 + XN2bis * BN2 + XCObis * BCO + XNH3bis * BNH3 + XCH4bis * BCH4 + XMGbis * BMG;
    ////////////////////////////
    //calcul de d�riv�s de XiXj(1-Kji)racine(aialphai*akalphak)
    grAbis = (XMGbis) * Math.pow(AH2 * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(AH2 * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * AH2, 0.5) + grAbis;
    ArH2 = ((XH2bis)) * AH2 + (1 - 0) * (XH2Obis) * Math.pow(AH2O * AH2, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * AH2, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * AH2, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * AH2, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(ACO2 * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(ACO2 * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * ACO2, 0.5) + grAbis;
    ArCO2 = ((XCO2bis)) * ACO2 + (1 - 0) * (XH2Obis) * Math.pow(AH2O * ACO2, 0.5) + (1 - 0) * (XH2bis) * Math.pow(ACO2 * AH2, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * ACO2, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * ACO2, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(AN2 * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(AN2 * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * AN2, 0.5) + grAbis;
    ArN2 = ((XN2bis)) * AN2 + (1 - 0) * (XH2Obis) * Math.pow(AH2O * AN2, 0.5) + (1 - 0) * (XH2bis) * Math.pow(AN2 * AH2, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(AN2 * ACO2, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * AN2, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(AH2O * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(AH2O * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * AH2O, 0.5) + grAbis;
    ArH2O = (XH2Obis) * AH2O + (1 - 0) * (XH2bis) * Math.pow(AH2O * AH2, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * AH2O, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * AH2O, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * AH2O, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(ACO * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(ACO * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * ACO, 0.5) + grAbis;
    ArCO = (XCObis) * ACO + (1 - 0) * (XH2Obis) * Math.pow(AH2O * ACO, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * ACO, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * ACO, 0.5) + (1 - 0) * (XH2bis) * Math.pow(ACO * AH2, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(ACH4 * AMG, 0.5);
    grAsuite = (1 - 0) * (XH2bis) * Math.pow(AH2 * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * ACH4, 0.5) + grAbis;
    ArCH4 = ((XCH4bis)) * ACH4 + (1 - 0) * (XH2Obis) * Math.pow(AH2O * ACH4, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * ACH4, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * ACH4, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * ACH4, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(ANH3 * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(ANH3 * ACH4, 0.5) + (1 - 0) * (XH2bis) * Math.pow(ANH3 * AH2, 0.5) + grAbis;
    ArNH3 = ((XNH3bis)) * ANH3 + (1 - 0) * (XH2Obis) * Math.pow(AH2O * ANH3, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * ANH3, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * ANH3, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * ANH3, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XNH3bis) * Math.pow(AMG * ANH3, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(AMG * ACH4, 0.5) + (1 - 0) * (XH2bis) * Math.pow(AMG * AH2, 0.5) + grAbis;
    ArMG = ((XMGbis)) * AMG + (1 - 0) * (XH2Obis) * Math.pow(AH2O * AMG, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * AMG, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * AMG, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * AMG, 0.5) + grAsuite;
    /////////////////////////////
    SB = BH2O + BH2 + BCO2 + BN2 + BCO + BNH3 + BCH4 + BMG;
    DVDXH2 = (-(R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * VN * Math.pow(VN - B, 2)) * SB + (VN - B) * VN * (Math.pow(VN, 2) - Math.pow(B, 2)) * ArH2) / (-R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * (2 * VN + B) * Math.pow(VN - B, 2));
    DVDXH2O = (-(R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * VN * Math.pow(VN - B, 2)) * SB + (VN - B) * VN * (Math.pow(VN, 2) - Math.pow(B, 2)) * ArH2O) / (-R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * (2 * VN + B) * Math.pow(VN - B, 2));
    DVDXCO2 = (-(R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * VN * Math.pow(VN - B, 2)) * SB + (VN - B) * VN * (Math.pow(VN, 2) - Math.pow(B, 2)) * ArCO2) / (-R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * (2 * VN + B) * Math.pow(VN - B, 2));
    DVDXCO = (-(R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * VN * Math.pow(VN - B, 2)) * SB + (VN - B) * VN * (Math.pow(VN, 2) - Math.pow(B, 2)) * ArCO) / (-R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * (2 * VN + B) * Math.pow(VN - B, 2));
    DVDXN2 = (-(R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * VN * Math.pow(VN - B, 2)) * SB + (VN - B) * VN * (Math.pow(VN, 2) - Math.pow(B, 2)) * ArN2) / (-R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * (2 * VN + B) * Math.pow(VN - B, 2));
    DVDXCH4 = (-(R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * VN * Math.pow(VN - B, 2)) * SB + (VN - B) * VN * (Math.pow(VN, 2) - Math.pow(B, 2)) * ArCH4) / (-R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * (2 * VN + B) * Math.pow(VN - B, 2));
    DVDXNH3 = (-(R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * VN * Math.pow(VN - B, 2)) * SB + (VN - B) * VN * (Math.pow(VN, 2) - Math.pow(B, 2)) * ArNH3) / (-R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * (2 * VN + B) * Math.pow(VN - B, 2));
    DVDXMG = (-(R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * VN * Math.pow(VN - B, 2)) * SB + (VN - B) * VN * (Math.pow(VN, 2) - Math.pow(B, 2)) * ArMG) / (-R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * (2 * VN + B) * Math.pow(VN - B, 2));

    VCO2M = (VN * 1 * (XCO2bis) - 1 * (XCO2bis - 0 * XCO2bis) * 1 / 3 / 8 / 2 * DVDXCO2) * 1000000;
    VCOM = (VN * 1 * (XCObis) - 1 * (XCObis - 0 * XCObis) * 1 / 3 / 8 / 2 * DVDXCO) * 1000000;
    VH2M = (VN * 1 * (XH2bis) - 1 * (XH2bis - 0 * XH2bis) * 1 / 3 / 8 / 2 * DVDXH2) * 1000000;
    VN2M = (VN * 1 * (XN2bis) - 1 * (XN2bis - 0 * XN2bis) * 1 / 3 / 8 / 2 * DVDXN2) * 1000000;
    VCH4M = (VN * 1 * (XCH4bis) - 1 * (XCH4bis - 0 * XCH4bis) * 1 / 3 / 8 / 2 * DVDXCH4) * 1000000;
    VNH3M = (VN * 1 * (XNH3bis) - 1 * (XNH3bis - 0 * XNH3bis) * 1 / 3 / 8 / 2 * DVDXNH3) * 1000000;
    VH2OM = (VN * 1 * (XH2Obis) - 1 * (XH2Obis - 0 * XH2Obis) * 1 / 3 / 8 / 2 * DVDXH2O) * 1000000;
    VMGM = (VN * 1 * (XMGbis) - 1 * (XMGbis - 0 * XMGbis) * 1 / 3 / 8 / 2 * DVDXMG) * 1000000;
    //calcul de somme de Xk(1-Kki)racine(aialphai*akalphak)  (avant le 2 dans le calcul du coefficient de fugacit� de l'esp�ce k)
    grAbis = (XMGbis) * Math.pow(AH2 * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(AH2 * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * AH2, 0.5) + grAbis;
    ArH2 = ((XH2bis)) * AH2 + (1 - 0) * (XH2Obis) * Math.pow(AH2O * AH2, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * AH2, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * AH2, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * AH2, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(ACO2 * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(ACO2 * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * ACO2, 0.5) + grAbis;
    ArCO2 = ((XCO2bis)) * ACO2 + (1 - 0) * (XH2Obis) * Math.pow(AH2O * ACO2, 0.5) + (1 - 0) * (XH2bis) * Math.pow(ACO2 * AH2, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * ACO2, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * ACO2, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(AN2 * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(AN2 * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * AN2, 0.5) + grAbis;
    ArN2 = ((XN2bis)) * AN2 + (1 - 0) * (XH2Obis) * Math.pow(AH2O * AN2, 0.5) + (1 - 0) * (XH2bis) * Math.pow(AN2 * AH2, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(AN2 * ACO2, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * AN2, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(AH2O * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(AH2O * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * AH2O, 0.5) + grAbis;
    ArH2O = (XH2Obis) * AH2O + (1 - 0) * (XH2bis) * Math.pow(AH2O * AH2, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * AH2O, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * AH2O, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * AH2O, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(ACO * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(ACO * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * ACO, 0.5) + grAbis;
    ArCO = (XCObis) * ACO + (1 - 0) * (XH2Obis) * Math.pow(AH2O * ACO, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * ACO, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * ACO, 0.5) + (1 - 0) * (XH2bis) * Math.pow(ACO * AH2, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(ACH4 * AMG, 0.5);
    grAsuite = (1 - 0) * (XH2bis) * Math.pow(AH2 * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * ACH4, 0.5) + grAbis;
    ArCH4 = ((XCH4bis)) * ACH4 + (1 - 0) * (XH2Obis) * Math.pow(AH2O * ACH4, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * ACH4, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * ACH4, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * ACH4, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(ANH3 * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(ANH3 * ACH4, 0.5) + (1 - 0) * (XH2bis) * Math.pow(ANH3 * AH2, 0.5) + grAbis;
    ArNH3 = ((XNH3bis)) * ANH3 + (1 - 0) * (XH2Obis) * Math.pow(AH2O * ANH3, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * ANH3, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * ANH3, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * ANH3, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XNH3bis) * Math.pow(AMG * ANH3, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(AMG * ACH4, 0.5) + (1 - 0) * (XH2bis) * Math.pow(AMG * AH2, 0.5) + grAbis;
    ArMG = ((XMGbis)) * AMG + (1 - 0) * (XH2Obis) * Math.pow(AH2O * AMG, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * AMG, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * AMG, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * AMG, 0.5) + grAsuite;
    //calculs des param�tres de repulsion et d'attraction de l'equation d'etat, Ai et Bi qui interviennent dans le calcul du coefficient de fugacit�
    AH2 = 0.42748 * alphaH2 * Math.pow(TcH2, 2) / (PcH2 * 100000) * P / Math.pow(T, 2); //avec Tr=T/Tc et Pr=P/Pc
    BH2 = 0.08664 * TcH2 / (PcH2 * 100000) * P / (T);
    ACO2 = 0.42748 * alphaCO2 * Math.pow(TcCO2, 2) / (PcCO2 * 100000) * P / Math.pow(T, 2);
    BCO2 = 0.08664 * TcCO2 / (PcCO2 * 100000) * P / (T);
    AN2 = 0.42748 * alphaN2 * Math.pow(TcN2, 2) / (PcN2 * 100000) * P / Math.pow(T, 2);
    BN2 = 0.08664 * TcN2 / (PcN2 * 100000) * P / (T);
    AH2O = 0.42748 * alphaH2O * Math.pow(TcH2O, 2) / (PcH2O * 100000) * P / Math.pow(T, 2);
    BH2O = 0.08664 * TcH2O / (PcH2O * 100000) * P / (T);
    ACO = 0.42748 * alphaCO * Math.pow(TcCO, 2) / (PcCO * 100000) * P / Math.pow(T, 2);
    BCO = 0.08664 * TcCO / (PcCO * 100000) * P / (T);
    ACH4 = 0.42748 * alphaCH4 * Math.pow(TcCH4, 2) / (PcCH4 * 100000) * P / Math.pow(T, 2);
    BCH4 = 0.08664 * TcCH4 / (PcCH4 * 100000) * P / (T);
    ANH3 = 0.42748 * alphaNH3 * Math.pow(TcNH3, 2) / (PcNH3 * 100000) * P / Math.pow(T, 2);
    BNH3 = 0.08664 * TcNH3 / (PcNH3 * 100000) * P / (T);
    AMG = 0.42748 * alphaMG * Math.pow(TcMG, 2) / (PcMG * 100000) * P / Math.pow(T, 2);
    BMG = 0.08664 * TcMG / (PcMG * 100000) * P / (T);
    ///////////////////////////////////
    //calculs des param�tres de repulsion et d'attraction de l'equation d'etat, A et B qui interviennent dans le calcul du coefficient de fugacit�
    grAbis = Math.pow(XMGbis, 2) * AMG + 2 * (1 - 0) * XMGbis * XH2bis * Math.pow(AMG * AH2, 0.5) + 2 * (1 - 0) * XMGbis * XCO2bis * Math.pow(AMG * ACO2, 0.5) + 2 * (1 - 0) * XMGbis * XN2bis * Math.pow(AMG * AN2, 0.5) + 2 * (1 - 0) * XMGbis * XH2Obis * Math.pow(AMG * AH2O, 0.5) + 2 * (1 - 0) * XMGbis * XCObis * Math.pow(AMG * ACO2, 0.5) + 2 * (1 - 0) * XMGbis * XCH4bis * Math.pow(AMG * ACH4, 0.5) + 2 * (1 - 0) * XMGbis * XNH3bis * Math.pow(AMG * ANH3, 0.5);
    grAsuite = Math.pow(XCH4bis, 2) * ACH4 + Math.pow(XNH3bis, 2) * ANH3 + 2 * (1 - 0) * XCH4bis * XCObis * Math.pow(ACO * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XH2Obis * Math.pow(AH2O * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XCO2bis * Math.pow(ACO2 * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XH2bis * Math.pow(AH2 * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XN2bis * Math.pow(AN2 * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XNH3bis * Math.pow(ANH3 * ACH4, 0.5) + 2 * (1 - 0) * XH2Obis * XNH3bis * Math.pow(ANH3 * AH2O, 0.5) + 2 * (1 - 0) * XCO2bis * XNH3bis * Math.pow(ANH3 * ACO2, 0.5) + 2 * (1 - 0) * XCObis * XNH3bis * Math.pow(ANH3 * ACO, 0.5) + 2 * (1 - 0) * XH2bis * XNH3bis * Math.pow(ANH3 * AH2, 0.5) + 2 * (1 - 0) * XN2bis * XNH3bis * Math.pow(ANH3 * AN2, 0.5) + grAbis;
    GRA = Math.pow(XH2Obis, 2) * AH2O + Math.pow(XCO2bis, 2) * ACO2 + 2 * (1 - 0) * XH2Obis * XCO2bis * Math.pow(AH2O * ACO2, 0.5) + Math.pow(XH2bis, 2) * AH2 + 2 * (1 - 0) * XH2Obis * XH2bis * Math.pow(AH2O * AH2, 0.5) + Math.pow(XN2bis, 2) * AN2 + 2 * (1 - 0) * XH2Obis * XN2bis * Math.pow(AH2O * AN2, 0.5) + 2 * (1 - 0) * XCO2bis * XH2bis * Math.pow(ACO2 * AH2, 0.5) + 2 * (1 - 0) * XCO2bis * XN2bis * Math.pow(ACO2 * AN2, 0.5) + 2 * (1 - 0) * XN2bis * XH2bis * Math.pow(AN2 * AH2, 0.5) + Math.pow(XCObis, 2) * ACO + 2 * (1 - 0) * XH2Obis * XCObis * Math.pow(AH2O * ACO, 0.5) + 2 * (1 - 0) * XCObis * XH2bis * Math.pow(ACO * AH2, 0.5) + 2 * (1 - 0) * XCObis * XN2bis * Math.pow(ACO * AN2, 0.5) + 2 * (1 - 0) * XCObis * XCO2bis * Math.pow(ACO * ACO2, 0.5) + grAsuite;
    GRB = XH2Obis * BH2O + XH2bis * BH2 + XCO2bis * BCO2 + XN2bis * BN2 + XCObis * BCO + XNH3bis * BNH3 + XCH4bis * BCH4 + XMGbis * BMG;
    //calculs des coefficients de fugacit�s   
    //logFIH2Osoave = ZN - 1 - Log(ZN - GRB) - GRA / GRB * Log((ZN + GRB) / ZN)
    //FIH2Oincsoave = 10 ^ (logFIH2Osoave / 2.303)
    //Worksheets(1).Range("C31").Value = FIH2Oincsoave
    logFIH2O = (BH2O / GRB * (ZN - 1) - Math.log(ZN - GRB) + GRA / GRB * (BH2O / GRB - 2 / A * ArH2O) * Math.log(1 + GRB / ZN));
    FIH2Oinc = Math.exp(logFIH2O);
    FUH2Oinc = FIH2Oinc * P * XH2Obis;
    FUH2Oi = FUH2Oinc * 0.00001;
    logFIH2 = (BH2 / GRB * (ZN - 1) - Math.log(ZN - GRB) + GRA / GRB * (BH2 / GRB - 2 / A * ArH2) * Math.log(1 + GRB / ZN));
    FIH2inc = Math.exp(logFIH2);
    FUH2inc = FIH2inc * P * XH2bis;
    FUH2i = FUH2inc * 0.00001;
    logFICO = (BCO / GRB * (ZN - 1) - Math.log(ZN - GRB) + GRA / GRB * (BCO / GRB - 2 / A * ArCO) * Math.log(1 + GRB / ZN));
    FICOinc = Math.exp(logFICO);
    FUCOinc = FICOinc * P * XCObis;
    FUCOi = FUCOinc * 0.00001;
    logFICO2 = (BCO2 / GRB * (ZN - 1) - Math.log(ZN - GRB) + GRA / GRB * (BCO2 / GRB - 2 / A * ArCO2) * Math.log(1 + GRB / ZN));
    FICO2inc = Math.exp(logFICO2);
    FUCO2inc = FICO2inc * P * XCO2bis;
    FUCO2i = FUCO2inc * 0.00001; //la m�me chose mais en bar
    logFIN2 = (BN2 / GRB * (ZN - 1) - Math.log(ZN - GRB) + GRA / GRB * (BN2 / GRB - 2 / A * ArN2) * Math.log(1 + GRB / ZN));
    FIN2inc = Math.exp(logFIN2);
    FUN2inc = FIN2inc * P * XN2bis;
    FUN2i = FUN2inc * 0.00001;
    logFICH4 = (BCH4 / GRB * (ZN - 1) - Math.log(ZN - GRB) + GRA / GRB * (BCH4 / GRB - 2 / A * ArCH4) * Math.log(1 + GRB / ZN));
    FICH4inc = Math.exp(logFICH4);
    FUCH4inc = FICH4inc * P * XCH4bis;
    FUCH4i = FUCH4inc * 0.00001;
    logFINH3 = (BNH3 / GRB * (ZN - 1) - Math.log(ZN - GRB) + GRA / GRB * (BNH3 / GRB - 2 / A * ArNH3) * Math.log(1 + GRB / ZN));
    FINH3inc = Math.exp(logFINH3);
    FUNH3inc = FINH3inc * P * XNH3bis;
    FUNH3i = FUNH3inc * 0.00001;
    logFIMG = (BMG / GRB * (ZN - 1) - Math.log(ZN - GRB) + GRA / GRB * (BMG / GRB - 2 / A * ArMG) * Math.log(1 + GRB / ZN));
    FIMGinc = Math.exp(logFIMG);
    FUMGinc = FIMGinc * P * XMGbis;
    FUMGi = FUMGinc * 0.00001;
    ///////////////////////////
    $("#6-11").text(Number((FUMGi).toFixed(5)).toString());
    ////////////////////////////////////////
    /////////////////////////////////////////
    XH2Obis = 0;
    XCO2bis = 0;
    XCObis = 0;
    XH2bis = 0;
    XN2bis = 0;
    XCH4bis = 1;
    XNH3bis = 0;
    XMGbis = 0;
    Pb = parseFloat($("#0-1").text());
    P = Pb * 100000; //passage de la pression de bar en Pa
    T = parseFloat($("#1-1").text()) + 273.15;
    TcH2O = parseFloat($("#2-4").text()); //temp�rature critique de H2O dans la cellule J8
    PcH2O = parseFloat($("#2-3").text()); //pression critique de H2O
    TcCO2 = parseFloat($("#3-4").text());
    PcCO2 = parseFloat($("#3-3").text());
    TcCO = parseFloat($("#4-4").text());
    PcCO = parseFloat($("#4-3").text());
    TcH2 = parseFloat($("#1-4").text());
    PcH2 = parseFloat($("#1-3").text());
    TcN2 = parseFloat($("#7-4").text());
    PcN2 = parseFloat($("#7-3").text());
    TcCH4 = parseFloat($("#5-4").text());
    PcCH4 = parseFloat($("#5-3").text());
    TcNH3 = parseFloat($("#8-4").text());
    PcNH3 = parseFloat($("#8-3").text());
    TcMG = parseFloat($("#6-4").text());
    PcMG = parseFloat($("#6-3").text());
    R = 8.314472; //constante des gaz parfaits
    ///////////////////////////////////////////////
    //calcul des facteurs acentriques
    wH2O = parseFloat($("#2-5").text());
    nH2O = 0.48508 + 1.55171 * wH2O - 0.15613 * Math.pow(wH2O, 2);
    alphaH2O = Math.pow(1 + nH2O * (1 - Math.pow(T / TcH2O, 0.5)), 2);
    wCO2 = parseFloat($("#3-5").text());
    nCO2 = 0.48508 + 1.55171 * wCO2 - 0.15613 * Math.pow(wCO2, 2);
    alphaCO2 = Math.pow(1 + nCO2 * (1 - Math.pow(T / TcCO2, 0.5)), 2);
    wCO = parseFloat($("#4-5").text());
    nCO = 0.48508 + 1.55171 * wCO - 0.15613 * Math.pow(wCO, 2);
    alphaCO = Math.pow(1 + nCO * (1 - Math.pow(T / TcCO, 0.5)), 2);
    wH2 = parseFloat($("#1-5").text());
    nH2 = 0.48508 + 1.55171 * wH2 - 0.15613 * Math.pow(wH2, 2);
    alphaH2 = Math.pow(1 + nH2 * (1 - Math.pow(T / TcH2, 0.5)), 2);
    wN2 = parseFloat($("#7-5").text());
    nN2 = 0.48508 + 1.55171 * wN2 - 0.15613 * Math.pow(wN2, 2);
    alphaN2 = Math.pow(1 + nN2 * (1 - Math.pow(T / TcN2, 0.5)), 2);
    wCH4 = parseFloat($("#5-5").text());
    nCH4 = 0.48508 + 1.55171 * wCH4 - 0.15613 * Math.pow(wCH4, 2);
    alphaCH4 = Math.pow(1 + nCH4 * (1 - Math.pow(T / TcCH4, 0.5)), 2);
    wNH3 = parseFloat($("#8-5").text());
    nNH3 = 0.48508 + 1.55171 * wNH3 - 0.15613 * Math.pow(wNH3, 2);
    alphaNH3 = Math.pow(1 + nNH3 * (1 - Math.pow(T / TcNH3, 0.5)), 2);
    wMG = parseFloat($("#6-5").text());
    nMG = 0.48508 + 1.55171 * wMG - 0.15613 * Math.pow(wMG, 2);
    alphaMG = Math.pow(1 + nMG * (1 - Math.pow(T / TcMG, 0.5)), 2);
    /////////////////////////
    AH2 = 0.42748 * alphaH2 * Math.pow(TcH2, 2) / (PcH2 * 100000) * P / Math.pow(T, 2); //avec Tr=T/Tc et Pr=P/Pc
    BH2 = 0.08664 * TcH2 / (PcH2 * 100000) * P / (T);
    ACO2 = 0.42748 * alphaCO2 * Math.pow(TcCO2, 2) / (PcCO2 * 100000) * P / Math.pow(T, 2);
    BCO2 = 0.08664 * TcCO2 / (PcCO2 * 100000) * P / (T);
    AN2 = 0.42748 * alphaN2 * Math.pow(TcN2, 2) / (PcN2 * 100000) * P / Math.pow(T, 2);
    BN2 = 0.08664 * TcN2 / (PcN2 * 100000) * P / (T);
    AH2O = 0.42748 * alphaH2O * Math.pow(TcH2O, 2) / (PcH2O * 100000) * P / Math.pow(T, 2);
    BH2O = 0.08664 * TcH2O / (PcH2O * 100000) * P / (T);
    ACO = 0.42748 * alphaCO * Math.pow(TcCO, 2) / (PcCO * 100000) * P / Math.pow(T, 2);
    BCO = 0.08664 * TcCO / (PcCO * 100000) * P / (T);
    ACH4 = 0.42748 * alphaCH4 * Math.pow(TcCH4, 2) / (PcCH4 * 100000) * P / Math.pow(T, 2);
    BCH4 = 0.08664 * TcCH4 / (PcCH4 * 100000) * P / (T);
    ANH3 = 0.42748 * alphaNH3 * Math.pow(TcNH3, 2) / (PcNH3 * 100000) * P / Math.pow(T, 2);
    BNH3 = 0.08664 * TcNH3 / (PcNH3 * 100000) * P / (T);
    AMG = 0.42748 * alphaMG * Math.pow(TcMG, 2) / (PcMG * 100000) * P / Math.pow(T, 2);
    BMG = 0.08664 * TcMG / (PcMG * 100000) * P / (T);
    ///////////////////////////////////
    grAbis = Math.pow(XMGbis, 2) * AMG + 2 * (1 - 0) * XMGbis * XH2bis * Math.pow(AMG * AH2, 0.5) + 2 * (1 - 0) * XMGbis * XCO2bis * Math.pow(AMG * ACO2, 0.5) + 2 * (1 - 0) * XMGbis * XN2bis * Math.pow(AMG * AN2, 0.5) + 2 * (1 - 0) * XMGbis * XH2Obis * Math.pow(AMG * AH2O, 0.5) + 2 * (1 - 0) * XMGbis * XCObis * Math.pow(AMG * ACO2, 0.5) + 2 * (1 - 0) * XMGbis * XCH4bis * Math.pow(AMG * ACH4, 0.5) + 2 * (1 - 0) * XMGbis * XNH3bis * Math.pow(AMG * ANH3, 0.5);
    grAsuite = Math.pow(XCH4bis, 2) * ACH4 + Math.pow(XNH3bis, 2) * ANH3 + 2 * (1 - 0) * XCH4bis * XCObis * Math.pow(ACO * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XH2Obis * Math.pow(AH2O * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XCO2bis * Math.pow(ACO2 * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XH2bis * Math.pow(AH2 * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XN2bis * Math.pow(AN2 * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XNH3bis * Math.pow(ANH3 * ACH4, 0.5) + 2 * (1 - 0) * XH2Obis * XNH3bis * Math.pow(ANH3 * AH2O, 0.5) + 2 * (1 - 0) * XCO2bis * XNH3bis * Math.pow(ANH3 * ACO2, 0.5) + 2 * (1 - 0) * XCObis * XNH3bis * Math.pow(ANH3 * ACO, 0.5) + 2 * (1 - 0) * XH2bis * XNH3bis * Math.pow(ANH3 * AH2, 0.5) + 2 * (1 - 0) * XN2bis * XNH3bis * Math.pow(ANH3 * AN2, 0.5) + grAbis;
    GRA = Math.pow(XH2Obis, 2) * AH2O + Math.pow(XCO2bis, 2) * ACO2 + 2 * (1 - 0) * XH2Obis * XCO2bis * Math.pow(AH2O * ACO2, 0.5) + Math.pow(XH2bis, 2) * AH2 + 2 * (1 - 0) * XH2Obis * XH2bis * Math.pow(AH2O * AH2, 0.5) + Math.pow(XN2bis, 2) * AN2 + 2 * (1 - 0) * XH2Obis * XN2bis * Math.pow(AH2O * AN2, 0.5) + 2 * (1 - 0) * XCO2bis * XH2bis * Math.pow(ACO2 * AH2, 0.5) + 2 * (1 - 0) * XCO2bis * XN2bis * Math.pow(ACO2 * AN2, 0.5) + 2 * (1 - 0) * XN2bis * XH2bis * Math.pow(AN2 * AH2, 0.5) + Math.pow(XCObis, 2) * ACO + 2 * (1 - 0) * XH2Obis * XCObis * Math.pow(AH2O * ACO, 0.5) + 2 * (1 - 0) * XCObis * XH2bis * Math.pow(ACO * AH2, 0.5) + 2 * (1 - 0) * XCObis * XN2bis * Math.pow(ACO * AN2, 0.5) + 2 * (1 - 0) * XCObis * XCO2bis * Math.pow(ACO * ACO2, 0.5) + grAsuite;
    GRB = XH2Obis * BH2O + XH2bis * BH2 + XCO2bis * BCO2 + XN2bis * BN2 + XCObis * BCO + XNH3bis * BNH3 + XCH4bis * BCH4 + XMGbis * BMG;
    //////////////////////////////////
    test = 10;
    ZN = 1000.01; //initialisation NR � changer si plantage
    while (test > 0.000000001)
    {
        FZ = Math.pow(ZN, 3) - Math.pow(ZN, 2) + (GRA - Math.pow(GRB, 2) - GRB) * ZN - GRA * GRB;
        FpZ = 3 * Math.pow(ZN, 2) - 2 * ZN + (GRA - Math.pow(GRB, 2) - GRB);
        ZN1 = ZN - FZ / FpZ;
        test = Math.abs(ZN1 - ZN);
        ZN = ZN1;
    }
    VN = (ZN * R * T / P);
    V = VN * 1000000;
    /////////////////////////////////////////
    //calculs des param�tres de repulsion et d'attraction de l'equation d'etat, aialphai et bialphai qui interviennent dans le calcul des coefficients de fugacit�
    AH2 = 0.42748 * alphaH2 * (R * Math.pow(TcH2, 2)) / (PcH2 * 100000);
    BH2 = 0.08664 * R * TcH2 / (PcH2 * 100000);
    BiH2 = BH2; //stockage de bialphai
    ACO2 = 0.42748 * alphaCO2 * (R * Math.pow(TcCO2, 2)) / (PcCO2 * 100000);
    BCO2 = 0.08664 * R * TcCO2 / (PcCO2 * 100000);
    BiCO2 = BCO2;
    AN2 = 0.42748 * alphaN2 * (R * Math.pow(TcN2, 2)) / (PcN2 * 100000);
    BN2 = 0.08664 * R * TcN2 / (PcN2 * 100000);
    BiN2 = BN2;
    AH2O = 0.42748 * alphaH2O * (R * Math.pow(TcH2O, 2)) / (PcH2O * 100000);
    BH2O = 0.08664 * R * TcH2O / (PcH2O * 100000);
    BiH2O = BH2O;
    ACO = 0.42748 * alphaCO * (R * Math.pow(TcCO, 2)) / (PcCO * 100000);
    BCO = 0.08664 * R * TcCO / (PcCO * 100000);
    BiCO = BCO;
    ACH4 = 0.42748 * alphaCH4 * (R * Math.pow(TcCH4, 2)) / (PcCH4 * 100000);
    BCH4 = 0.08664 * R * TcCH4 / (PcCH4 * 100000);
    BiCH4 = BCH4;
    ANH3 = 0.42748 * alphaNH3 * (R * Math.pow(TcNH3, 2)) / (PcNH3 * 100000);
    BNH3 = 0.08664 * R * TcNH3 / (PcNH3 * 100000);
    BiNH3 = BNH3;
    AMG = 0.42748 * alphaMG * (R * Math.pow(TcMG, 2)) / (PcMG * 100000);
    BMG = 0.08664 * R * TcMG / (PcMG * 100000);
    BiMG = BMG;
    ////////////////////////////////
    //calculs des param�tres de repulsion et d'attraction de l'equation d'etat, a et b qui n'interviennent pas dans le calcul du coefficient de fugacit�
    grAbis = Math.pow(XMGbis, 2) * AMG + 2 * (1 - 0) * XMGbis * XH2bis * Math.pow(AMG * AH2, 0.5) + 2 * (1 - 0) * XMGbis * XCO2bis * Math.pow(AMG * ACO2, 0.5) + 2 * (1 - 0) * XMGbis * XN2bis * Math.pow(AMG * AN2, 0.5) + 2 * (1 - 0) * XMGbis * XH2Obis * Math.pow(AMG * AH2O, 0.5) + 2 * (1 - 0) * XMGbis * XCObis * Math.pow(AMG * ACO2, 0.5) + 2 * (1 - 0) * XMGbis * XCH4bis * Math.pow(AMG * ACH4, 0.5) + 2 * (1 - 0) * XMGbis * XNH3bis * Math.pow(AMG * ANH3, 0.5);
    grAsuite = Math.pow(XCH4bis, 2) * ACH4 + Math.pow(XNH3bis, 2) * ANH3 + 2 * (1 - 0) * XCH4bis * XCObis * Math.pow(ACO * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XH2Obis * Math.pow(AH2O * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XCO2bis * Math.pow(ACO2 * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XH2bis * Math.pow(AH2 * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XN2bis * Math.pow(AN2 * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XNH3bis * Math.pow(ANH3 * ACH4, 0.5) + 2 * (1 - 0) * XH2Obis * XNH3bis * Math.pow(ANH3 * AH2O, 0.5) + 2 * (1 - 0) * XCO2bis * XNH3bis * Math.pow(ANH3 * ACO2, 0.5) + 2 * (1 - 0) * XCObis * XNH3bis * Math.pow(ANH3 * ACO, 0.5) + 2 * (1 - 0) * XH2bis * XNH3bis * Math.pow(ANH3 * AH2, 0.5) + 2 * (1 - 0) * XN2bis * XNH3bis * Math.pow(ANH3 * AN2, 0.5) + grAbis;
    A = Math.pow(XH2Obis, 2) * AH2O + Math.pow(XCO2bis, 2) * ACO2 + 2 * (1 - 0) * XH2Obis * XCO2bis * Math.pow(AH2O * ACO2, 0.5) + Math.pow(XH2bis, 2) * AH2 + 2 * (1 - 0) * XH2Obis * XH2bis * Math.pow(AH2O * AH2, 0.5) + Math.pow(XN2bis, 2) * AN2 + 2 * (1 - 0) * XH2Obis * XN2bis * Math.pow(AH2O * AN2, 0.5) + 2 * (1 - 0) * XCO2bis * XH2bis * Math.pow(ACO2 * AH2, 0.5) + 2 * (1 - 0) * XCO2bis * XN2bis * Math.pow(ACO2 * AN2, 0.5) + 2 * (1 - 0) * XN2bis * XH2bis * Math.pow(AN2 * AH2, 0.5) + Math.pow(XCObis, 2) * ACO + 2 * (1 - 0) * XH2Obis * XCObis * Math.pow(AH2O * ACO, 0.5) + 2 * (1 - 0) * XCObis * XH2bis * Math.pow(ACO * AH2, 0.5) + 2 * (1 - 0) * XCObis * XN2bis * Math.pow(ACO * AN2, 0.5) + 2 * (1 - 0) * XCObis * XCO2bis * Math.pow(ACO * ACO2, 0.5) + grAsuite;
    B = XH2Obis * BH2O + XH2bis * BH2 + XCO2bis * BCO2 + XN2bis * BN2 + XCObis * BCO + XNH3bis * BNH3 + XCH4bis * BCH4 + XMGbis * BMG;
    ////////////////////////////
    //calcul de d�riv�s de XiXj(1-Kji)racine(aialphai*akalphak)
    grAbis = (XMGbis) * Math.pow(AH2 * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(AH2 * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * AH2, 0.5) + grAbis;
    ArH2 = ((XH2bis)) * AH2 + (1 - 0) * (XH2Obis) * Math.pow(AH2O * AH2, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * AH2, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * AH2, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * AH2, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(ACO2 * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(ACO2 * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * ACO2, 0.5) + grAbis;
    ArCO2 = ((XCO2bis)) * ACO2 + (1 - 0) * (XH2Obis) * Math.pow(AH2O * ACO2, 0.5) + (1 - 0) * (XH2bis) * Math.pow(ACO2 * AH2, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * ACO2, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * ACO2, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(AN2 * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(AN2 * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * AN2, 0.5) + grAbis;
    ArN2 = ((XN2bis)) * AN2 + (1 - 0) * (XH2Obis) * Math.pow(AH2O * AN2, 0.5) + (1 - 0) * (XH2bis) * Math.pow(AN2 * AH2, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(AN2 * ACO2, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * AN2, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(AH2O * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(AH2O * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * AH2O, 0.5) + grAbis;
    ArH2O = (XH2Obis) * AH2O + (1 - 0) * (XH2bis) * Math.pow(AH2O * AH2, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * AH2O, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * AH2O, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * AH2O, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(ACO * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(ACO * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * ACO, 0.5) + grAbis;
    ArCO = (XCObis) * ACO + (1 - 0) * (XH2Obis) * Math.pow(AH2O * ACO, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * ACO, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * ACO, 0.5) + (1 - 0) * (XH2bis) * Math.pow(ACO * AH2, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(ACH4 * AMG, 0.5);
    grAsuite = (1 - 0) * (XH2bis) * Math.pow(AH2 * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * ACH4, 0.5) + grAbis;
    ArCH4 = ((XCH4bis)) * ACH4 + (1 - 0) * (XH2Obis) * Math.pow(AH2O * ACH4, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * ACH4, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * ACH4, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * ACH4, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(ANH3 * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(ANH3 * ACH4, 0.5) + (1 - 0) * (XH2bis) * Math.pow(ANH3 * AH2, 0.5) + grAbis;
    ArNH3 = ((XNH3bis)) * ANH3 + (1 - 0) * (XH2Obis) * Math.pow(AH2O * ANH3, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * ANH3, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * ANH3, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * ANH3, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XNH3bis) * Math.pow(AMG * ANH3, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(AMG * ACH4, 0.5) + (1 - 0) * (XH2bis) * Math.pow(AMG * AH2, 0.5) + grAbis;
    ArMG = ((XMGbis)) * AMG + (1 - 0) * (XH2Obis) * Math.pow(AH2O * AMG, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * AMG, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * AMG, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * AMG, 0.5) + grAsuite;
    /////////////////////////////
    SB = BH2O + BH2 + BCO2 + BN2 + BCO + BNH3 + BCH4 + BMG;
    DVDXH2 = (-(R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * VN * Math.pow(VN - B, 2)) * SB + (VN - B) * VN * (Math.pow(VN, 2) - Math.pow(B, 2)) * ArH2) / (-R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * (2 * VN + B) * Math.pow(VN - B, 2));
    DVDXH2O = (-(R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * VN * Math.pow(VN - B, 2)) * SB + (VN - B) * VN * (Math.pow(VN, 2) - Math.pow(B, 2)) * ArH2O) / (-R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * (2 * VN + B) * Math.pow(VN - B, 2));
    DVDXCO2 = (-(R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * VN * Math.pow(VN - B, 2)) * SB + (VN - B) * VN * (Math.pow(VN, 2) - Math.pow(B, 2)) * ArCO2) / (-R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * (2 * VN + B) * Math.pow(VN - B, 2));
    DVDXCO = (-(R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * VN * Math.pow(VN - B, 2)) * SB + (VN - B) * VN * (Math.pow(VN, 2) - Math.pow(B, 2)) * ArCO) / (-R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * (2 * VN + B) * Math.pow(VN - B, 2));
    DVDXN2 = (-(R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * VN * Math.pow(VN - B, 2)) * SB + (VN - B) * VN * (Math.pow(VN, 2) - Math.pow(B, 2)) * ArN2) / (-R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * (2 * VN + B) * Math.pow(VN - B, 2));
    DVDXCH4 = (-(R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * VN * Math.pow(VN - B, 2)) * SB + (VN - B) * VN * (Math.pow(VN, 2) - Math.pow(B, 2)) * ArCH4) / (-R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * (2 * VN + B) * Math.pow(VN - B, 2));
    DVDXNH3 = (-(R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * VN * Math.pow(VN - B, 2)) * SB + (VN - B) * VN * (Math.pow(VN, 2) - Math.pow(B, 2)) * ArNH3) / (-R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * (2 * VN + B) * Math.pow(VN - B, 2));
    DVDXMG = (-(R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * VN * Math.pow(VN - B, 2)) * SB + (VN - B) * VN * (Math.pow(VN, 2) - Math.pow(B, 2)) * ArMG) / (-R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * (2 * VN + B) * Math.pow(VN - B, 2));

    VCO2M = (VN * 1 * (XCO2bis) - 1 * (XCO2bis - 0 * XCO2bis) * 1 / 3 / 8 / 2 * DVDXCO2) * 1000000;
    VCOM = (VN * 1 * (XCObis) - 1 * (XCObis - 0 * XCObis) * 1 / 3 / 8 / 2 * DVDXCO) * 1000000;
    VH2M = (VN * 1 * (XH2bis) - 1 * (XH2bis - 0 * XH2bis) * 1 / 3 / 8 / 2 * DVDXH2) * 1000000;
    VN2M = (VN * 1 * (XN2bis) - 1 * (XN2bis - 0 * XN2bis) * 1 / 3 / 8 / 2 * DVDXN2) * 1000000;
    VCH4M = (VN * 1 * (XCH4bis) - 1 * (XCH4bis - 0 * XCH4bis) * 1 / 3 / 8 / 2 * DVDXCH4) * 1000000;
    VNH3M = (VN * 1 * (XNH3bis) - 1 * (XNH3bis - 0 * XNH3bis) * 1 / 3 / 8 / 2 * DVDXNH3) * 1000000;
    VH2OM = (VN * 1 * (XH2Obis) - 1 * (XH2Obis - 0 * XH2Obis) * 1 / 3 / 8 / 2 * DVDXH2O) * 1000000;
    VMGM = (VN * 1 * (XMGbis) - 1 * (XMGbis - 0 * XMGbis) * 1 / 3 / 8 / 2 * DVDXMG) * 1000000;
    //calcul de somme de Xk(1-Kki)racine(aialphai*akalphak)  (avant le 2 dans le calcul du coefficient de fugacit� de l'esp�ce k)
    grAbis = (XMGbis) * Math.pow(AH2 * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(AH2 * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * AH2, 0.5) + grAbis;
    ArH2 = ((XH2bis)) * AH2 + (1 - 0) * (XH2Obis) * Math.pow(AH2O * AH2, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * AH2, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * AH2, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * AH2, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(ACO2 * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(ACO2 * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * ACO2, 0.5) + grAbis;
    ArCO2 = ((XCO2bis)) * ACO2 + (1 - 0) * (XH2Obis) * Math.pow(AH2O * ACO2, 0.5) + (1 - 0) * (XH2bis) * Math.pow(ACO2 * AH2, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * ACO2, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * ACO2, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(AN2 * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(AN2 * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * AN2, 0.5) + grAbis;
    ArN2 = ((XN2bis)) * AN2 + (1 - 0) * (XH2Obis) * Math.pow(AH2O * AN2, 0.5) + (1 - 0) * (XH2bis) * Math.pow(AN2 * AH2, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(AN2 * ACO2, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * AN2, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(AH2O * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(AH2O * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * AH2O, 0.5) + grAbis;
    ArH2O = (XH2Obis) * AH2O + (1 - 0) * (XH2bis) * Math.pow(AH2O * AH2, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * AH2O, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * AH2O, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * AH2O, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(ACO * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(ACO * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * ACO, 0.5) + grAbis;
    ArCO = (XCObis) * ACO + (1 - 0) * (XH2Obis) * Math.pow(AH2O * ACO, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * ACO, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * ACO, 0.5) + (1 - 0) * (XH2bis) * Math.pow(ACO * AH2, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(ACH4 * AMG, 0.5);
    grAsuite = (1 - 0) * (XH2bis) * Math.pow(AH2 * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * ACH4, 0.5) + grAbis;
    ArCH4 = ((XCH4bis)) * ACH4 + (1 - 0) * (XH2Obis) * Math.pow(AH2O * ACH4, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * ACH4, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * ACH4, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * ACH4, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(ANH3 * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(ANH3 * ACH4, 0.5) + (1 - 0) * (XH2bis) * Math.pow(ANH3 * AH2, 0.5) + grAbis;
    ArNH3 = ((XNH3bis)) * ANH3 + (1 - 0) * (XH2Obis) * Math.pow(AH2O * ANH3, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * ANH3, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * ANH3, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * ANH3, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XNH3bis) * Math.pow(AMG * ANH3, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(AMG * ACH4, 0.5) + (1 - 0) * (XH2bis) * Math.pow(AMG * AH2, 0.5) + grAbis;
    ArMG = ((XMGbis)) * AMG + (1 - 0) * (XH2Obis) * Math.pow(AH2O * AMG, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * AMG, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * AMG, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * AMG, 0.5) + grAsuite;
    //calculs des param�tres de repulsion et d'attraction de l'equation d'etat, Ai et Bi qui interviennent dans le calcul du coefficient de fugacit�
    AH2 = 0.42748 * alphaH2 * Math.pow(TcH2, 2) / (PcH2 * 100000) * P / Math.pow(T, 2); //avec Tr=T/Tc et Pr=P/Pc
    BH2 = 0.08664 * TcH2 / (PcH2 * 100000) * P / (T);
    ACO2 = 0.42748 * alphaCO2 * Math.pow(TcCO2, 2) / (PcCO2 * 100000) * P / Math.pow(T, 2);
    BCO2 = 0.08664 * TcCO2 / (PcCO2 * 100000) * P / (T);
    AN2 = 0.42748 * alphaN2 * Math.pow(TcN2, 2) / (PcN2 * 100000) * P / Math.pow(T, 2);
    BN2 = 0.08664 * TcN2 / (PcN2 * 100000) * P / (T);
    AH2O = 0.42748 * alphaH2O * Math.pow(TcH2O, 2) / (PcH2O * 100000) * P / Math.pow(T, 2);
    BH2O = 0.08664 * TcH2O / (PcH2O * 100000) * P / (T);
    ACO = 0.42748 * alphaCO * Math.pow(TcCO, 2) / (PcCO * 100000) * P / Math.pow(T, 2);
    BCO = 0.08664 * TcCO / (PcCO * 100000) * P / (T);
    ACH4 = 0.42748 * alphaCH4 * Math.pow(TcCH4, 2) / (PcCH4 * 100000) * P / Math.pow(T, 2);
    BCH4 = 0.08664 * TcCH4 / (PcCH4 * 100000) * P / (T);
    ANH3 = 0.42748 * alphaNH3 * Math.pow(TcNH3, 2) / (PcNH3 * 100000) * P / Math.pow(T, 2);
    BNH3 = 0.08664 * TcNH3 / (PcNH3 * 100000) * P / (T);
    AMG = 0.42748 * alphaMG * Math.pow(TcMG, 2) / (PcMG * 100000) * P / Math.pow(T, 2);
    BMG = 0.08664 * TcMG / (PcMG * 100000) * P / (T);
    ///////////////////////////////////
    //calculs des param�tres de repulsion et d'attraction de l'equation d'etat, A et B qui interviennent dans le calcul du coefficient de fugacit�
    grAbis = Math.pow(XMGbis, 2) * AMG + 2 * (1 - 0) * XMGbis * XH2bis * Math.pow(AMG * AH2, 0.5) + 2 * (1 - 0) * XMGbis * XCO2bis * Math.pow(AMG * ACO2, 0.5) + 2 * (1 - 0) * XMGbis * XN2bis * Math.pow(AMG * AN2, 0.5) + 2 * (1 - 0) * XMGbis * XH2Obis * Math.pow(AMG * AH2O, 0.5) + 2 * (1 - 0) * XMGbis * XCObis * Math.pow(AMG * ACO2, 0.5) + 2 * (1 - 0) * XMGbis * XCH4bis * Math.pow(AMG * ACH4, 0.5) + 2 * (1 - 0) * XMGbis * XNH3bis * Math.pow(AMG * ANH3, 0.5);
    grAsuite = Math.pow(XCH4bis, 2) * ACH4 + Math.pow(XNH3bis, 2) * ANH3 + 2 * (1 - 0) * XCH4bis * XCObis * Math.pow(ACO * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XH2Obis * Math.pow(AH2O * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XCO2bis * Math.pow(ACO2 * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XH2bis * Math.pow(AH2 * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XN2bis * Math.pow(AN2 * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XNH3bis * Math.pow(ANH3 * ACH4, 0.5) + 2 * (1 - 0) * XH2Obis * XNH3bis * Math.pow(ANH3 * AH2O, 0.5) + 2 * (1 - 0) * XCO2bis * XNH3bis * Math.pow(ANH3 * ACO2, 0.5) + 2 * (1 - 0) * XCObis * XNH3bis * Math.pow(ANH3 * ACO, 0.5) + 2 * (1 - 0) * XH2bis * XNH3bis * Math.pow(ANH3 * AH2, 0.5) + 2 * (1 - 0) * XN2bis * XNH3bis * Math.pow(ANH3 * AN2, 0.5) + grAbis;
    GRA = Math.pow(XH2Obis, 2) * AH2O + Math.pow(XCO2bis, 2) * ACO2 + 2 * (1 - 0) * XH2Obis * XCO2bis * Math.pow(AH2O * ACO2, 0.5) + Math.pow(XH2bis, 2) * AH2 + 2 * (1 - 0) * XH2Obis * XH2bis * Math.pow(AH2O * AH2, 0.5) + Math.pow(XN2bis, 2) * AN2 + 2 * (1 - 0) * XH2Obis * XN2bis * Math.pow(AH2O * AN2, 0.5) + 2 * (1 - 0) * XCO2bis * XH2bis * Math.pow(ACO2 * AH2, 0.5) + 2 * (1 - 0) * XCO2bis * XN2bis * Math.pow(ACO2 * AN2, 0.5) + 2 * (1 - 0) * XN2bis * XH2bis * Math.pow(AN2 * AH2, 0.5) + Math.pow(XCObis, 2) * ACO + 2 * (1 - 0) * XH2Obis * XCObis * Math.pow(AH2O * ACO, 0.5) + 2 * (1 - 0) * XCObis * XH2bis * Math.pow(ACO * AH2, 0.5) + 2 * (1 - 0) * XCObis * XN2bis * Math.pow(ACO * AN2, 0.5) + 2 * (1 - 0) * XCObis * XCO2bis * Math.pow(ACO * ACO2, 0.5) + grAsuite;
    GRB = XH2Obis * BH2O + XH2bis * BH2 + XCO2bis * BCO2 + XN2bis * BN2 + XCObis * BCO + XNH3bis * BNH3 + XCH4bis * BCH4 + XMGbis * BMG;
    //calculs des coefficients de fugacit�s   
    //logFIH2Osoave = ZN - 1 - Log(ZN - GRB) - GRA / GRB * Log((ZN + GRB) / ZN)
    //FIH2Oincsoave = 10 ^ (logFIH2Osoave / 2.303)
    //Worksheets(1).Range("C31").Value = FIH2Oincsoave
    logFIH2O = (BH2O / GRB * (ZN - 1) - Math.log(ZN - GRB) + GRA / GRB * (BH2O / GRB - 2 / A * ArH2O) * Math.log(1 + GRB / ZN));
    FIH2Oinc = Math.exp(logFIH2O);
    FUH2Oinc = FIH2Oinc * P * XH2Obis;
    FUH2Oi = FUH2Oinc * 0.00001;
    logFIH2 = (BH2 / GRB * (ZN - 1) - Math.log(ZN - GRB) + GRA / GRB * (BH2 / GRB - 2 / A * ArH2) * Math.log(1 + GRB / ZN));
    FIH2inc = Math.exp(logFIH2);
    FUH2inc = FIH2inc * P * XH2bis;
    FUH2i = FUH2inc * 0.00001;
    logFICO = (BCO / GRB * (ZN - 1) - Math.log(ZN - GRB) + GRA / GRB * (BCO / GRB - 2 / A * ArCO) * Math.log(1 + GRB / ZN));
    FICOinc = Math.exp(logFICO);
    FUCOinc = FICOinc * P * XCObis;
    FUCOi = FUCOinc * 0.00001;
    logFICO2 = (BCO2 / GRB * (ZN - 1) - Math.log(ZN - GRB) + GRA / GRB * (BCO2 / GRB - 2 / A * ArCO2) * Math.log(1 + GRB / ZN));
    FICO2inc = Math.exp(logFICO2);
    FUCO2inc = FICO2inc * P * XCO2bis;
    FUCO2i = FUCO2inc * 0.00001; //la m�me chose mais en bar
    logFIN2 = (BN2 / GRB * (ZN - 1) - Math.log(ZN - GRB) + GRA / GRB * (BN2 / GRB - 2 / A * ArN2) * Math.log(1 + GRB / ZN));
    FIN2inc = Math.exp(logFIN2);
    FUN2inc = FIN2inc * P * XN2bis;
    FUN2i = FUN2inc * 0.00001;
    logFICH4 = (BCH4 / GRB * (ZN - 1) - Math.log(ZN - GRB) + GRA / GRB * (BCH4 / GRB - 2 / A * ArCH4) * Math.log(1 + GRB / ZN));
    FICH4inc = Math.exp(logFICH4);
    FUCH4inc = FICH4inc * P * XCH4bis;
    FUCH4i = FUCH4inc * 0.00001;
    logFINH3 = (BNH3 / GRB * (ZN - 1) - Math.log(ZN - GRB) + GRA / GRB * (BNH3 / GRB - 2 / A * ArNH3) * Math.log(1 + GRB / ZN));
    FINH3inc = Math.exp(logFINH3);
    FUNH3inc = FINH3inc * P * XNH3bis;
    FUNH3i = FUNH3inc * 0.00001;
    logFIMG = (BMG / GRB * (ZN - 1) - Math.log(ZN - GRB) + GRA / GRB * (BMG / GRB - 2 / A * ArMG) * Math.log(1 + GRB / ZN));
    FIMGinc = Math.exp(logFIMG);
    FUMGinc = FIMGinc * P * XMGbis;
    FUMGi = FUMGinc * 0.00001;
    ///////////////////////////
    $("#5-11").text(Number((FUCH4i).toFixed(5)).toString());
    ///////////////////////////////////////////
    /////////////////////////////////////////
    XH2Obis = 0;
    XCO2bis = 0;
    XCObis = 1;
    XH2bis = 0;
    XN2bis = 0;
    XCH4bis = 0;
    XNH3bis = 0;
    XMGbis = 0;
    Pb = parseFloat($("#0-1").text());
    P = Pb * 100000; //passage de la pression de bar en Pa
    T = parseFloat($("#1-1").text()) + 273.15;
    TcH2O = parseFloat($("#2-4").text()); //temp�rature critique de H2O dans la cellule J8
    PcH2O = parseFloat($("#2-3").text()); //pression critique de H2O
    TcCO2 = parseFloat($("#3-4").text());
    PcCO2 = parseFloat($("#3-3").text());
    TcCO = parseFloat($("#4-4").text());
    PcCO = parseFloat($("#4-3").text());
    TcH2 = parseFloat($("#1-4").text());
    PcH2 = parseFloat($("#1-3").text());
    TcN2 = parseFloat($("#7-4").text());
    PcN2 = parseFloat($("#7-3").text());
    TcCH4 = parseFloat($("#5-4").text());
    PcCH4 = parseFloat($("#5-3").text());
    TcNH3 = parseFloat($("#8-4").text());
    PcNH3 = parseFloat($("#8-3").text());
    TcMG = parseFloat($("#6-4").text());
    PcMG = parseFloat($("#6-3").text());
    R = 8.314472; //constante des gaz parfaits
    ///////////////////////////////////////////////
    //calcul des facteurs acentriques
    wH2O = parseFloat($("#2-5").text());
    nH2O = 0.48508 + 1.55171 * wH2O - 0.15613 * Math.pow(wH2O, 2);
    alphaH2O = Math.pow(1 + nH2O * (1 - Math.pow(T / TcH2O, 0.5)), 2);
    wCO2 = parseFloat($("#3-5").text());
    nCO2 = 0.48508 + 1.55171 * wCO2 - 0.15613 * Math.pow(wCO2, 2);
    alphaCO2 = Math.pow(1 + nCO2 * (1 - Math.pow(T / TcCO2, 0.5)), 2);
    wCO = parseFloat($("#4-5").text());
    nCO = 0.48508 + 1.55171 * wCO - 0.15613 * Math.pow(wCO, 2);
    alphaCO = Math.pow(1 + nCO * (1 - Math.pow(T / TcCO, 0.5)), 2);
    wH2 = parseFloat($("#1-5").text());
    nH2 = 0.48508 + 1.55171 * wH2 - 0.15613 * Math.pow(wH2, 2);
    alphaH2 = Math.pow(1 + nH2 * (1 - Math.pow(T / TcH2, 0.5)), 2);
    wN2 = parseFloat($("#7-5").text());
    nN2 = 0.48508 + 1.55171 * wN2 - 0.15613 * Math.pow(wN2, 2);
    alphaN2 = Math.pow(1 + nN2 * (1 - Math.pow(T / TcN2, 0.5)), 2);
    wCH4 = parseFloat($("#5-5").text());
    nCH4 = 0.48508 + 1.55171 * wCH4 - 0.15613 * Math.pow(wCH4, 2);
    alphaCH4 = Math.pow(1 + nCH4 * (1 - Math.pow(T / TcCH4, 0.5)), 2);
    wNH3 = parseFloat($("#8-5").text());
    nNH3 = 0.48508 + 1.55171 * wNH3 - 0.15613 * Math.pow(wNH3, 2);
    alphaNH3 = Math.pow(1 + nNH3 * (1 - Math.pow(T / TcNH3, 0.5)), 2);
    wMG = parseFloat($("#6-5").text());
    nMG = 0.48508 + 1.55171 * wMG - 0.15613 * Math.pow(wMG, 2);
    alphaMG = Math.pow(1 + nMG * (1 - Math.pow(T / TcMG, 0.5)), 2);
    /////////////////////////
    AH2 = 0.42748 * alphaH2 * Math.pow(TcH2, 2) / (PcH2 * 100000) * P / Math.pow(T, 2); //avec Tr=T/Tc et Pr=P/Pc
    BH2 = 0.08664 * TcH2 / (PcH2 * 100000) * P / (T);
    ACO2 = 0.42748 * alphaCO2 * Math.pow(TcCO2, 2) / (PcCO2 * 100000) * P / Math.pow(T, 2);
    BCO2 = 0.08664 * TcCO2 / (PcCO2 * 100000) * P / (T);
    AN2 = 0.42748 * alphaN2 * Math.pow(TcN2, 2) / (PcN2 * 100000) * P / Math.pow(T, 2);
    BN2 = 0.08664 * TcN2 / (PcN2 * 100000) * P / (T);
    AH2O = 0.42748 * alphaH2O * Math.pow(TcH2O, 2) / (PcH2O * 100000) * P / Math.pow(T, 2);
    BH2O = 0.08664 * TcH2O / (PcH2O * 100000) * P / (T);
    ACO = 0.42748 * alphaCO * Math.pow(TcCO, 2) / (PcCO * 100000) * P / Math.pow(T, 2);
    BCO = 0.08664 * TcCO / (PcCO * 100000) * P / (T);
    ACH4 = 0.42748 * alphaCH4 * Math.pow(TcCH4, 2) / (PcCH4 * 100000) * P / Math.pow(T, 2);
    BCH4 = 0.08664 * TcCH4 / (PcCH4 * 100000) * P / (T);
    ANH3 = 0.42748 * alphaNH3 * Math.pow(TcNH3, 2) / (PcNH3 * 100000) * P / Math.pow(T, 2);
    BNH3 = 0.08664 * TcNH3 / (PcNH3 * 100000) * P / (T);
    AMG = 0.42748 * alphaMG * Math.pow(TcMG, 2) / (PcMG * 100000) * P / Math.pow(T, 2);
    BMG = 0.08664 * TcMG / (PcMG * 100000) * P / (T);
    ///////////////////////////////////
    grAbis = Math.pow(XMGbis, 2) * AMG + 2 * (1 - 0) * XMGbis * XH2bis * Math.pow(AMG * AH2, 0.5) + 2 * (1 - 0) * XMGbis * XCO2bis * Math.pow(AMG * ACO2, 0.5) + 2 * (1 - 0) * XMGbis * XN2bis * Math.pow(AMG * AN2, 0.5) + 2 * (1 - 0) * XMGbis * XH2Obis * Math.pow(AMG * AH2O, 0.5) + 2 * (1 - 0) * XMGbis * XCObis * Math.pow(AMG * ACO2, 0.5) + 2 * (1 - 0) * XMGbis * XCH4bis * Math.pow(AMG * ACH4, 0.5) + 2 * (1 - 0) * XMGbis * XNH3bis * Math.pow(AMG * ANH3, 0.5);
    grAsuite = Math.pow(XCH4bis, 2) * ACH4 + Math.pow(XNH3bis, 2) * ANH3 + 2 * (1 - 0) * XCH4bis * XCObis * Math.pow(ACO * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XH2Obis * Math.pow(AH2O * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XCO2bis * Math.pow(ACO2 * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XH2bis * Math.pow(AH2 * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XN2bis * Math.pow(AN2 * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XNH3bis * Math.pow(ANH3 * ACH4, 0.5) + 2 * (1 - 0) * XH2Obis * XNH3bis * Math.pow(ANH3 * AH2O, 0.5) + 2 * (1 - 0) * XCO2bis * XNH3bis * Math.pow(ANH3 * ACO2, 0.5) + 2 * (1 - 0) * XCObis * XNH3bis * Math.pow(ANH3 * ACO, 0.5) + 2 * (1 - 0) * XH2bis * XNH3bis * Math.pow(ANH3 * AH2, 0.5) + 2 * (1 - 0) * XN2bis * XNH3bis * Math.pow(ANH3 * AN2, 0.5) + grAbis;
    GRA = Math.pow(XH2Obis, 2) * AH2O + Math.pow(XCO2bis, 2) * ACO2 + 2 * (1 - 0) * XH2Obis * XCO2bis * Math.pow(AH2O * ACO2, 0.5) + Math.pow(XH2bis, 2) * AH2 + 2 * (1 - 0) * XH2Obis * XH2bis * Math.pow(AH2O * AH2, 0.5) + Math.pow(XN2bis, 2) * AN2 + 2 * (1 - 0) * XH2Obis * XN2bis * Math.pow(AH2O * AN2, 0.5) + 2 * (1 - 0) * XCO2bis * XH2bis * Math.pow(ACO2 * AH2, 0.5) + 2 * (1 - 0) * XCO2bis * XN2bis * Math.pow(ACO2 * AN2, 0.5) + 2 * (1 - 0) * XN2bis * XH2bis * Math.pow(AN2 * AH2, 0.5) + Math.pow(XCObis, 2) * ACO + 2 * (1 - 0) * XH2Obis * XCObis * Math.pow(AH2O * ACO, 0.5) + 2 * (1 - 0) * XCObis * XH2bis * Math.pow(ACO * AH2, 0.5) + 2 * (1 - 0) * XCObis * XN2bis * Math.pow(ACO * AN2, 0.5) + 2 * (1 - 0) * XCObis * XCO2bis * Math.pow(ACO * ACO2, 0.5) + grAsuite;
    GRB = XH2Obis * BH2O + XH2bis * BH2 + XCO2bis * BCO2 + XN2bis * BN2 + XCObis * BCO + XNH3bis * BNH3 + XCH4bis * BCH4 + XMGbis * BMG;
    //////////////////////////////////
    test = 10;
    ZN = 1000.01; //initialisation NR � changer si plantage
    while (test > 0.000000001)
    {
        FZ = Math.pow(ZN, 3) - Math.pow(ZN, 2) + (GRA - Math.pow(GRB, 2) - GRB) * ZN - GRA * GRB;
        FpZ = 3 * Math.pow(ZN, 2) - 2 * ZN + (GRA - Math.pow(GRB, 2) - GRB);
        ZN1 = ZN - FZ / FpZ;
        test = Math.abs(ZN1 - ZN);
        ZN = ZN1;
    }
    VN = (ZN * R * T / P);
    V = VN * 1000000;
    /////////////////////////////////////////
    //calculs des param�tres de repulsion et d'attraction de l'equation d'etat, aialphai et bialphai qui interviennent dans le calcul des coefficients de fugacit�
    AH2 = 0.42748 * alphaH2 * (R * Math.pow(TcH2, 2)) / (PcH2 * 100000);
    BH2 = 0.08664 * R * TcH2 / (PcH2 * 100000);
    BiH2 = BH2; //stockage de bialphai
    ACO2 = 0.42748 * alphaCO2 * (R * Math.pow(TcCO2, 2)) / (PcCO2 * 100000);
    BCO2 = 0.08664 * R * TcCO2 / (PcCO2 * 100000);
    BiCO2 = BCO2;
    AN2 = 0.42748 * alphaN2 * (R * Math.pow(TcN2, 2)) / (PcN2 * 100000);
    BN2 = 0.08664 * R * TcN2 / (PcN2 * 100000);
    BiN2 = BN2;
    AH2O = 0.42748 * alphaH2O * (R * Math.pow(TcH2O, 2)) / (PcH2O * 100000);
    BH2O = 0.08664 * R * TcH2O / (PcH2O * 100000);
    BiH2O = BH2O;
    ACO = 0.42748 * alphaCO * (R * Math.pow(TcCO, 2)) / (PcCO * 100000);
    BCO = 0.08664 * R * TcCO / (PcCO * 100000);
    BiCO = BCO;
    ACH4 = 0.42748 * alphaCH4 * (R * Math.pow(TcCH4, 2)) / (PcCH4 * 100000);
    BCH4 = 0.08664 * R * TcCH4 / (PcCH4 * 100000);
    BiCH4 = BCH4;
    ANH3 = 0.42748 * alphaNH3 * (R * Math.pow(TcNH3, 2)) / (PcNH3 * 100000);
    BNH3 = 0.08664 * R * TcNH3 / (PcNH3 * 100000);
    BiNH3 = BNH3;
    AMG = 0.42748 * alphaMG * (R * Math.pow(TcMG, 2)) / (PcMG * 100000);
    BMG = 0.08664 * R * TcMG / (PcMG * 100000);
    BiMG = BMG;
    ////////////////////////////////
    //calculs des param�tres de repulsion et d'attraction de l'equation d'etat, a et b qui n'interviennent pas dans le calcul du coefficient de fugacit�
    grAbis = Math.pow(XMGbis, 2) * AMG + 2 * (1 - 0) * XMGbis * XH2bis * Math.pow(AMG * AH2, 0.5) + 2 * (1 - 0) * XMGbis * XCO2bis * Math.pow(AMG * ACO2, 0.5) + 2 * (1 - 0) * XMGbis * XN2bis * Math.pow(AMG * AN2, 0.5) + 2 * (1 - 0) * XMGbis * XH2Obis * Math.pow(AMG * AH2O, 0.5) + 2 * (1 - 0) * XMGbis * XCObis * Math.pow(AMG * ACO2, 0.5) + 2 * (1 - 0) * XMGbis * XCH4bis * Math.pow(AMG * ACH4, 0.5) + 2 * (1 - 0) * XMGbis * XNH3bis * Math.pow(AMG * ANH3, 0.5);
    grAsuite = Math.pow(XCH4bis, 2) * ACH4 + Math.pow(XNH3bis, 2) * ANH3 + 2 * (1 - 0) * XCH4bis * XCObis * Math.pow(ACO * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XH2Obis * Math.pow(AH2O * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XCO2bis * Math.pow(ACO2 * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XH2bis * Math.pow(AH2 * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XN2bis * Math.pow(AN2 * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XNH3bis * Math.pow(ANH3 * ACH4, 0.5) + 2 * (1 - 0) * XH2Obis * XNH3bis * Math.pow(ANH3 * AH2O, 0.5) + 2 * (1 - 0) * XCO2bis * XNH3bis * Math.pow(ANH3 * ACO2, 0.5) + 2 * (1 - 0) * XCObis * XNH3bis * Math.pow(ANH3 * ACO, 0.5) + 2 * (1 - 0) * XH2bis * XNH3bis * Math.pow(ANH3 * AH2, 0.5) + 2 * (1 - 0) * XN2bis * XNH3bis * Math.pow(ANH3 * AN2, 0.5) + grAbis;
    A = Math.pow(XH2Obis, 2) * AH2O + Math.pow(XCO2bis, 2) * ACO2 + 2 * (1 - 0) * XH2Obis * XCO2bis * Math.pow(AH2O * ACO2, 0.5) + Math.pow(XH2bis, 2) * AH2 + 2 * (1 - 0) * XH2Obis * XH2bis * Math.pow(AH2O * AH2, 0.5) + Math.pow(XN2bis, 2) * AN2 + 2 * (1 - 0) * XH2Obis * XN2bis * Math.pow(AH2O * AN2, 0.5) + 2 * (1 - 0) * XCO2bis * XH2bis * Math.pow(ACO2 * AH2, 0.5) + 2 * (1 - 0) * XCO2bis * XN2bis * Math.pow(ACO2 * AN2, 0.5) + 2 * (1 - 0) * XN2bis * XH2bis * Math.pow(AN2 * AH2, 0.5) + Math.pow(XCObis, 2) * ACO + 2 * (1 - 0) * XH2Obis * XCObis * Math.pow(AH2O * ACO, 0.5) + 2 * (1 - 0) * XCObis * XH2bis * Math.pow(ACO * AH2, 0.5) + 2 * (1 - 0) * XCObis * XN2bis * Math.pow(ACO * AN2, 0.5) + 2 * (1 - 0) * XCObis * XCO2bis * Math.pow(ACO * ACO2, 0.5) + grAsuite;
    B = XH2Obis * BH2O + XH2bis * BH2 + XCO2bis * BCO2 + XN2bis * BN2 + XCObis * BCO + XNH3bis * BNH3 + XCH4bis * BCH4 + XMGbis * BMG;
    ////////////////////////////
    //calcul de d�riv�s de XiXj(1-Kji)racine(aialphai*akalphak)
    grAbis = (XMGbis) * Math.pow(AH2 * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(AH2 * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * AH2, 0.5) + grAbis;
    ArH2 = ((XH2bis)) * AH2 + (1 - 0) * (XH2Obis) * Math.pow(AH2O * AH2, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * AH2, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * AH2, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * AH2, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(ACO2 * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(ACO2 * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * ACO2, 0.5) + grAbis;
    ArCO2 = ((XCO2bis)) * ACO2 + (1 - 0) * (XH2Obis) * Math.pow(AH2O * ACO2, 0.5) + (1 - 0) * (XH2bis) * Math.pow(ACO2 * AH2, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * ACO2, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * ACO2, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(AN2 * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(AN2 * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * AN2, 0.5) + grAbis;
    ArN2 = ((XN2bis)) * AN2 + (1 - 0) * (XH2Obis) * Math.pow(AH2O * AN2, 0.5) + (1 - 0) * (XH2bis) * Math.pow(AN2 * AH2, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(AN2 * ACO2, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * AN2, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(AH2O * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(AH2O * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * AH2O, 0.5) + grAbis;
    ArH2O = (XH2Obis) * AH2O + (1 - 0) * (XH2bis) * Math.pow(AH2O * AH2, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * AH2O, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * AH2O, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * AH2O, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(ACO * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(ACO * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * ACO, 0.5) + grAbis;
    ArCO = (XCObis) * ACO + (1 - 0) * (XH2Obis) * Math.pow(AH2O * ACO, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * ACO, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * ACO, 0.5) + (1 - 0) * (XH2bis) * Math.pow(ACO * AH2, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(ACH4 * AMG, 0.5);
    grAsuite = (1 - 0) * (XH2bis) * Math.pow(AH2 * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * ACH4, 0.5) + grAbis;
    ArCH4 = ((XCH4bis)) * ACH4 + (1 - 0) * (XH2Obis) * Math.pow(AH2O * ACH4, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * ACH4, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * ACH4, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * ACH4, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(ANH3 * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(ANH3 * ACH4, 0.5) + (1 - 0) * (XH2bis) * Math.pow(ANH3 * AH2, 0.5) + grAbis;
    ArNH3 = ((XNH3bis)) * ANH3 + (1 - 0) * (XH2Obis) * Math.pow(AH2O * ANH3, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * ANH3, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * ANH3, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * ANH3, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XNH3bis) * Math.pow(AMG * ANH3, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(AMG * ACH4, 0.5) + (1 - 0) * (XH2bis) * Math.pow(AMG * AH2, 0.5) + grAbis;
    ArMG = ((XMGbis)) * AMG + (1 - 0) * (XH2Obis) * Math.pow(AH2O * AMG, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * AMG, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * AMG, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * AMG, 0.5) + grAsuite;
    /////////////////////////////
    SB = BH2O + BH2 + BCO2 + BN2 + BCO + BNH3 + BCH4 + BMG;
    DVDXH2 = (-(R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * VN * Math.pow(VN - B, 2)) * SB + (VN - B) * VN * (Math.pow(VN, 2) - Math.pow(B, 2)) * ArH2) / (-R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * (2 * VN + B) * Math.pow(VN - B, 2));
    DVDXH2O = (-(R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * VN * Math.pow(VN - B, 2)) * SB + (VN - B) * VN * (Math.pow(VN, 2) - Math.pow(B, 2)) * ArH2O) / (-R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * (2 * VN + B) * Math.pow(VN - B, 2));
    DVDXCO2 = (-(R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * VN * Math.pow(VN - B, 2)) * SB + (VN - B) * VN * (Math.pow(VN, 2) - Math.pow(B, 2)) * ArCO2) / (-R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * (2 * VN + B) * Math.pow(VN - B, 2));
    DVDXCO = (-(R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * VN * Math.pow(VN - B, 2)) * SB + (VN - B) * VN * (Math.pow(VN, 2) - Math.pow(B, 2)) * ArCO) / (-R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * (2 * VN + B) * Math.pow(VN - B, 2));
    DVDXN2 = (-(R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * VN * Math.pow(VN - B, 2)) * SB + (VN - B) * VN * (Math.pow(VN, 2) - Math.pow(B, 2)) * ArN2) / (-R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * (2 * VN + B) * Math.pow(VN - B, 2));
    DVDXCH4 = (-(R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * VN * Math.pow(VN - B, 2)) * SB + (VN - B) * VN * (Math.pow(VN, 2) - Math.pow(B, 2)) * ArCH4) / (-R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * (2 * VN + B) * Math.pow(VN - B, 2));
    DVDXNH3 = (-(R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * VN * Math.pow(VN - B, 2)) * SB + (VN - B) * VN * (Math.pow(VN, 2) - Math.pow(B, 2)) * ArNH3) / (-R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * (2 * VN + B) * Math.pow(VN - B, 2));
    DVDXMG = (-(R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * VN * Math.pow(VN - B, 2)) * SB + (VN - B) * VN * (Math.pow(VN, 2) - Math.pow(B, 2)) * ArMG) / (-R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * (2 * VN + B) * Math.pow(VN - B, 2));

    VCO2M = (VN * 1 * (XCO2bis) - 1 * (XCO2bis - 0 * XCO2bis) * 1 / 3 / 8 / 2 * DVDXCO2) * 1000000;
    VCOM = (VN * 1 * (XCObis) - 1 * (XCObis - 0 * XCObis) * 1 / 3 / 8 / 2 * DVDXCO) * 1000000;
    VH2M = (VN * 1 * (XH2bis) - 1 * (XH2bis - 0 * XH2bis) * 1 / 3 / 8 / 2 * DVDXH2) * 1000000;
    VN2M = (VN * 1 * (XN2bis) - 1 * (XN2bis - 0 * XN2bis) * 1 / 3 / 8 / 2 * DVDXN2) * 1000000;
    VCH4M = (VN * 1 * (XCH4bis) - 1 * (XCH4bis - 0 * XCH4bis) * 1 / 3 / 8 / 2 * DVDXCH4) * 1000000;
    VNH3M = (VN * 1 * (XNH3bis) - 1 * (XNH3bis - 0 * XNH3bis) * 1 / 3 / 8 / 2 * DVDXNH3) * 1000000;
    VH2OM = (VN * 1 * (XH2Obis) - 1 * (XH2Obis - 0 * XH2Obis) * 1 / 3 / 8 / 2 * DVDXH2O) * 1000000;
    VMGM = (VN * 1 * (XMGbis) - 1 * (XMGbis - 0 * XMGbis) * 1 / 3 / 8 / 2 * DVDXMG) * 1000000;
    //calcul de somme de Xk(1-Kki)racine(aialphai*akalphak)  (avant le 2 dans le calcul du coefficient de fugacit� de l'esp�ce k)
    grAbis = (XMGbis) * Math.pow(AH2 * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(AH2 * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * AH2, 0.5) + grAbis;
    ArH2 = ((XH2bis)) * AH2 + (1 - 0) * (XH2Obis) * Math.pow(AH2O * AH2, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * AH2, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * AH2, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * AH2, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(ACO2 * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(ACO2 * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * ACO2, 0.5) + grAbis;
    ArCO2 = ((XCO2bis)) * ACO2 + (1 - 0) * (XH2Obis) * Math.pow(AH2O * ACO2, 0.5) + (1 - 0) * (XH2bis) * Math.pow(ACO2 * AH2, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * ACO2, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * ACO2, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(AN2 * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(AN2 * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * AN2, 0.5) + grAbis;
    ArN2 = ((XN2bis)) * AN2 + (1 - 0) * (XH2Obis) * Math.pow(AH2O * AN2, 0.5) + (1 - 0) * (XH2bis) * Math.pow(AN2 * AH2, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(AN2 * ACO2, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * AN2, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(AH2O * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(AH2O * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * AH2O, 0.5) + grAbis;
    ArH2O = (XH2Obis) * AH2O + (1 - 0) * (XH2bis) * Math.pow(AH2O * AH2, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * AH2O, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * AH2O, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * AH2O, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(ACO * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(ACO * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * ACO, 0.5) + grAbis;
    ArCO = (XCObis) * ACO + (1 - 0) * (XH2Obis) * Math.pow(AH2O * ACO, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * ACO, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * ACO, 0.5) + (1 - 0) * (XH2bis) * Math.pow(ACO * AH2, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(ACH4 * AMG, 0.5);
    grAsuite = (1 - 0) * (XH2bis) * Math.pow(AH2 * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * ACH4, 0.5) + grAbis;
    ArCH4 = ((XCH4bis)) * ACH4 + (1 - 0) * (XH2Obis) * Math.pow(AH2O * ACH4, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * ACH4, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * ACH4, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * ACH4, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(ANH3 * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(ANH3 * ACH4, 0.5) + (1 - 0) * (XH2bis) * Math.pow(ANH3 * AH2, 0.5) + grAbis;
    ArNH3 = ((XNH3bis)) * ANH3 + (1 - 0) * (XH2Obis) * Math.pow(AH2O * ANH3, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * ANH3, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * ANH3, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * ANH3, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XNH3bis) * Math.pow(AMG * ANH3, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(AMG * ACH4, 0.5) + (1 - 0) * (XH2bis) * Math.pow(AMG * AH2, 0.5) + grAbis;
    ArMG = ((XMGbis)) * AMG + (1 - 0) * (XH2Obis) * Math.pow(AH2O * AMG, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * AMG, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * AMG, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * AMG, 0.5) + grAsuite;
    //calculs des param�tres de repulsion et d'attraction de l'equation d'etat, Ai et Bi qui interviennent dans le calcul du coefficient de fugacit�
    AH2 = 0.42748 * alphaH2 * Math.pow(TcH2, 2) / (PcH2 * 100000) * P / Math.pow(T, 2); //avec Tr=T/Tc et Pr=P/Pc
    BH2 = 0.08664 * TcH2 / (PcH2 * 100000) * P / (T);
    ACO2 = 0.42748 * alphaCO2 * Math.pow(TcCO2, 2) / (PcCO2 * 100000) * P / Math.pow(T, 2);
    BCO2 = 0.08664 * TcCO2 / (PcCO2 * 100000) * P / (T);
    AN2 = 0.42748 * alphaN2 * Math.pow(TcN2, 2) / (PcN2 * 100000) * P / Math.pow(T, 2);
    BN2 = 0.08664 * TcN2 / (PcN2 * 100000) * P / (T);
    AH2O = 0.42748 * alphaH2O * Math.pow(TcH2O, 2) / (PcH2O * 100000) * P / Math.pow(T, 2);
    BH2O = 0.08664 * TcH2O / (PcH2O * 100000) * P / (T);
    ACO = 0.42748 * alphaCO * Math.pow(TcCO, 2) / (PcCO * 100000) * P / Math.pow(T, 2);
    BCO = 0.08664 * TcCO / (PcCO * 100000) * P / (T);
    ACH4 = 0.42748 * alphaCH4 * Math.pow(TcCH4, 2) / (PcCH4 * 100000) * P / Math.pow(T, 2);
    BCH4 = 0.08664 * TcCH4 / (PcCH4 * 100000) * P / (T);
    ANH3 = 0.42748 * alphaNH3 * Math.pow(TcNH3, 2) / (PcNH3 * 100000) * P / Math.pow(T, 2);
    BNH3 = 0.08664 * TcNH3 / (PcNH3 * 100000) * P / (T);
    AMG = 0.42748 * alphaMG * Math.pow(TcMG, 2) / (PcMG * 100000) * P / Math.pow(T, 2);
    BMG = 0.08664 * TcMG / (PcMG * 100000) * P / (T);
    ///////////////////////////////////
    //calculs des param�tres de repulsion et d'attraction de l'equation d'etat, A et B qui interviennent dans le calcul du coefficient de fugacit�
    grAbis = Math.pow(XMGbis, 2) * AMG + 2 * (1 - 0) * XMGbis * XH2bis * Math.pow(AMG * AH2, 0.5) + 2 * (1 - 0) * XMGbis * XCO2bis * Math.pow(AMG * ACO2, 0.5) + 2 * (1 - 0) * XMGbis * XN2bis * Math.pow(AMG * AN2, 0.5) + 2 * (1 - 0) * XMGbis * XH2Obis * Math.pow(AMG * AH2O, 0.5) + 2 * (1 - 0) * XMGbis * XCObis * Math.pow(AMG * ACO2, 0.5) + 2 * (1 - 0) * XMGbis * XCH4bis * Math.pow(AMG * ACH4, 0.5) + 2 * (1 - 0) * XMGbis * XNH3bis * Math.pow(AMG * ANH3, 0.5);
    grAsuite = Math.pow(XCH4bis, 2) * ACH4 + Math.pow(XNH3bis, 2) * ANH3 + 2 * (1 - 0) * XCH4bis * XCObis * Math.pow(ACO * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XH2Obis * Math.pow(AH2O * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XCO2bis * Math.pow(ACO2 * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XH2bis * Math.pow(AH2 * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XN2bis * Math.pow(AN2 * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XNH3bis * Math.pow(ANH3 * ACH4, 0.5) + 2 * (1 - 0) * XH2Obis * XNH3bis * Math.pow(ANH3 * AH2O, 0.5) + 2 * (1 - 0) * XCO2bis * XNH3bis * Math.pow(ANH3 * ACO2, 0.5) + 2 * (1 - 0) * XCObis * XNH3bis * Math.pow(ANH3 * ACO, 0.5) + 2 * (1 - 0) * XH2bis * XNH3bis * Math.pow(ANH3 * AH2, 0.5) + 2 * (1 - 0) * XN2bis * XNH3bis * Math.pow(ANH3 * AN2, 0.5) + grAbis;
    GRA = Math.pow(XH2Obis, 2) * AH2O + Math.pow(XCO2bis, 2) * ACO2 + 2 * (1 - 0) * XH2Obis * XCO2bis * Math.pow(AH2O * ACO2, 0.5) + Math.pow(XH2bis, 2) * AH2 + 2 * (1 - 0) * XH2Obis * XH2bis * Math.pow(AH2O * AH2, 0.5) + Math.pow(XN2bis, 2) * AN2 + 2 * (1 - 0) * XH2Obis * XN2bis * Math.pow(AH2O * AN2, 0.5) + 2 * (1 - 0) * XCO2bis * XH2bis * Math.pow(ACO2 * AH2, 0.5) + 2 * (1 - 0) * XCO2bis * XN2bis * Math.pow(ACO2 * AN2, 0.5) + 2 * (1 - 0) * XN2bis * XH2bis * Math.pow(AN2 * AH2, 0.5) + Math.pow(XCObis, 2) * ACO + 2 * (1 - 0) * XH2Obis * XCObis * Math.pow(AH2O * ACO, 0.5) + 2 * (1 - 0) * XCObis * XH2bis * Math.pow(ACO * AH2, 0.5) + 2 * (1 - 0) * XCObis * XN2bis * Math.pow(ACO * AN2, 0.5) + 2 * (1 - 0) * XCObis * XCO2bis * Math.pow(ACO * ACO2, 0.5) + grAsuite;
    GRB = XH2Obis * BH2O + XH2bis * BH2 + XCO2bis * BCO2 + XN2bis * BN2 + XCObis * BCO + XNH3bis * BNH3 + XCH4bis * BCH4 + XMGbis * BMG;
    //calculs des coefficients de fugacit�s   
    //logFIH2Osoave = ZN - 1 - Log(ZN - GRB) - GRA / GRB * Log((ZN + GRB) / ZN)
    //FIH2Oincsoave = 10 ^ (logFIH2Osoave / 2.303)
    //Worksheets(1).Range("C31").Value = FIH2Oincsoave
    logFIH2O = (BH2O / GRB * (ZN - 1) - Math.log(ZN - GRB) + GRA / GRB * (BH2O / GRB - 2 / A * ArH2O) * Math.log(1 + GRB / ZN));
    FIH2Oinc = Math.exp(logFIH2O);
    FUH2Oinc = FIH2Oinc * P * XH2Obis;
    FUH2Oi = FUH2Oinc * 0.00001;
    logFIH2 = (BH2 / GRB * (ZN - 1) - Math.log(ZN - GRB) + GRA / GRB * (BH2 / GRB - 2 / A * ArH2) * Math.log(1 + GRB / ZN));
    FIH2inc = Math.exp(logFIH2);
    FUH2inc = FIH2inc * P * XH2bis;
    FUH2i = FUH2inc * 0.00001;
    logFICO = (BCO / GRB * (ZN - 1) - Math.log(ZN - GRB) + GRA / GRB * (BCO / GRB - 2 / A * ArCO) * Math.log(1 + GRB / ZN));
    FICOinc = Math.exp(logFICO);
    FUCOinc = FICOinc * P * XCObis;
    FUCOi = FUCOinc * 0.00001;
    logFICO2 = (BCO2 / GRB * (ZN - 1) - Math.log(ZN - GRB) + GRA / GRB * (BCO2 / GRB - 2 / A * ArCO2) * Math.log(1 + GRB / ZN));
    FICO2inc = Math.exp(logFICO2);
    FUCO2inc = FICO2inc * P * XCO2bis;
    FUCO2i = FUCO2inc * 0.00001; //la m�me chose mais en bar
    logFIN2 = (BN2 / GRB * (ZN - 1) - Math.log(ZN - GRB) + GRA / GRB * (BN2 / GRB - 2 / A * ArN2) * Math.log(1 + GRB / ZN));
    FIN2inc = Math.exp(logFIN2);
    FUN2inc = FIN2inc * P * XN2bis;
    FUN2i = FUN2inc * 0.00001;
    logFICH4 = (BCH4 / GRB * (ZN - 1) - Math.log(ZN - GRB) + GRA / GRB * (BCH4 / GRB - 2 / A * ArCH4) * Math.log(1 + GRB / ZN));
    FICH4inc = Math.exp(logFICH4);
    FUCH4inc = FICH4inc * P * XCH4bis;
    FUCH4i = FUCH4inc * 0.00001;
    logFINH3 = (BNH3 / GRB * (ZN - 1) - Math.log(ZN - GRB) + GRA / GRB * (BNH3 / GRB - 2 / A * ArNH3) * Math.log(1 + GRB / ZN));
    FINH3inc = Math.exp(logFINH3);
    FUNH3inc = FINH3inc * P * XNH3bis;
    FUNH3i = FUNH3inc * 0.00001;
    logFIMG = (BMG / GRB * (ZN - 1) - Math.log(ZN - GRB) + GRA / GRB * (BMG / GRB - 2 / A * ArMG) * Math.log(1 + GRB / ZN));
    FIMGinc = Math.exp(logFIMG);
    FUMGinc = FIMGinc * P * XMGbis;
    FUMGi = FUMGinc * 0.00001;
    ///////////////////////////
    $("#4-11").text(Number((FUCOi).toFixed(5)).toString());
    ///////////////////////////////////////////
    /////////////////////////////////////////
    XH2Obis = 0;
    XCO2bis = 1;
    XCObis = 0;
    XH2bis = 0;
    XN2bis = 0;
    XCH4bis = 0;
    XNH3bis = 0;
    XMGbis = 0;
    Pb = parseFloat($("#0-1").text());
    P = Pb * 100000; //passage de la pression de bar en Pa
    T = parseFloat($("#1-1").text()) + 273.15;
    TcH2O = parseFloat($("#2-4").text()); //temp�rature critique de H2O dans la cellule J8
    PcH2O = parseFloat($("#2-3").text()); //pression critique de H2O
    TcCO2 = parseFloat($("#3-4").text());
    PcCO2 = parseFloat($("#3-3").text());
    TcCO = parseFloat($("#4-4").text());
    PcCO = parseFloat($("#4-3").text());
    TcH2 = parseFloat($("#1-4").text());
    PcH2 = parseFloat($("#1-3").text());
    TcN2 = parseFloat($("#7-4").text());
    PcN2 = parseFloat($("#7-3").text());
    TcCH4 = parseFloat($("#5-4").text());
    PcCH4 = parseFloat($("#5-3").text());
    TcNH3 = parseFloat($("#8-4").text());
    PcNH3 = parseFloat($("#8-3").text());
    TcMG = parseFloat($("#6-4").text());
    PcMG = parseFloat($("#6-3").text());
    R = 8.314472; //constante des gaz parfaits
    ///////////////////////////////////////////////
    //calcul des facteurs acentriques
    wH2O = parseFloat($("#2-5").text());
    nH2O = 0.48508 + 1.55171 * wH2O - 0.15613 * Math.pow(wH2O, 2);
    alphaH2O = Math.pow(1 + nH2O * (1 - Math.pow(T / TcH2O, 0.5)), 2);
    wCO2 = parseFloat($("#3-5").text());
    nCO2 = 0.48508 + 1.55171 * wCO2 - 0.15613 * Math.pow(wCO2, 2);
    alphaCO2 = Math.pow(1 + nCO2 * (1 - Math.pow(T / TcCO2, 0.5)), 2);
    wCO = parseFloat($("#4-5").text());
    nCO = 0.48508 + 1.55171 * wCO - 0.15613 * Math.pow(wCO, 2);
    alphaCO = Math.pow(1 + nCO * (1 - Math.pow(T / TcCO, 0.5)), 2);
    wH2 = parseFloat($("#1-5").text());
    nH2 = 0.48508 + 1.55171 * wH2 - 0.15613 * Math.pow(wH2, 2);
    alphaH2 = Math.pow(1 + nH2 * (1 - Math.pow(T / TcH2, 0.5)), 2);
    wN2 = parseFloat($("#7-5").text());
    nN2 = 0.48508 + 1.55171 * wN2 - 0.15613 * Math.pow(wN2, 2);
    alphaN2 = Math.pow(1 + nN2 * (1 - Math.pow(T / TcN2, 0.5)), 2);
    wCH4 = parseFloat($("#5-5").text());
    nCH4 = 0.48508 + 1.55171 * wCH4 - 0.15613 * Math.pow(wCH4, 2);
    alphaCH4 = Math.pow(1 + nCH4 * (1 - Math.pow(T / TcCH4, 0.5)), 2);
    wNH3 = parseFloat($("#8-5").text());
    nNH3 = 0.48508 + 1.55171 * wNH3 - 0.15613 * Math.pow(wNH3, 2);
    alphaNH3 = Math.pow(1 + nNH3 * (1 - Math.pow(T / TcNH3, 0.5)), 2);
    wMG = parseFloat($("#6-5").text());
    nMG = 0.48508 + 1.55171 * wMG - 0.15613 * Math.pow(wMG, 2);
    alphaMG = Math.pow(1 + nMG * (1 - Math.pow(T / TcMG, 0.5)), 2);
    /////////////////////////
    AH2 = 0.42748 * alphaH2 * Math.pow(TcH2, 2) / (PcH2 * 100000) * P / Math.pow(T, 2); //avec Tr=T/Tc et Pr=P/Pc
    BH2 = 0.08664 * TcH2 / (PcH2 * 100000) * P / (T);
    ACO2 = 0.42748 * alphaCO2 * Math.pow(TcCO2, 2) / (PcCO2 * 100000) * P / Math.pow(T, 2);
    BCO2 = 0.08664 * TcCO2 / (PcCO2 * 100000) * P / (T);
    AN2 = 0.42748 * alphaN2 * Math.pow(TcN2, 2) / (PcN2 * 100000) * P / Math.pow(T, 2);
    BN2 = 0.08664 * TcN2 / (PcN2 * 100000) * P / (T);
    AH2O = 0.42748 * alphaH2O * Math.pow(TcH2O, 2) / (PcH2O * 100000) * P / Math.pow(T, 2);
    BH2O = 0.08664 * TcH2O / (PcH2O * 100000) * P / (T);
    ACO = 0.42748 * alphaCO * Math.pow(TcCO, 2) / (PcCO * 100000) * P / Math.pow(T, 2);
    BCO = 0.08664 * TcCO / (PcCO * 100000) * P / (T);
    ACH4 = 0.42748 * alphaCH4 * Math.pow(TcCH4, 2) / (PcCH4 * 100000) * P / Math.pow(T, 2);
    BCH4 = 0.08664 * TcCH4 / (PcCH4 * 100000) * P / (T);
    ANH3 = 0.42748 * alphaNH3 * Math.pow(TcNH3, 2) / (PcNH3 * 100000) * P / Math.pow(T, 2);
    BNH3 = 0.08664 * TcNH3 / (PcNH3 * 100000) * P / (T);
    AMG = 0.42748 * alphaMG * Math.pow(TcMG, 2) / (PcMG * 100000) * P / Math.pow(T, 2);
    BMG = 0.08664 * TcMG / (PcMG * 100000) * P / (T);
    ///////////////////////////////////
    grAbis = Math.pow(XMGbis, 2) * AMG + 2 * (1 - 0) * XMGbis * XH2bis * Math.pow(AMG * AH2, 0.5) + 2 * (1 - 0) * XMGbis * XCO2bis * Math.pow(AMG * ACO2, 0.5) + 2 * (1 - 0) * XMGbis * XN2bis * Math.pow(AMG * AN2, 0.5) + 2 * (1 - 0) * XMGbis * XH2Obis * Math.pow(AMG * AH2O, 0.5) + 2 * (1 - 0) * XMGbis * XCObis * Math.pow(AMG * ACO2, 0.5) + 2 * (1 - 0) * XMGbis * XCH4bis * Math.pow(AMG * ACH4, 0.5) + 2 * (1 - 0) * XMGbis * XNH3bis * Math.pow(AMG * ANH3, 0.5);
    grAsuite = Math.pow(XCH4bis, 2) * ACH4 + Math.pow(XNH3bis, 2) * ANH3 + 2 * (1 - 0) * XCH4bis * XCObis * Math.pow(ACO * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XH2Obis * Math.pow(AH2O * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XCO2bis * Math.pow(ACO2 * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XH2bis * Math.pow(AH2 * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XN2bis * Math.pow(AN2 * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XNH3bis * Math.pow(ANH3 * ACH4, 0.5) + 2 * (1 - 0) * XH2Obis * XNH3bis * Math.pow(ANH3 * AH2O, 0.5) + 2 * (1 - 0) * XCO2bis * XNH3bis * Math.pow(ANH3 * ACO2, 0.5) + 2 * (1 - 0) * XCObis * XNH3bis * Math.pow(ANH3 * ACO, 0.5) + 2 * (1 - 0) * XH2bis * XNH3bis * Math.pow(ANH3 * AH2, 0.5) + 2 * (1 - 0) * XN2bis * XNH3bis * Math.pow(ANH3 * AN2, 0.5) + grAbis;
    GRA = Math.pow(XH2Obis, 2) * AH2O + Math.pow(XCO2bis, 2) * ACO2 + 2 * (1 - 0) * XH2Obis * XCO2bis * Math.pow(AH2O * ACO2, 0.5) + Math.pow(XH2bis, 2) * AH2 + 2 * (1 - 0) * XH2Obis * XH2bis * Math.pow(AH2O * AH2, 0.5) + Math.pow(XN2bis, 2) * AN2 + 2 * (1 - 0) * XH2Obis * XN2bis * Math.pow(AH2O * AN2, 0.5) + 2 * (1 - 0) * XCO2bis * XH2bis * Math.pow(ACO2 * AH2, 0.5) + 2 * (1 - 0) * XCO2bis * XN2bis * Math.pow(ACO2 * AN2, 0.5) + 2 * (1 - 0) * XN2bis * XH2bis * Math.pow(AN2 * AH2, 0.5) + Math.pow(XCObis, 2) * ACO + 2 * (1 - 0) * XH2Obis * XCObis * Math.pow(AH2O * ACO, 0.5) + 2 * (1 - 0) * XCObis * XH2bis * Math.pow(ACO * AH2, 0.5) + 2 * (1 - 0) * XCObis * XN2bis * Math.pow(ACO * AN2, 0.5) + 2 * (1 - 0) * XCObis * XCO2bis * Math.pow(ACO * ACO2, 0.5) + grAsuite;
    GRB = XH2Obis * BH2O + XH2bis * BH2 + XCO2bis * BCO2 + XN2bis * BN2 + XCObis * BCO + XNH3bis * BNH3 + XCH4bis * BCH4 + XMGbis * BMG;
    //////////////////////////////////
    test = 10;
    ZN = 1000.01; //initialisation NR � changer si plantage
    while (test > 0.000000001)
    {
        FZ = Math.pow(ZN, 3) - Math.pow(ZN, 2) + (GRA - Math.pow(GRB, 2) - GRB) * ZN - GRA * GRB;
        FpZ = 3 * Math.pow(ZN, 2) - 2 * ZN + (GRA - Math.pow(GRB, 2) - GRB);
        ZN1 = ZN - FZ / FpZ;
        test = Math.abs(ZN1 - ZN);
        ZN = ZN1;
    }
    VN = (ZN * R * T / P);
    V = VN * 1000000;
    /////////////////////////////////////////
    //calculs des param�tres de repulsion et d'attraction de l'equation d'etat, aialphai et bialphai qui interviennent dans le calcul des coefficients de fugacit�
    AH2 = 0.42748 * alphaH2 * (R * Math.pow(TcH2, 2)) / (PcH2 * 100000);
    BH2 = 0.08664 * R * TcH2 / (PcH2 * 100000);
    BiH2 = BH2; //stockage de bialphai
    ACO2 = 0.42748 * alphaCO2 * (R * Math.pow(TcCO2, 2)) / (PcCO2 * 100000);
    BCO2 = 0.08664 * R * TcCO2 / (PcCO2 * 100000);
    BiCO2 = BCO2;
    AN2 = 0.42748 * alphaN2 * (R * Math.pow(TcN2, 2)) / (PcN2 * 100000);
    BN2 = 0.08664 * R * TcN2 / (PcN2 * 100000);
    BiN2 = BN2;
    AH2O = 0.42748 * alphaH2O * (R * Math.pow(TcH2O, 2)) / (PcH2O * 100000);
    BH2O = 0.08664 * R * TcH2O / (PcH2O * 100000);
    BiH2O = BH2O;
    ACO = 0.42748 * alphaCO * (R * Math.pow(TcCO, 2)) / (PcCO * 100000);
    BCO = 0.08664 * R * TcCO / (PcCO * 100000);
    BiCO = BCO;
    ACH4 = 0.42748 * alphaCH4 * (R * Math.pow(TcCH4, 2)) / (PcCH4 * 100000);
    BCH4 = 0.08664 * R * TcCH4 / (PcCH4 * 100000);
    BiCH4 = BCH4;
    ANH3 = 0.42748 * alphaNH3 * (R * Math.pow(TcNH3, 2)) / (PcNH3 * 100000);
    BNH3 = 0.08664 * R * TcNH3 / (PcNH3 * 100000);
    BiNH3 = BNH3;
    AMG = 0.42748 * alphaMG * (R * Math.pow(TcMG, 2)) / (PcMG * 100000);
    BMG = 0.08664 * R * TcMG / (PcMG * 100000);
    BiMG = BMG;
    ////////////////////////////////
    //calculs des param�tres de repulsion et d'attraction de l'equation d'etat, a et b qui n'interviennent pas dans le calcul du coefficient de fugacit�
    grAbis = Math.pow(XMGbis, 2) * AMG + 2 * (1 - 0) * XMGbis * XH2bis * Math.pow(AMG * AH2, 0.5) + 2 * (1 - 0) * XMGbis * XCO2bis * Math.pow(AMG * ACO2, 0.5) + 2 * (1 - 0) * XMGbis * XN2bis * Math.pow(AMG * AN2, 0.5) + 2 * (1 - 0) * XMGbis * XH2Obis * Math.pow(AMG * AH2O, 0.5) + 2 * (1 - 0) * XMGbis * XCObis * Math.pow(AMG * ACO2, 0.5) + 2 * (1 - 0) * XMGbis * XCH4bis * Math.pow(AMG * ACH4, 0.5) + 2 * (1 - 0) * XMGbis * XNH3bis * Math.pow(AMG * ANH3, 0.5);
    grAsuite = Math.pow(XCH4bis, 2) * ACH4 + Math.pow(XNH3bis, 2) * ANH3 + 2 * (1 - 0) * XCH4bis * XCObis * Math.pow(ACO * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XH2Obis * Math.pow(AH2O * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XCO2bis * Math.pow(ACO2 * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XH2bis * Math.pow(AH2 * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XN2bis * Math.pow(AN2 * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XNH3bis * Math.pow(ANH3 * ACH4, 0.5) + 2 * (1 - 0) * XH2Obis * XNH3bis * Math.pow(ANH3 * AH2O, 0.5) + 2 * (1 - 0) * XCO2bis * XNH3bis * Math.pow(ANH3 * ACO2, 0.5) + 2 * (1 - 0) * XCObis * XNH3bis * Math.pow(ANH3 * ACO, 0.5) + 2 * (1 - 0) * XH2bis * XNH3bis * Math.pow(ANH3 * AH2, 0.5) + 2 * (1 - 0) * XN2bis * XNH3bis * Math.pow(ANH3 * AN2, 0.5) + grAbis;
    A = Math.pow(XH2Obis, 2) * AH2O + Math.pow(XCO2bis, 2) * ACO2 + 2 * (1 - 0) * XH2Obis * XCO2bis * Math.pow(AH2O * ACO2, 0.5) + Math.pow(XH2bis, 2) * AH2 + 2 * (1 - 0) * XH2Obis * XH2bis * Math.pow(AH2O * AH2, 0.5) + Math.pow(XN2bis, 2) * AN2 + 2 * (1 - 0) * XH2Obis * XN2bis * Math.pow(AH2O * AN2, 0.5) + 2 * (1 - 0) * XCO2bis * XH2bis * Math.pow(ACO2 * AH2, 0.5) + 2 * (1 - 0) * XCO2bis * XN2bis * Math.pow(ACO2 * AN2, 0.5) + 2 * (1 - 0) * XN2bis * XH2bis * Math.pow(AN2 * AH2, 0.5) + Math.pow(XCObis, 2) * ACO + 2 * (1 - 0) * XH2Obis * XCObis * Math.pow(AH2O * ACO, 0.5) + 2 * (1 - 0) * XCObis * XH2bis * Math.pow(ACO * AH2, 0.5) + 2 * (1 - 0) * XCObis * XN2bis * Math.pow(ACO * AN2, 0.5) + 2 * (1 - 0) * XCObis * XCO2bis * Math.pow(ACO * ACO2, 0.5) + grAsuite;
    B = XH2Obis * BH2O + XH2bis * BH2 + XCO2bis * BCO2 + XN2bis * BN2 + XCObis * BCO + XNH3bis * BNH3 + XCH4bis * BCH4 + XMGbis * BMG;
    ////////////////////////////
    //calcul de d�riv�s de XiXj(1-Kji)racine(aialphai*akalphak)
    grAbis = (XMGbis) * Math.pow(AH2 * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(AH2 * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * AH2, 0.5) + grAbis;
    ArH2 = ((XH2bis)) * AH2 + (1 - 0) * (XH2Obis) * Math.pow(AH2O * AH2, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * AH2, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * AH2, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * AH2, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(ACO2 * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(ACO2 * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * ACO2, 0.5) + grAbis;
    ArCO2 = ((XCO2bis)) * ACO2 + (1 - 0) * (XH2Obis) * Math.pow(AH2O * ACO2, 0.5) + (1 - 0) * (XH2bis) * Math.pow(ACO2 * AH2, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * ACO2, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * ACO2, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(AN2 * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(AN2 * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * AN2, 0.5) + grAbis;
    ArN2 = ((XN2bis)) * AN2 + (1 - 0) * (XH2Obis) * Math.pow(AH2O * AN2, 0.5) + (1 - 0) * (XH2bis) * Math.pow(AN2 * AH2, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(AN2 * ACO2, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * AN2, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(AH2O * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(AH2O * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * AH2O, 0.5) + grAbis;
    ArH2O = (XH2Obis) * AH2O + (1 - 0) * (XH2bis) * Math.pow(AH2O * AH2, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * AH2O, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * AH2O, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * AH2O, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(ACO * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(ACO * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * ACO, 0.5) + grAbis;
    ArCO = (XCObis) * ACO + (1 - 0) * (XH2Obis) * Math.pow(AH2O * ACO, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * ACO, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * ACO, 0.5) + (1 - 0) * (XH2bis) * Math.pow(ACO * AH2, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(ACH4 * AMG, 0.5);
    grAsuite = (1 - 0) * (XH2bis) * Math.pow(AH2 * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * ACH4, 0.5) + grAbis;
    ArCH4 = ((XCH4bis)) * ACH4 + (1 - 0) * (XH2Obis) * Math.pow(AH2O * ACH4, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * ACH4, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * ACH4, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * ACH4, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(ANH3 * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(ANH3 * ACH4, 0.5) + (1 - 0) * (XH2bis) * Math.pow(ANH3 * AH2, 0.5) + grAbis;
    ArNH3 = ((XNH3bis)) * ANH3 + (1 - 0) * (XH2Obis) * Math.pow(AH2O * ANH3, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * ANH3, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * ANH3, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * ANH3, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XNH3bis) * Math.pow(AMG * ANH3, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(AMG * ACH4, 0.5) + (1 - 0) * (XH2bis) * Math.pow(AMG * AH2, 0.5) + grAbis;
    ArMG = ((XMGbis)) * AMG + (1 - 0) * (XH2Obis) * Math.pow(AH2O * AMG, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * AMG, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * AMG, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * AMG, 0.5) + grAsuite;
    /////////////////////////////
    SB = BH2O + BH2 + BCO2 + BN2 + BCO + BNH3 + BCH4 + BMG;
    DVDXH2 = (-(R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * VN * Math.pow(VN - B, 2)) * SB + (VN - B) * VN * (Math.pow(VN, 2) - Math.pow(B, 2)) * ArH2) / (-R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * (2 * VN + B) * Math.pow(VN - B, 2));
    DVDXH2O = (-(R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * VN * Math.pow(VN - B, 2)) * SB + (VN - B) * VN * (Math.pow(VN, 2) - Math.pow(B, 2)) * ArH2O) / (-R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * (2 * VN + B) * Math.pow(VN - B, 2));
    DVDXCO2 = (-(R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * VN * Math.pow(VN - B, 2)) * SB + (VN - B) * VN * (Math.pow(VN, 2) - Math.pow(B, 2)) * ArCO2) / (-R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * (2 * VN + B) * Math.pow(VN - B, 2));
    DVDXCO = (-(R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * VN * Math.pow(VN - B, 2)) * SB + (VN - B) * VN * (Math.pow(VN, 2) - Math.pow(B, 2)) * ArCO) / (-R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * (2 * VN + B) * Math.pow(VN - B, 2));
    DVDXN2 = (-(R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * VN * Math.pow(VN - B, 2)) * SB + (VN - B) * VN * (Math.pow(VN, 2) - Math.pow(B, 2)) * ArN2) / (-R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * (2 * VN + B) * Math.pow(VN - B, 2));
    DVDXCH4 = (-(R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * VN * Math.pow(VN - B, 2)) * SB + (VN - B) * VN * (Math.pow(VN, 2) - Math.pow(B, 2)) * ArCH4) / (-R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * (2 * VN + B) * Math.pow(VN - B, 2));
    DVDXNH3 = (-(R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * VN * Math.pow(VN - B, 2)) * SB + (VN - B) * VN * (Math.pow(VN, 2) - Math.pow(B, 2)) * ArNH3) / (-R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * (2 * VN + B) * Math.pow(VN - B, 2));
    DVDXMG = (-(R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * VN * Math.pow(VN - B, 2)) * SB + (VN - B) * VN * (Math.pow(VN, 2) - Math.pow(B, 2)) * ArMG) / (-R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * (2 * VN + B) * Math.pow(VN - B, 2));

    VCO2M = (VN * 1 * (XCO2bis) - 1 * (XCO2bis - 0 * XCO2bis) * 1 / 3 / 8 / 2 * DVDXCO2) * 1000000;
    VCOM = (VN * 1 * (XCObis) - 1 * (XCObis - 0 * XCObis) * 1 / 3 / 8 / 2 * DVDXCO) * 1000000;
    VH2M = (VN * 1 * (XH2bis) - 1 * (XH2bis - 0 * XH2bis) * 1 / 3 / 8 / 2 * DVDXH2) * 1000000;
    VN2M = (VN * 1 * (XN2bis) - 1 * (XN2bis - 0 * XN2bis) * 1 / 3 / 8 / 2 * DVDXN2) * 1000000;
    VCH4M = (VN * 1 * (XCH4bis) - 1 * (XCH4bis - 0 * XCH4bis) * 1 / 3 / 8 / 2 * DVDXCH4) * 1000000;
    VNH3M = (VN * 1 * (XNH3bis) - 1 * (XNH3bis - 0 * XNH3bis) * 1 / 3 / 8 / 2 * DVDXNH3) * 1000000;
    VH2OM = (VN * 1 * (XH2Obis) - 1 * (XH2Obis - 0 * XH2Obis) * 1 / 3 / 8 / 2 * DVDXH2O) * 1000000;
    VMGM = (VN * 1 * (XMGbis) - 1 * (XMGbis - 0 * XMGbis) * 1 / 3 / 8 / 2 * DVDXMG) * 1000000;
    //calcul de somme de Xk(1-Kki)racine(aialphai*akalphak)  (avant le 2 dans le calcul du coefficient de fugacit� de l'esp�ce k)
    grAbis = (XMGbis) * Math.pow(AH2 * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(AH2 * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * AH2, 0.5) + grAbis;
    ArH2 = ((XH2bis)) * AH2 + (1 - 0) * (XH2Obis) * Math.pow(AH2O * AH2, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * AH2, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * AH2, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * AH2, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(ACO2 * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(ACO2 * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * ACO2, 0.5) + grAbis;
    ArCO2 = ((XCO2bis)) * ACO2 + (1 - 0) * (XH2Obis) * Math.pow(AH2O * ACO2, 0.5) + (1 - 0) * (XH2bis) * Math.pow(ACO2 * AH2, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * ACO2, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * ACO2, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(AN2 * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(AN2 * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * AN2, 0.5) + grAbis;
    ArN2 = ((XN2bis)) * AN2 + (1 - 0) * (XH2Obis) * Math.pow(AH2O * AN2, 0.5) + (1 - 0) * (XH2bis) * Math.pow(AN2 * AH2, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(AN2 * ACO2, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * AN2, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(AH2O * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(AH2O * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * AH2O, 0.5) + grAbis;
    ArH2O = (XH2Obis) * AH2O + (1 - 0) * (XH2bis) * Math.pow(AH2O * AH2, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * AH2O, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * AH2O, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * AH2O, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(ACO * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(ACO * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * ACO, 0.5) + grAbis;
    ArCO = (XCObis) * ACO + (1 - 0) * (XH2Obis) * Math.pow(AH2O * ACO, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * ACO, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * ACO, 0.5) + (1 - 0) * (XH2bis) * Math.pow(ACO * AH2, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(ACH4 * AMG, 0.5);
    grAsuite = (1 - 0) * (XH2bis) * Math.pow(AH2 * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * ACH4, 0.5) + grAbis;
    ArCH4 = ((XCH4bis)) * ACH4 + (1 - 0) * (XH2Obis) * Math.pow(AH2O * ACH4, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * ACH4, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * ACH4, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * ACH4, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(ANH3 * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(ANH3 * ACH4, 0.5) + (1 - 0) * (XH2bis) * Math.pow(ANH3 * AH2, 0.5) + grAbis;
    ArNH3 = ((XNH3bis)) * ANH3 + (1 - 0) * (XH2Obis) * Math.pow(AH2O * ANH3, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * ANH3, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * ANH3, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * ANH3, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XNH3bis) * Math.pow(AMG * ANH3, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(AMG * ACH4, 0.5) + (1 - 0) * (XH2bis) * Math.pow(AMG * AH2, 0.5) + grAbis;
    ArMG = ((XMGbis)) * AMG + (1 - 0) * (XH2Obis) * Math.pow(AH2O * AMG, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * AMG, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * AMG, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * AMG, 0.5) + grAsuite;
    //calculs des param�tres de repulsion et d'attraction de l'equation d'etat, Ai et Bi qui interviennent dans le calcul du coefficient de fugacit�
    AH2 = 0.42748 * alphaH2 * Math.pow(TcH2, 2) / (PcH2 * 100000) * P / Math.pow(T, 2); //avec Tr=T/Tc et Pr=P/Pc
    BH2 = 0.08664 * TcH2 / (PcH2 * 100000) * P / (T);
    ACO2 = 0.42748 * alphaCO2 * Math.pow(TcCO2, 2) / (PcCO2 * 100000) * P / Math.pow(T, 2);
    BCO2 = 0.08664 * TcCO2 / (PcCO2 * 100000) * P / (T);
    AN2 = 0.42748 * alphaN2 * Math.pow(TcN2, 2) / (PcN2 * 100000) * P / Math.pow(T, 2);
    BN2 = 0.08664 * TcN2 / (PcN2 * 100000) * P / (T);
    AH2O = 0.42748 * alphaH2O * Math.pow(TcH2O, 2) / (PcH2O * 100000) * P / Math.pow(T, 2);
    BH2O = 0.08664 * TcH2O / (PcH2O * 100000) * P / (T);
    ACO = 0.42748 * alphaCO * Math.pow(TcCO, 2) / (PcCO * 100000) * P / Math.pow(T, 2);
    BCO = 0.08664 * TcCO / (PcCO * 100000) * P / (T);
    ACH4 = 0.42748 * alphaCH4 * Math.pow(TcCH4, 2) / (PcCH4 * 100000) * P / Math.pow(T, 2);
    BCH4 = 0.08664 * TcCH4 / (PcCH4 * 100000) * P / (T);
    ANH3 = 0.42748 * alphaNH3 * Math.pow(TcNH3, 2) / (PcNH3 * 100000) * P / Math.pow(T, 2);
    BNH3 = 0.08664 * TcNH3 / (PcNH3 * 100000) * P / (T);
    AMG = 0.42748 * alphaMG * Math.pow(TcMG, 2) / (PcMG * 100000) * P / Math.pow(T, 2);
    BMG = 0.08664 * TcMG / (PcMG * 100000) * P / (T);
    ///////////////////////////////////
    //calculs des param�tres de repulsion et d'attraction de l'equation d'etat, A et B qui interviennent dans le calcul du coefficient de fugacit�
    grAbis = Math.pow(XMGbis, 2) * AMG + 2 * (1 - 0) * XMGbis * XH2bis * Math.pow(AMG * AH2, 0.5) + 2 * (1 - 0) * XMGbis * XCO2bis * Math.pow(AMG * ACO2, 0.5) + 2 * (1 - 0) * XMGbis * XN2bis * Math.pow(AMG * AN2, 0.5) + 2 * (1 - 0) * XMGbis * XH2Obis * Math.pow(AMG * AH2O, 0.5) + 2 * (1 - 0) * XMGbis * XCObis * Math.pow(AMG * ACO2, 0.5) + 2 * (1 - 0) * XMGbis * XCH4bis * Math.pow(AMG * ACH4, 0.5) + 2 * (1 - 0) * XMGbis * XNH3bis * Math.pow(AMG * ANH3, 0.5);
    grAsuite = Math.pow(XCH4bis, 2) * ACH4 + Math.pow(XNH3bis, 2) * ANH3 + 2 * (1 - 0) * XCH4bis * XCObis * Math.pow(ACO * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XH2Obis * Math.pow(AH2O * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XCO2bis * Math.pow(ACO2 * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XH2bis * Math.pow(AH2 * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XN2bis * Math.pow(AN2 * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XNH3bis * Math.pow(ANH3 * ACH4, 0.5) + 2 * (1 - 0) * XH2Obis * XNH3bis * Math.pow(ANH3 * AH2O, 0.5) + 2 * (1 - 0) * XCO2bis * XNH3bis * Math.pow(ANH3 * ACO2, 0.5) + 2 * (1 - 0) * XCObis * XNH3bis * Math.pow(ANH3 * ACO, 0.5) + 2 * (1 - 0) * XH2bis * XNH3bis * Math.pow(ANH3 * AH2, 0.5) + 2 * (1 - 0) * XN2bis * XNH3bis * Math.pow(ANH3 * AN2, 0.5) + grAbis;
    GRA = Math.pow(XH2Obis, 2) * AH2O + Math.pow(XCO2bis, 2) * ACO2 + 2 * (1 - 0) * XH2Obis * XCO2bis * Math.pow(AH2O * ACO2, 0.5) + Math.pow(XH2bis, 2) * AH2 + 2 * (1 - 0) * XH2Obis * XH2bis * Math.pow(AH2O * AH2, 0.5) + Math.pow(XN2bis, 2) * AN2 + 2 * (1 - 0) * XH2Obis * XN2bis * Math.pow(AH2O * AN2, 0.5) + 2 * (1 - 0) * XCO2bis * XH2bis * Math.pow(ACO2 * AH2, 0.5) + 2 * (1 - 0) * XCO2bis * XN2bis * Math.pow(ACO2 * AN2, 0.5) + 2 * (1 - 0) * XN2bis * XH2bis * Math.pow(AN2 * AH2, 0.5) + Math.pow(XCObis, 2) * ACO + 2 * (1 - 0) * XH2Obis * XCObis * Math.pow(AH2O * ACO, 0.5) + 2 * (1 - 0) * XCObis * XH2bis * Math.pow(ACO * AH2, 0.5) + 2 * (1 - 0) * XCObis * XN2bis * Math.pow(ACO * AN2, 0.5) + 2 * (1 - 0) * XCObis * XCO2bis * Math.pow(ACO * ACO2, 0.5) + grAsuite;
    GRB = XH2Obis * BH2O + XH2bis * BH2 + XCO2bis * BCO2 + XN2bis * BN2 + XCObis * BCO + XNH3bis * BNH3 + XCH4bis * BCH4 + XMGbis * BMG;
    //calculs des coefficients de fugacit�s   
    //logFIH2Osoave = ZN - 1 - Log(ZN - GRB) - GRA / GRB * Log((ZN + GRB) / ZN)
    //FIH2Oincsoave = 10 ^ (logFIH2Osoave / 2.303)
    //Worksheets(1).Range("C31").Value = FIH2Oincsoave
    logFIH2O = (BH2O / GRB * (ZN - 1) - Math.log(ZN - GRB) + GRA / GRB * (BH2O / GRB - 2 / A * ArH2O) * Math.log(1 + GRB / ZN));
    FIH2Oinc = Math.exp(logFIH2O);
    FUH2Oinc = FIH2Oinc * P * XH2Obis;
    FUH2Oi = FUH2Oinc * 0.00001;
    logFIH2 = (BH2 / GRB * (ZN - 1) - Math.log(ZN - GRB) + GRA / GRB * (BH2 / GRB - 2 / A * ArH2) * Math.log(1 + GRB / ZN));
    FIH2inc = Math.exp(logFIH2);
    FUH2inc = FIH2inc * P * XH2bis;
    FUH2i = FUH2inc * 0.00001;
    logFICO = (BCO / GRB * (ZN - 1) - Math.log(ZN - GRB) + GRA / GRB * (BCO / GRB - 2 / A * ArCO) * Math.log(1 + GRB / ZN));
    FICOinc = Math.exp(logFICO);
    FUCOinc = FICOinc * P * XCObis;
    FUCOi = FUCOinc * 0.00001;
    logFICO2 = (BCO2 / GRB * (ZN - 1) - Math.log(ZN - GRB) + GRA / GRB * (BCO2 / GRB - 2 / A * ArCO2) * Math.log(1 + GRB / ZN));
    FICO2inc = Math.exp(logFICO2);
    FUCO2inc = FICO2inc * P * XCO2bis;
    FUCO2i = FUCO2inc * 0.00001; //la m�me chose mais en bar
    logFIN2 = (BN2 / GRB * (ZN - 1) - Math.log(ZN - GRB) + GRA / GRB * (BN2 / GRB - 2 / A * ArN2) * Math.log(1 + GRB / ZN));
    FIN2inc = Math.exp(logFIN2);
    FUN2inc = FIN2inc * P * XN2bis;
    FUN2i = FUN2inc * 0.00001;
    logFICH4 = (BCH4 / GRB * (ZN - 1) - Math.log(ZN - GRB) + GRA / GRB * (BCH4 / GRB - 2 / A * ArCH4) * Math.log(1 + GRB / ZN));
    FICH4inc = Math.exp(logFICH4);
    FUCH4inc = FICH4inc * P * XCH4bis;
    FUCH4i = FUCH4inc * 0.00001;
    logFINH3 = (BNH3 / GRB * (ZN - 1) - Math.log(ZN - GRB) + GRA / GRB * (BNH3 / GRB - 2 / A * ArNH3) * Math.log(1 + GRB / ZN));
    FINH3inc = Math.exp(logFINH3);
    FUNH3inc = FINH3inc * P * XNH3bis;
    FUNH3i = FUNH3inc * 0.00001;
    logFIMG = (BMG / GRB * (ZN - 1) - Math.log(ZN - GRB) + GRA / GRB * (BMG / GRB - 2 / A * ArMG) * Math.log(1 + GRB / ZN));
    FIMGinc = Math.exp(logFIMG);
    FUMGinc = FIMGinc * P * XMGbis;
    FUMGi = FUMGinc * 0.00001;
    ///////////////////////////
    $("#3-11").text(Number((FUCO2i).toFixed(5)).toString());
    ///////////////////////////////////////////////////
    /////////////////////////////////////////
    XH2Obis = 1;
    XCO2bis = 0;
    XCObis = 0;
    XH2bis = 0;
    XN2bis = 0;
    XCH4bis = 0;
    XNH3bis = 0;
    XMGbis = 0;
    Pb = parseFloat($("#0-1").text());
    P = Pb * 100000; //passage de la pression de bar en Pa
    T = parseFloat($("#1-1").text()) + 273.15;
    TcH2O = parseFloat($("#2-4").text()); //temp�rature critique de H2O dans la cellule J8
    PcH2O = parseFloat($("#2-3").text()); //pression critique de H2O
    TcCO2 = parseFloat($("#3-4").text());
    PcCO2 = parseFloat($("#3-3").text());
    TcCO = parseFloat($("#4-4").text());
    PcCO = parseFloat($("#4-3").text());
    TcH2 = parseFloat($("#1-4").text());
    PcH2 = parseFloat($("#1-3").text());
    TcN2 = parseFloat($("#7-4").text());
    PcN2 = parseFloat($("#7-3").text());
    TcCH4 = parseFloat($("#5-4").text());
    PcCH4 = parseFloat($("#5-3").text());
    TcNH3 = parseFloat($("#8-4").text());
    PcNH3 = parseFloat($("#8-3").text());
    TcMG = parseFloat($("#6-4").text());
    PcMG = parseFloat($("#6-3").text());
    R = 8.314472; //constante des gaz parfaits
    ///////////////////////////////////////////////
    //calcul des facteurs acentriques
    wH2O = parseFloat($("#2-5").text());
    nH2O = 0.48508 + 1.55171 * wH2O - 0.15613 * Math.pow(wH2O, 2);
    alphaH2O = Math.pow(1 + nH2O * (1 - Math.pow(T / TcH2O, 0.5)), 2);
    wCO2 = parseFloat($("#3-5").text());
    nCO2 = 0.48508 + 1.55171 * wCO2 - 0.15613 * Math.pow(wCO2, 2);
    alphaCO2 = Math.pow(1 + nCO2 * (1 - Math.pow(T / TcCO2, 0.5)), 2);
    wCO = parseFloat($("#4-5").text());
    nCO = 0.48508 + 1.55171 * wCO - 0.15613 * Math.pow(wCO, 2);
    alphaCO = Math.pow(1 + nCO * (1 - Math.pow(T / TcCO, 0.5)), 2);
    wH2 = parseFloat($("#1-5").text());
    nH2 = 0.48508 + 1.55171 * wH2 - 0.15613 * Math.pow(wH2, 2);
    alphaH2 = Math.pow(1 + nH2 * (1 - Math.pow(T / TcH2, 0.5)), 2);
    wN2 = parseFloat($("#7-5").text());
    nN2 = 0.48508 + 1.55171 * wN2 - 0.15613 * Math.pow(wN2, 2);
    alphaN2 = Math.pow(1 + nN2 * (1 - Math.pow(T / TcN2, 0.5)), 2);
    wCH4 = parseFloat($("#5-5").text());
    nCH4 = 0.48508 + 1.55171 * wCH4 - 0.15613 * Math.pow(wCH4, 2);
    alphaCH4 = Math.pow(1 + nCH4 * (1 - Math.pow(T / TcCH4, 0.5)), 2);
    wNH3 = parseFloat($("#8-5").text());
    nNH3 = 0.48508 + 1.55171 * wNH3 - 0.15613 * Math.pow(wNH3, 2);
    alphaNH3 = Math.pow(1 + nNH3 * (1 - Math.pow(T / TcNH3, 0.5)), 2);
    wMG = parseFloat($("#6-5").text());
    nMG = 0.48508 + 1.55171 * wMG - 0.15613 * Math.pow(wMG, 2);
    alphaMG = Math.pow(1 + nMG * (1 - Math.pow(T / TcMG, 0.5)), 2);
    /////////////////////////
    AH2 = 0.42748 * alphaH2 * Math.pow(TcH2, 2) / (PcH2 * 100000) * P / Math.pow(T, 2); //avec Tr=T/Tc et Pr=P/Pc
    BH2 = 0.08664 * TcH2 / (PcH2 * 100000) * P / (T);
    ACO2 = 0.42748 * alphaCO2 * Math.pow(TcCO2, 2) / (PcCO2 * 100000) * P / Math.pow(T, 2);
    BCO2 = 0.08664 * TcCO2 / (PcCO2 * 100000) * P / (T);
    AN2 = 0.42748 * alphaN2 * Math.pow(TcN2, 2) / (PcN2 * 100000) * P / Math.pow(T, 2);
    BN2 = 0.08664 * TcN2 / (PcN2 * 100000) * P / (T);
    AH2O = 0.42748 * alphaH2O * Math.pow(TcH2O, 2) / (PcH2O * 100000) * P / Math.pow(T, 2);
    BH2O = 0.08664 * TcH2O / (PcH2O * 100000) * P / (T);
    ACO = 0.42748 * alphaCO * Math.pow(TcCO, 2) / (PcCO * 100000) * P / Math.pow(T, 2);
    BCO = 0.08664 * TcCO / (PcCO * 100000) * P / (T);
    ACH4 = 0.42748 * alphaCH4 * Math.pow(TcCH4, 2) / (PcCH4 * 100000) * P / Math.pow(T, 2);
    BCH4 = 0.08664 * TcCH4 / (PcCH4 * 100000) * P / (T);
    ANH3 = 0.42748 * alphaNH3 * Math.pow(TcNH3, 2) / (PcNH3 * 100000) * P / Math.pow(T, 2);
    BNH3 = 0.08664 * TcNH3 / (PcNH3 * 100000) * P / (T);
    AMG = 0.42748 * alphaMG * Math.pow(TcMG, 2) / (PcMG * 100000) * P / Math.pow(T, 2);
    BMG = 0.08664 * TcMG / (PcMG * 100000) * P / (T);
    ///////////////////////////////////
    grAbis = Math.pow(XMGbis, 2) * AMG + 2 * (1 - 0) * XMGbis * XH2bis * Math.pow(AMG * AH2, 0.5) + 2 * (1 - 0) * XMGbis * XCO2bis * Math.pow(AMG * ACO2, 0.5) + 2 * (1 - 0) * XMGbis * XN2bis * Math.pow(AMG * AN2, 0.5) + 2 * (1 - 0) * XMGbis * XH2Obis * Math.pow(AMG * AH2O, 0.5) + 2 * (1 - 0) * XMGbis * XCObis * Math.pow(AMG * ACO2, 0.5) + 2 * (1 - 0) * XMGbis * XCH4bis * Math.pow(AMG * ACH4, 0.5) + 2 * (1 - 0) * XMGbis * XNH3bis * Math.pow(AMG * ANH3, 0.5);
    grAsuite = Math.pow(XCH4bis, 2) * ACH4 + Math.pow(XNH3bis, 2) * ANH3 + 2 * (1 - 0) * XCH4bis * XCObis * Math.pow(ACO * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XH2Obis * Math.pow(AH2O * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XCO2bis * Math.pow(ACO2 * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XH2bis * Math.pow(AH2 * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XN2bis * Math.pow(AN2 * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XNH3bis * Math.pow(ANH3 * ACH4, 0.5) + 2 * (1 - 0) * XH2Obis * XNH3bis * Math.pow(ANH3 * AH2O, 0.5) + 2 * (1 - 0) * XCO2bis * XNH3bis * Math.pow(ANH3 * ACO2, 0.5) + 2 * (1 - 0) * XCObis * XNH3bis * Math.pow(ANH3 * ACO, 0.5) + 2 * (1 - 0) * XH2bis * XNH3bis * Math.pow(ANH3 * AH2, 0.5) + 2 * (1 - 0) * XN2bis * XNH3bis * Math.pow(ANH3 * AN2, 0.5) + grAbis;
    GRA = Math.pow(XH2Obis, 2) * AH2O + Math.pow(XCO2bis, 2) * ACO2 + 2 * (1 - 0) * XH2Obis * XCO2bis * Math.pow(AH2O * ACO2, 0.5) + Math.pow(XH2bis, 2) * AH2 + 2 * (1 - 0) * XH2Obis * XH2bis * Math.pow(AH2O * AH2, 0.5) + Math.pow(XN2bis, 2) * AN2 + 2 * (1 - 0) * XH2Obis * XN2bis * Math.pow(AH2O * AN2, 0.5) + 2 * (1 - 0) * XCO2bis * XH2bis * Math.pow(ACO2 * AH2, 0.5) + 2 * (1 - 0) * XCO2bis * XN2bis * Math.pow(ACO2 * AN2, 0.5) + 2 * (1 - 0) * XN2bis * XH2bis * Math.pow(AN2 * AH2, 0.5) + Math.pow(XCObis, 2) * ACO + 2 * (1 - 0) * XH2Obis * XCObis * Math.pow(AH2O * ACO, 0.5) + 2 * (1 - 0) * XCObis * XH2bis * Math.pow(ACO * AH2, 0.5) + 2 * (1 - 0) * XCObis * XN2bis * Math.pow(ACO * AN2, 0.5) + 2 * (1 - 0) * XCObis * XCO2bis * Math.pow(ACO * ACO2, 0.5) + grAsuite;
    GRB = XH2Obis * BH2O + XH2bis * BH2 + XCO2bis * BCO2 + XN2bis * BN2 + XCObis * BCO + XNH3bis * BNH3 + XCH4bis * BCH4 + XMGbis * BMG;
    //////////////////////////////////
    test = 10;
    ZN = 1000.01; //initialisation NR � changer si plantage
    while (test > 0.000000001)
    {
        FZ = Math.pow(ZN, 3) - Math.pow(ZN, 2) + (GRA - Math.pow(GRB, 2) - GRB) * ZN - GRA * GRB;
        FpZ = 3 * Math.pow(ZN, 2) - 2 * ZN + (GRA - Math.pow(GRB, 2) - GRB);
        ZN1 = ZN - FZ / FpZ;
        test = Math.abs(ZN1 - ZN);
        ZN = ZN1;
    }
    VN = (ZN * R * T / P);
    V = VN * 1000000;
    /////////////////////////////////////////
    //calculs des param�tres de repulsion et d'attraction de l'equation d'etat, aialphai et bialphai qui interviennent dans le calcul des coefficients de fugacit�
    AH2 = 0.42748 * alphaH2 * (R * Math.pow(TcH2, 2)) / (PcH2 * 100000);
    BH2 = 0.08664 * R * TcH2 / (PcH2 * 100000);
    BiH2 = BH2; //stockage de bialphai
    ACO2 = 0.42748 * alphaCO2 * (R * Math.pow(TcCO2, 2)) / (PcCO2 * 100000);
    BCO2 = 0.08664 * R * TcCO2 / (PcCO2 * 100000);
    BiCO2 = BCO2;
    AN2 = 0.42748 * alphaN2 * (R * Math.pow(TcN2, 2)) / (PcN2 * 100000);
    BN2 = 0.08664 * R * TcN2 / (PcN2 * 100000);
    BiN2 = BN2;
    AH2O = 0.42748 * alphaH2O * (R * Math.pow(TcH2O, 2)) / (PcH2O * 100000);
    BH2O = 0.08664 * R * TcH2O / (PcH2O * 100000);
    BiH2O = BH2O;
    ACO = 0.42748 * alphaCO * (R * Math.pow(TcCO, 2)) / (PcCO * 100000);
    BCO = 0.08664 * R * TcCO / (PcCO * 100000);
    BiCO = BCO;
    ACH4 = 0.42748 * alphaCH4 * (R * Math.pow(TcCH4, 2)) / (PcCH4 * 100000);
    BCH4 = 0.08664 * R * TcCH4 / (PcCH4 * 100000);
    BiCH4 = BCH4;
    ANH3 = 0.42748 * alphaNH3 * (R * Math.pow(TcNH3, 2)) / (PcNH3 * 100000);
    BNH3 = 0.08664 * R * TcNH3 / (PcNH3 * 100000);
    BiNH3 = BNH3;
    AMG = 0.42748 * alphaMG * (R * Math.pow(TcMG, 2)) / (PcMG * 100000);
    BMG = 0.08664 * R * TcMG / (PcMG * 100000);
    BiMG = BMG;
    ////////////////////////////////
    //calculs des param�tres de repulsion et d'attraction de l'equation d'etat, a et b qui n'interviennent pas dans le calcul du coefficient de fugacit�
    grAbis = Math.pow(XMGbis, 2) * AMG + 2 * (1 - 0) * XMGbis * XH2bis * Math.pow(AMG * AH2, 0.5) + 2 * (1 - 0) * XMGbis * XCO2bis * Math.pow(AMG * ACO2, 0.5) + 2 * (1 - 0) * XMGbis * XN2bis * Math.pow(AMG * AN2, 0.5) + 2 * (1 - 0) * XMGbis * XH2Obis * Math.pow(AMG * AH2O, 0.5) + 2 * (1 - 0) * XMGbis * XCObis * Math.pow(AMG * ACO2, 0.5) + 2 * (1 - 0) * XMGbis * XCH4bis * Math.pow(AMG * ACH4, 0.5) + 2 * (1 - 0) * XMGbis * XNH3bis * Math.pow(AMG * ANH3, 0.5);
    grAsuite = Math.pow(XCH4bis, 2) * ACH4 + Math.pow(XNH3bis, 2) * ANH3 + 2 * (1 - 0) * XCH4bis * XCObis * Math.pow(ACO * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XH2Obis * Math.pow(AH2O * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XCO2bis * Math.pow(ACO2 * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XH2bis * Math.pow(AH2 * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XN2bis * Math.pow(AN2 * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XNH3bis * Math.pow(ANH3 * ACH4, 0.5) + 2 * (1 - 0) * XH2Obis * XNH3bis * Math.pow(ANH3 * AH2O, 0.5) + 2 * (1 - 0) * XCO2bis * XNH3bis * Math.pow(ANH3 * ACO2, 0.5) + 2 * (1 - 0) * XCObis * XNH3bis * Math.pow(ANH3 * ACO, 0.5) + 2 * (1 - 0) * XH2bis * XNH3bis * Math.pow(ANH3 * AH2, 0.5) + 2 * (1 - 0) * XN2bis * XNH3bis * Math.pow(ANH3 * AN2, 0.5) + grAbis;
    A = Math.pow(XH2Obis, 2) * AH2O + Math.pow(XCO2bis, 2) * ACO2 + 2 * (1 - 0) * XH2Obis * XCO2bis * Math.pow(AH2O * ACO2, 0.5) + Math.pow(XH2bis, 2) * AH2 + 2 * (1 - 0) * XH2Obis * XH2bis * Math.pow(AH2O * AH2, 0.5) + Math.pow(XN2bis, 2) * AN2 + 2 * (1 - 0) * XH2Obis * XN2bis * Math.pow(AH2O * AN2, 0.5) + 2 * (1 - 0) * XCO2bis * XH2bis * Math.pow(ACO2 * AH2, 0.5) + 2 * (1 - 0) * XCO2bis * XN2bis * Math.pow(ACO2 * AN2, 0.5) + 2 * (1 - 0) * XN2bis * XH2bis * Math.pow(AN2 * AH2, 0.5) + Math.pow(XCObis, 2) * ACO + 2 * (1 - 0) * XH2Obis * XCObis * Math.pow(AH2O * ACO, 0.5) + 2 * (1 - 0) * XCObis * XH2bis * Math.pow(ACO * AH2, 0.5) + 2 * (1 - 0) * XCObis * XN2bis * Math.pow(ACO * AN2, 0.5) + 2 * (1 - 0) * XCObis * XCO2bis * Math.pow(ACO * ACO2, 0.5) + grAsuite;
    B = XH2Obis * BH2O + XH2bis * BH2 + XCO2bis * BCO2 + XN2bis * BN2 + XCObis * BCO + XNH3bis * BNH3 + XCH4bis * BCH4 + XMGbis * BMG;
    ////////////////////////////
    //calcul de d�riv�s de XiXj(1-Kji)racine(aialphai*akalphak)
    grAbis = (XMGbis) * Math.pow(AH2 * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(AH2 * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * AH2, 0.5) + grAbis;
    ArH2 = ((XH2bis)) * AH2 + (1 - 0) * (XH2Obis) * Math.pow(AH2O * AH2, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * AH2, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * AH2, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * AH2, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(ACO2 * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(ACO2 * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * ACO2, 0.5) + grAbis;
    ArCO2 = ((XCO2bis)) * ACO2 + (1 - 0) * (XH2Obis) * Math.pow(AH2O * ACO2, 0.5) + (1 - 0) * (XH2bis) * Math.pow(ACO2 * AH2, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * ACO2, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * ACO2, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(AN2 * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(AN2 * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * AN2, 0.5) + grAbis;
    ArN2 = ((XN2bis)) * AN2 + (1 - 0) * (XH2Obis) * Math.pow(AH2O * AN2, 0.5) + (1 - 0) * (XH2bis) * Math.pow(AN2 * AH2, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(AN2 * ACO2, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * AN2, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(AH2O * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(AH2O * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * AH2O, 0.5) + grAbis;
    ArH2O = (XH2Obis) * AH2O + (1 - 0) * (XH2bis) * Math.pow(AH2O * AH2, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * AH2O, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * AH2O, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * AH2O, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(ACO * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(ACO * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * ACO, 0.5) + grAbis;
    ArCO = (XCObis) * ACO + (1 - 0) * (XH2Obis) * Math.pow(AH2O * ACO, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * ACO, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * ACO, 0.5) + (1 - 0) * (XH2bis) * Math.pow(ACO * AH2, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(ACH4 * AMG, 0.5);
    grAsuite = (1 - 0) * (XH2bis) * Math.pow(AH2 * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * ACH4, 0.5) + grAbis;
    ArCH4 = ((XCH4bis)) * ACH4 + (1 - 0) * (XH2Obis) * Math.pow(AH2O * ACH4, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * ACH4, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * ACH4, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * ACH4, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(ANH3 * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(ANH3 * ACH4, 0.5) + (1 - 0) * (XH2bis) * Math.pow(ANH3 * AH2, 0.5) + grAbis;
    ArNH3 = ((XNH3bis)) * ANH3 + (1 - 0) * (XH2Obis) * Math.pow(AH2O * ANH3, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * ANH3, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * ANH3, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * ANH3, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XNH3bis) * Math.pow(AMG * ANH3, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(AMG * ACH4, 0.5) + (1 - 0) * (XH2bis) * Math.pow(AMG * AH2, 0.5) + grAbis;
    ArMG = ((XMGbis)) * AMG + (1 - 0) * (XH2Obis) * Math.pow(AH2O * AMG, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * AMG, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * AMG, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * AMG, 0.5) + grAsuite;
    /////////////////////////////
    SB = BH2O + BH2 + BCO2 + BN2 + BCO + BNH3 + BCH4 + BMG;
    DVDXH2 = (-(R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * VN * Math.pow(VN - B, 2)) * SB + (VN - B) * VN * (Math.pow(VN, 2) - Math.pow(B, 2)) * ArH2) / (-R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * (2 * VN + B) * Math.pow(VN - B, 2));
    DVDXH2O = (-(R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * VN * Math.pow(VN - B, 2)) * SB + (VN - B) * VN * (Math.pow(VN, 2) - Math.pow(B, 2)) * ArH2O) / (-R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * (2 * VN + B) * Math.pow(VN - B, 2));
    DVDXCO2 = (-(R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * VN * Math.pow(VN - B, 2)) * SB + (VN - B) * VN * (Math.pow(VN, 2) - Math.pow(B, 2)) * ArCO2) / (-R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * (2 * VN + B) * Math.pow(VN - B, 2));
    DVDXCO = (-(R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * VN * Math.pow(VN - B, 2)) * SB + (VN - B) * VN * (Math.pow(VN, 2) - Math.pow(B, 2)) * ArCO) / (-R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * (2 * VN + B) * Math.pow(VN - B, 2));
    DVDXN2 = (-(R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * VN * Math.pow(VN - B, 2)) * SB + (VN - B) * VN * (Math.pow(VN, 2) - Math.pow(B, 2)) * ArN2) / (-R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * (2 * VN + B) * Math.pow(VN - B, 2));
    DVDXCH4 = (-(R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * VN * Math.pow(VN - B, 2)) * SB + (VN - B) * VN * (Math.pow(VN, 2) - Math.pow(B, 2)) * ArCH4) / (-R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * (2 * VN + B) * Math.pow(VN - B, 2));
    DVDXNH3 = (-(R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * VN * Math.pow(VN - B, 2)) * SB + (VN - B) * VN * (Math.pow(VN, 2) - Math.pow(B, 2)) * ArNH3) / (-R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * (2 * VN + B) * Math.pow(VN - B, 2));
    DVDXMG = (-(R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * VN * Math.pow(VN - B, 2)) * SB + (VN - B) * VN * (Math.pow(VN, 2) - Math.pow(B, 2)) * ArMG) / (-R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * (2 * VN + B) * Math.pow(VN - B, 2));

    VCO2M = (VN * 1 * (XCO2bis) - 1 * (XCO2bis - 0 * XCO2bis) * 1 / 3 / 8 / 2 * DVDXCO2) * 1000000;
    VCOM = (VN * 1 * (XCObis) - 1 * (XCObis - 0 * XCObis) * 1 / 3 / 8 / 2 * DVDXCO) * 1000000;
    VH2M = (VN * 1 * (XH2bis) - 1 * (XH2bis - 0 * XH2bis) * 1 / 3 / 8 / 2 * DVDXH2) * 1000000;
    VN2M = (VN * 1 * (XN2bis) - 1 * (XN2bis - 0 * XN2bis) * 1 / 3 / 8 / 2 * DVDXN2) * 1000000;
    VCH4M = (VN * 1 * (XCH4bis) - 1 * (XCH4bis - 0 * XCH4bis) * 1 / 3 / 8 / 2 * DVDXCH4) * 1000000;
    VNH3M = (VN * 1 * (XNH3bis) - 1 * (XNH3bis - 0 * XNH3bis) * 1 / 3 / 8 / 2 * DVDXNH3) * 1000000;
    VH2OM = (VN * 1 * (XH2Obis) - 1 * (XH2Obis - 0 * XH2Obis) * 1 / 3 / 8 / 2 * DVDXH2O) * 1000000;
    VMGM = (VN * 1 * (XMGbis) - 1 * (XMGbis - 0 * XMGbis) * 1 / 3 / 8 / 2 * DVDXMG) * 1000000;
    //calcul de somme de Xk(1-Kki)racine(aialphai*akalphak)  (avant le 2 dans le calcul du coefficient de fugacit� de l'esp�ce k)
    grAbis = (XMGbis) * Math.pow(AH2 * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(AH2 * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * AH2, 0.5) + grAbis;
    ArH2 = ((XH2bis)) * AH2 + (1 - 0) * (XH2Obis) * Math.pow(AH2O * AH2, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * AH2, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * AH2, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * AH2, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(ACO2 * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(ACO2 * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * ACO2, 0.5) + grAbis;
    ArCO2 = ((XCO2bis)) * ACO2 + (1 - 0) * (XH2Obis) * Math.pow(AH2O * ACO2, 0.5) + (1 - 0) * (XH2bis) * Math.pow(ACO2 * AH2, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * ACO2, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * ACO2, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(AN2 * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(AN2 * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * AN2, 0.5) + grAbis;
    ArN2 = ((XN2bis)) * AN2 + (1 - 0) * (XH2Obis) * Math.pow(AH2O * AN2, 0.5) + (1 - 0) * (XH2bis) * Math.pow(AN2 * AH2, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(AN2 * ACO2, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * AN2, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(AH2O * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(AH2O * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * AH2O, 0.5) + grAbis;
    ArH2O = (XH2Obis) * AH2O + (1 - 0) * (XH2bis) * Math.pow(AH2O * AH2, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * AH2O, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * AH2O, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * AH2O, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(ACO * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(ACO * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * ACO, 0.5) + grAbis;
    ArCO = (XCObis) * ACO + (1 - 0) * (XH2Obis) * Math.pow(AH2O * ACO, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * ACO, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * ACO, 0.5) + (1 - 0) * (XH2bis) * Math.pow(ACO * AH2, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(ACH4 * AMG, 0.5);
    grAsuite = (1 - 0) * (XH2bis) * Math.pow(AH2 * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * ACH4, 0.5) + grAbis;
    ArCH4 = ((XCH4bis)) * ACH4 + (1 - 0) * (XH2Obis) * Math.pow(AH2O * ACH4, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * ACH4, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * ACH4, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * ACH4, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(ANH3 * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(ANH3 * ACH4, 0.5) + (1 - 0) * (XH2bis) * Math.pow(ANH3 * AH2, 0.5) + grAbis;
    ArNH3 = ((XNH3bis)) * ANH3 + (1 - 0) * (XH2Obis) * Math.pow(AH2O * ANH3, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * ANH3, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * ANH3, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * ANH3, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XNH3bis) * Math.pow(AMG * ANH3, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(AMG * ACH4, 0.5) + (1 - 0) * (XH2bis) * Math.pow(AMG * AH2, 0.5) + grAbis;
    ArMG = ((XMGbis)) * AMG + (1 - 0) * (XH2Obis) * Math.pow(AH2O * AMG, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * AMG, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * AMG, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * AMG, 0.5) + grAsuite;
    //calculs des param�tres de repulsion et d'attraction de l'equation d'etat, Ai et Bi qui interviennent dans le calcul du coefficient de fugacit�
    AH2 = 0.42748 * alphaH2 * Math.pow(TcH2, 2) / (PcH2 * 100000) * P / Math.pow(T, 2); //avec Tr=T/Tc et Pr=P/Pc
    BH2 = 0.08664 * TcH2 / (PcH2 * 100000) * P / (T);
    ACO2 = 0.42748 * alphaCO2 * Math.pow(TcCO2, 2) / (PcCO2 * 100000) * P / Math.pow(T, 2);
    BCO2 = 0.08664 * TcCO2 / (PcCO2 * 100000) * P / (T);
    AN2 = 0.42748 * alphaN2 * Math.pow(TcN2, 2) / (PcN2 * 100000) * P / Math.pow(T, 2);
    BN2 = 0.08664 * TcN2 / (PcN2 * 100000) * P / (T);
    AH2O = 0.42748 * alphaH2O * Math.pow(TcH2O, 2) / (PcH2O * 100000) * P / Math.pow(T, 2);
    BH2O = 0.08664 * TcH2O / (PcH2O * 100000) * P / (T);
    ACO = 0.42748 * alphaCO * Math.pow(TcCO, 2) / (PcCO * 100000) * P / Math.pow(T, 2);
    BCO = 0.08664 * TcCO / (PcCO * 100000) * P / (T);
    ACH4 = 0.42748 * alphaCH4 * Math.pow(TcCH4, 2) / (PcCH4 * 100000) * P / Math.pow(T, 2);
    BCH4 = 0.08664 * TcCH4 / (PcCH4 * 100000) * P / (T);
    ANH3 = 0.42748 * alphaNH3 * Math.pow(TcNH3, 2) / (PcNH3 * 100000) * P / Math.pow(T, 2);
    BNH3 = 0.08664 * TcNH3 / (PcNH3 * 100000) * P / (T);
    AMG = 0.42748 * alphaMG * Math.pow(TcMG, 2) / (PcMG * 100000) * P / Math.pow(T, 2);
    BMG = 0.08664 * TcMG / (PcMG * 100000) * P / (T);
    ///////////////////////////////////
    //calculs des param�tres de repulsion et d'attraction de l'equation d'etat, A et B qui interviennent dans le calcul du coefficient de fugacit�
    grAbis = Math.pow(XMGbis, 2) * AMG + 2 * (1 - 0) * XMGbis * XH2bis * Math.pow(AMG * AH2, 0.5) + 2 * (1 - 0) * XMGbis * XCO2bis * Math.pow(AMG * ACO2, 0.5) + 2 * (1 - 0) * XMGbis * XN2bis * Math.pow(AMG * AN2, 0.5) + 2 * (1 - 0) * XMGbis * XH2Obis * Math.pow(AMG * AH2O, 0.5) + 2 * (1 - 0) * XMGbis * XCObis * Math.pow(AMG * ACO2, 0.5) + 2 * (1 - 0) * XMGbis * XCH4bis * Math.pow(AMG * ACH4, 0.5) + 2 * (1 - 0) * XMGbis * XNH3bis * Math.pow(AMG * ANH3, 0.5);
    grAsuite = Math.pow(XCH4bis, 2) * ACH4 + Math.pow(XNH3bis, 2) * ANH3 + 2 * (1 - 0) * XCH4bis * XCObis * Math.pow(ACO * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XH2Obis * Math.pow(AH2O * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XCO2bis * Math.pow(ACO2 * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XH2bis * Math.pow(AH2 * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XN2bis * Math.pow(AN2 * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XNH3bis * Math.pow(ANH3 * ACH4, 0.5) + 2 * (1 - 0) * XH2Obis * XNH3bis * Math.pow(ANH3 * AH2O, 0.5) + 2 * (1 - 0) * XCO2bis * XNH3bis * Math.pow(ANH3 * ACO2, 0.5) + 2 * (1 - 0) * XCObis * XNH3bis * Math.pow(ANH3 * ACO, 0.5) + 2 * (1 - 0) * XH2bis * XNH3bis * Math.pow(ANH3 * AH2, 0.5) + 2 * (1 - 0) * XN2bis * XNH3bis * Math.pow(ANH3 * AN2, 0.5) + grAbis;
    GRA = Math.pow(XH2Obis, 2) * AH2O + Math.pow(XCO2bis, 2) * ACO2 + 2 * (1 - 0) * XH2Obis * XCO2bis * Math.pow(AH2O * ACO2, 0.5) + Math.pow(XH2bis, 2) * AH2 + 2 * (1 - 0) * XH2Obis * XH2bis * Math.pow(AH2O * AH2, 0.5) + Math.pow(XN2bis, 2) * AN2 + 2 * (1 - 0) * XH2Obis * XN2bis * Math.pow(AH2O * AN2, 0.5) + 2 * (1 - 0) * XCO2bis * XH2bis * Math.pow(ACO2 * AH2, 0.5) + 2 * (1 - 0) * XCO2bis * XN2bis * Math.pow(ACO2 * AN2, 0.5) + 2 * (1 - 0) * XN2bis * XH2bis * Math.pow(AN2 * AH2, 0.5) + Math.pow(XCObis, 2) * ACO + 2 * (1 - 0) * XH2Obis * XCObis * Math.pow(AH2O * ACO, 0.5) + 2 * (1 - 0) * XCObis * XH2bis * Math.pow(ACO * AH2, 0.5) + 2 * (1 - 0) * XCObis * XN2bis * Math.pow(ACO * AN2, 0.5) + 2 * (1 - 0) * XCObis * XCO2bis * Math.pow(ACO * ACO2, 0.5) + grAsuite;
    GRB = XH2Obis * BH2O + XH2bis * BH2 + XCO2bis * BCO2 + XN2bis * BN2 + XCObis * BCO + XNH3bis * BNH3 + XCH4bis * BCH4 + XMGbis * BMG;
    //calculs des coefficients de fugacit�s   
    //logFIH2Osoave = ZN - 1 - Log(ZN - GRB) - GRA / GRB * Log((ZN + GRB) / ZN)
    //FIH2Oincsoave = 10 ^ (logFIH2Osoave / 2.303)
    //Worksheets(1).Range("C31").Value = FIH2Oincsoave
    logFIH2O = (BH2O / GRB * (ZN - 1) - Math.log(ZN - GRB) + GRA / GRB * (BH2O / GRB - 2 / A * ArH2O) * Math.log(1 + GRB / ZN));
    FIH2Oinc = Math.exp(logFIH2O);
    FUH2Oinc = FIH2Oinc * P * XH2Obis;
    FUH2Oi = FUH2Oinc * 0.00001;
    logFIH2 = (BH2 / GRB * (ZN - 1) - Math.log(ZN - GRB) + GRA / GRB * (BH2 / GRB - 2 / A * ArH2) * Math.log(1 + GRB / ZN));
    FIH2inc = Math.exp(logFIH2);
    FUH2inc = FIH2inc * P * XH2bis;
    FUH2i = FUH2inc * 0.00001;
    logFICO = (BCO / GRB * (ZN - 1) - Math.log(ZN - GRB) + GRA / GRB * (BCO / GRB - 2 / A * ArCO) * Math.log(1 + GRB / ZN));
    FICOinc = Math.exp(logFICO);
    FUCOinc = FICOinc * P * XCObis;
    FUCOi = FUCOinc * 0.00001;
    logFICO2 = (BCO2 / GRB * (ZN - 1) - Math.log(ZN - GRB) + GRA / GRB * (BCO2 / GRB - 2 / A * ArCO2) * Math.log(1 + GRB / ZN));
    FICO2inc = Math.exp(logFICO2);
    FUCO2inc = FICO2inc * P * XCO2bis;
    FUCO2i = FUCO2inc * 0.00001; //la m�me chose mais en bar
    logFIN2 = (BN2 / GRB * (ZN - 1) - Math.log(ZN - GRB) + GRA / GRB * (BN2 / GRB - 2 / A * ArN2) * Math.log(1 + GRB / ZN));
    FIN2inc = Math.exp(logFIN2);
    FUN2inc = FIN2inc * P * XN2bis;
    FUN2i = FUN2inc * 0.00001;
    logFICH4 = (BCH4 / GRB * (ZN - 1) - Math.log(ZN - GRB) + GRA / GRB * (BCH4 / GRB - 2 / A * ArCH4) * Math.log(1 + GRB / ZN));
    FICH4inc = Math.exp(logFICH4);
    FUCH4inc = FICH4inc * P * XCH4bis;
    FUCH4i = FUCH4inc * 0.00001;
    logFINH3 = (BNH3 / GRB * (ZN - 1) - Math.log(ZN - GRB) + GRA / GRB * (BNH3 / GRB - 2 / A * ArNH3) * Math.log(1 + GRB / ZN));
    FINH3inc = Math.exp(logFINH3);
    FUNH3inc = FINH3inc * P * XNH3bis;
    FUNH3i = FUNH3inc * 0.00001;
    logFIMG = (BMG / GRB * (ZN - 1) - Math.log(ZN - GRB) + GRA / GRB * (BMG / GRB - 2 / A * ArMG) * Math.log(1 + GRB / ZN));
    FIMGinc = Math.exp(logFIMG);
    FUMGinc = FIMGinc * P * XMGbis;
    FUMGi = FUMGinc * 0.00001;
    ///////////////////////////
    $("#2-11").text(Number((FUH2Oi).toFixed(5)).toString());
    //////////////////////////////////////////
    /////////////////////////////////////////
    XH2Obis = 0;
    XCO2bis = 0;
    XCObis = 0;
    XH2bis = 1;
    XN2bis = 0;
    XCH4bis = 0;
    XNH3bis = 0;
    XMGbis = 0;
    Pb = parseFloat($("#0-1").text());
    P = Pb * 100000; //passage de la pression de bar en Pa
    T = parseFloat($("#1-1").text()) + 273.15;
    TcH2O = parseFloat($("#2-4").text()); //temp�rature critique de H2O dans la cellule J8
    PcH2O = parseFloat($("#2-3").text()); //pression critique de H2O
    TcCO2 = parseFloat($("#3-4").text());
    PcCO2 = parseFloat($("#3-3").text());
    TcCO = parseFloat($("#4-4").text());
    PcCO = parseFloat($("#4-3").text());
    TcH2 = parseFloat($("#1-4").text());
    PcH2 = parseFloat($("#1-3").text());
    TcN2 = parseFloat($("#7-4").text());
    PcN2 = parseFloat($("#7-3").text());
    TcCH4 = parseFloat($("#5-4").text());
    PcCH4 = parseFloat($("#5-3").text());
    TcNH3 = parseFloat($("#8-4").text());
    PcNH3 = parseFloat($("#8-3").text());
    TcMG = parseFloat($("#6-4").text());
    PcMG = parseFloat($("#6-3").text());
    R = 8.314472; //constante des gaz parfaits
    ///////////////////////////////////////////////
    //calcul des facteurs acentriques
    wH2O = parseFloat($("#2-5").text());
    nH2O = 0.48508 + 1.55171 * wH2O - 0.15613 * Math.pow(wH2O, 2);
    alphaH2O = Math.pow(1 + nH2O * (1 - Math.pow(T / TcH2O, 0.5)), 2);
    wCO2 = parseFloat($("#3-5").text());
    nCO2 = 0.48508 + 1.55171 * wCO2 - 0.15613 * Math.pow(wCO2, 2);
    alphaCO2 = Math.pow(1 + nCO2 * (1 - Math.pow(T / TcCO2, 0.5)), 2);
    wCO = parseFloat($("#4-5").text());
    nCO = 0.48508 + 1.55171 * wCO - 0.15613 * Math.pow(wCO, 2);
    alphaCO = Math.pow(1 + nCO * (1 - Math.pow(T / TcCO, 0.5)), 2);
    wH2 = parseFloat($("#1-5").text());
    nH2 = 0.48508 + 1.55171 * wH2 - 0.15613 * Math.pow(wH2, 2);
    alphaH2 = Math.pow(1 + nH2 * (1 - Math.pow(T / TcH2, 0.5)), 2);
    wN2 = parseFloat($("#7-5").text());
    nN2 = 0.48508 + 1.55171 * wN2 - 0.15613 * Math.pow(wN2, 2);
    alphaN2 = Math.pow(1 + nN2 * (1 - Math.pow(T / TcN2, 0.5)), 2);
    wCH4 = parseFloat($("#5-5").text());
    nCH4 = 0.48508 + 1.55171 * wCH4 - 0.15613 * Math.pow(wCH4, 2);
    alphaCH4 = Math.pow(1 + nCH4 * (1 - Math.pow(T / TcCH4, 0.5)), 2);
    wNH3 = parseFloat($("#8-5").text());
    nNH3 = 0.48508 + 1.55171 * wNH3 - 0.15613 * Math.pow(wNH3, 2);
    alphaNH3 = Math.pow(1 + nNH3 * (1 - Math.pow(T / TcNH3, 0.5)), 2);
    wMG = parseFloat($("#6-5").text());
    nMG = 0.48508 + 1.55171 * wMG - 0.15613 * Math.pow(wMG, 2);
    alphaMG = Math.pow(1 + nMG * (1 - Math.pow(T / TcMG, 0.5)), 2);
    /////////////////////////
    AH2 = 0.42748 * alphaH2 * Math.pow(TcH2, 2) / (PcH2 * 100000) * P / Math.pow(T, 2); //avec Tr=T/Tc et Pr=P/Pc
    BH2 = 0.08664 * TcH2 / (PcH2 * 100000) * P / (T);
    ACO2 = 0.42748 * alphaCO2 * Math.pow(TcCO2, 2) / (PcCO2 * 100000) * P / Math.pow(T, 2);
    BCO2 = 0.08664 * TcCO2 / (PcCO2 * 100000) * P / (T);
    AN2 = 0.42748 * alphaN2 * Math.pow(TcN2, 2) / (PcN2 * 100000) * P / Math.pow(T, 2);
    BN2 = 0.08664 * TcN2 / (PcN2 * 100000) * P / (T);
    AH2O = 0.42748 * alphaH2O * Math.pow(TcH2O, 2) / (PcH2O * 100000) * P / Math.pow(T, 2);
    BH2O = 0.08664 * TcH2O / (PcH2O * 100000) * P / (T);
    ACO = 0.42748 * alphaCO * Math.pow(TcCO, 2) / (PcCO * 100000) * P / Math.pow(T, 2);
    BCO = 0.08664 * TcCO / (PcCO * 100000) * P / (T);
    ACH4 = 0.42748 * alphaCH4 * Math.pow(TcCH4, 2) / (PcCH4 * 100000) * P / Math.pow(T, 2);
    BCH4 = 0.08664 * TcCH4 / (PcCH4 * 100000) * P / (T);
    ANH3 = 0.42748 * alphaNH3 * Math.pow(TcNH3, 2) / (PcNH3 * 100000) * P / Math.pow(T, 2);
    BNH3 = 0.08664 * TcNH3 / (PcNH3 * 100000) * P / (T);
    AMG = 0.42748 * alphaMG * Math.pow(TcMG, 2) / (PcMG * 100000) * P / Math.pow(T, 2);
    BMG = 0.08664 * TcMG / (PcMG * 100000) * P / (T);
    ///////////////////////////////////
    grAbis = Math.pow(XMGbis, 2) * AMG + 2 * (1 - 0) * XMGbis * XH2bis * Math.pow(AMG * AH2, 0.5) + 2 * (1 - 0) * XMGbis * XCO2bis * Math.pow(AMG * ACO2, 0.5) + 2 * (1 - 0) * XMGbis * XN2bis * Math.pow(AMG * AN2, 0.5) + 2 * (1 - 0) * XMGbis * XH2Obis * Math.pow(AMG * AH2O, 0.5) + 2 * (1 - 0) * XMGbis * XCObis * Math.pow(AMG * ACO2, 0.5) + 2 * (1 - 0) * XMGbis * XCH4bis * Math.pow(AMG * ACH4, 0.5) + 2 * (1 - 0) * XMGbis * XNH3bis * Math.pow(AMG * ANH3, 0.5);
    grAsuite = Math.pow(XCH4bis, 2) * ACH4 + Math.pow(XNH3bis, 2) * ANH3 + 2 * (1 - 0) * XCH4bis * XCObis * Math.pow(ACO * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XH2Obis * Math.pow(AH2O * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XCO2bis * Math.pow(ACO2 * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XH2bis * Math.pow(AH2 * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XN2bis * Math.pow(AN2 * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XNH3bis * Math.pow(ANH3 * ACH4, 0.5) + 2 * (1 - 0) * XH2Obis * XNH3bis * Math.pow(ANH3 * AH2O, 0.5) + 2 * (1 - 0) * XCO2bis * XNH3bis * Math.pow(ANH3 * ACO2, 0.5) + 2 * (1 - 0) * XCObis * XNH3bis * Math.pow(ANH3 * ACO, 0.5) + 2 * (1 - 0) * XH2bis * XNH3bis * Math.pow(ANH3 * AH2, 0.5) + 2 * (1 - 0) * XN2bis * XNH3bis * Math.pow(ANH3 * AN2, 0.5) + grAbis;
    GRA = Math.pow(XH2Obis, 2) * AH2O + Math.pow(XCO2bis, 2) * ACO2 + 2 * (1 - 0) * XH2Obis * XCO2bis * Math.pow(AH2O * ACO2, 0.5) + Math.pow(XH2bis, 2) * AH2 + 2 * (1 - 0) * XH2Obis * XH2bis * Math.pow(AH2O * AH2, 0.5) + Math.pow(XN2bis, 2) * AN2 + 2 * (1 - 0) * XH2Obis * XN2bis * Math.pow(AH2O * AN2, 0.5) + 2 * (1 - 0) * XCO2bis * XH2bis * Math.pow(ACO2 * AH2, 0.5) + 2 * (1 - 0) * XCO2bis * XN2bis * Math.pow(ACO2 * AN2, 0.5) + 2 * (1 - 0) * XN2bis * XH2bis * Math.pow(AN2 * AH2, 0.5) + Math.pow(XCObis, 2) * ACO + 2 * (1 - 0) * XH2Obis * XCObis * Math.pow(AH2O * ACO, 0.5) + 2 * (1 - 0) * XCObis * XH2bis * Math.pow(ACO * AH2, 0.5) + 2 * (1 - 0) * XCObis * XN2bis * Math.pow(ACO * AN2, 0.5) + 2 * (1 - 0) * XCObis * XCO2bis * Math.pow(ACO * ACO2, 0.5) + grAsuite;
    GRB = XH2Obis * BH2O + XH2bis * BH2 + XCO2bis * BCO2 + XN2bis * BN2 + XCObis * BCO + XNH3bis * BNH3 + XCH4bis * BCH4 + XMGbis * BMG;
    //////////////////////////////////
    test = 10;
    ZN = 1000.01; //initialisation NR � changer si plantage
    while (test > 0.000000001)
    {
        FZ = Math.pow(ZN, 3) - Math.pow(ZN, 2) + (GRA - Math.pow(GRB, 2) - GRB) * ZN - GRA * GRB;
        FpZ = 3 * Math.pow(ZN, 2) - 2 * ZN + (GRA - Math.pow(GRB, 2) - GRB);
        ZN1 = ZN - FZ / FpZ;
        test = Math.abs(ZN1 - ZN);
        ZN = ZN1;
    }
    VN = (ZN * R * T / P);
    V = VN * 1000000;
    /////////////////////////////////////////
    //calculs des param�tres de repulsion et d'attraction de l'equation d'etat, aialphai et bialphai qui interviennent dans le calcul des coefficients de fugacit�
    AH2 = 0.42748 * alphaH2 * (R * Math.pow(TcH2, 2)) / (PcH2 * 100000);
    BH2 = 0.08664 * R * TcH2 / (PcH2 * 100000);
    BiH2 = BH2; //stockage de bialphai
    ACO2 = 0.42748 * alphaCO2 * (R * Math.pow(TcCO2, 2)) / (PcCO2 * 100000);
    BCO2 = 0.08664 * R * TcCO2 / (PcCO2 * 100000);
    BiCO2 = BCO2;
    AN2 = 0.42748 * alphaN2 * (R * Math.pow(TcN2, 2)) / (PcN2 * 100000);
    BN2 = 0.08664 * R * TcN2 / (PcN2 * 100000);
    BiN2 = BN2;
    AH2O = 0.42748 * alphaH2O * (R * Math.pow(TcH2O, 2)) / (PcH2O * 100000);
    BH2O = 0.08664 * R * TcH2O / (PcH2O * 100000);
    BiH2O = BH2O;
    ACO = 0.42748 * alphaCO * (R * Math.pow(TcCO, 2)) / (PcCO * 100000);
    BCO = 0.08664 * R * TcCO / (PcCO * 100000);
    BiCO = BCO;
    ACH4 = 0.42748 * alphaCH4 * (R * Math.pow(TcCH4, 2)) / (PcCH4 * 100000);
    BCH4 = 0.08664 * R * TcCH4 / (PcCH4 * 100000);
    BiCH4 = BCH4;
    ANH3 = 0.42748 * alphaNH3 * (R * Math.pow(TcNH3, 2)) / (PcNH3 * 100000);
    BNH3 = 0.08664 * R * TcNH3 / (PcNH3 * 100000);
    BiNH3 = BNH3;
    AMG = 0.42748 * alphaMG * (R * Math.pow(TcMG, 2)) / (PcMG * 100000);
    BMG = 0.08664 * R * TcMG / (PcMG * 100000);
    BiMG = BMG;
    ////////////////////////////////
    //calculs des param�tres de repulsion et d'attraction de l'equation d'etat, a et b qui n'interviennent pas dans le calcul du coefficient de fugacit�
    grAbis = Math.pow(XMGbis, 2) * AMG + 2 * (1 - 0) * XMGbis * XH2bis * Math.pow(AMG * AH2, 0.5) + 2 * (1 - 0) * XMGbis * XCO2bis * Math.pow(AMG * ACO2, 0.5) + 2 * (1 - 0) * XMGbis * XN2bis * Math.pow(AMG * AN2, 0.5) + 2 * (1 - 0) * XMGbis * XH2Obis * Math.pow(AMG * AH2O, 0.5) + 2 * (1 - 0) * XMGbis * XCObis * Math.pow(AMG * ACO2, 0.5) + 2 * (1 - 0) * XMGbis * XCH4bis * Math.pow(AMG * ACH4, 0.5) + 2 * (1 - 0) * XMGbis * XNH3bis * Math.pow(AMG * ANH3, 0.5);
    grAsuite = Math.pow(XCH4bis, 2) * ACH4 + Math.pow(XNH3bis, 2) * ANH3 + 2 * (1 - 0) * XCH4bis * XCObis * Math.pow(ACO * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XH2Obis * Math.pow(AH2O * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XCO2bis * Math.pow(ACO2 * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XH2bis * Math.pow(AH2 * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XN2bis * Math.pow(AN2 * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XNH3bis * Math.pow(ANH3 * ACH4, 0.5) + 2 * (1 - 0) * XH2Obis * XNH3bis * Math.pow(ANH3 * AH2O, 0.5) + 2 * (1 - 0) * XCO2bis * XNH3bis * Math.pow(ANH3 * ACO2, 0.5) + 2 * (1 - 0) * XCObis * XNH3bis * Math.pow(ANH3 * ACO, 0.5) + 2 * (1 - 0) * XH2bis * XNH3bis * Math.pow(ANH3 * AH2, 0.5) + 2 * (1 - 0) * XN2bis * XNH3bis * Math.pow(ANH3 * AN2, 0.5) + grAbis;
    A = Math.pow(XH2Obis, 2) * AH2O + Math.pow(XCO2bis, 2) * ACO2 + 2 * (1 - 0) * XH2Obis * XCO2bis * Math.pow(AH2O * ACO2, 0.5) + Math.pow(XH2bis, 2) * AH2 + 2 * (1 - 0) * XH2Obis * XH2bis * Math.pow(AH2O * AH2, 0.5) + Math.pow(XN2bis, 2) * AN2 + 2 * (1 - 0) * XH2Obis * XN2bis * Math.pow(AH2O * AN2, 0.5) + 2 * (1 - 0) * XCO2bis * XH2bis * Math.pow(ACO2 * AH2, 0.5) + 2 * (1 - 0) * XCO2bis * XN2bis * Math.pow(ACO2 * AN2, 0.5) + 2 * (1 - 0) * XN2bis * XH2bis * Math.pow(AN2 * AH2, 0.5) + Math.pow(XCObis, 2) * ACO + 2 * (1 - 0) * XH2Obis * XCObis * Math.pow(AH2O * ACO, 0.5) + 2 * (1 - 0) * XCObis * XH2bis * Math.pow(ACO * AH2, 0.5) + 2 * (1 - 0) * XCObis * XN2bis * Math.pow(ACO * AN2, 0.5) + 2 * (1 - 0) * XCObis * XCO2bis * Math.pow(ACO * ACO2, 0.5) + grAsuite;
    B = XH2Obis * BH2O + XH2bis * BH2 + XCO2bis * BCO2 + XN2bis * BN2 + XCObis * BCO + XNH3bis * BNH3 + XCH4bis * BCH4 + XMGbis * BMG;
    ////////////////////////////
    //calcul de d�riv�s de XiXj(1-Kji)racine(aialphai*akalphak)
    grAbis = (XMGbis) * Math.pow(AH2 * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(AH2 * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * AH2, 0.5) + grAbis;
    ArH2 = ((XH2bis)) * AH2 + (1 - 0) * (XH2Obis) * Math.pow(AH2O * AH2, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * AH2, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * AH2, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * AH2, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(ACO2 * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(ACO2 * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * ACO2, 0.5) + grAbis;
    ArCO2 = ((XCO2bis)) * ACO2 + (1 - 0) * (XH2Obis) * Math.pow(AH2O * ACO2, 0.5) + (1 - 0) * (XH2bis) * Math.pow(ACO2 * AH2, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * ACO2, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * ACO2, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(AN2 * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(AN2 * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * AN2, 0.5) + grAbis;
    ArN2 = ((XN2bis)) * AN2 + (1 - 0) * (XH2Obis) * Math.pow(AH2O * AN2, 0.5) + (1 - 0) * (XH2bis) * Math.pow(AN2 * AH2, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(AN2 * ACO2, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * AN2, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(AH2O * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(AH2O * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * AH2O, 0.5) + grAbis;
    ArH2O = (XH2Obis) * AH2O + (1 - 0) * (XH2bis) * Math.pow(AH2O * AH2, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * AH2O, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * AH2O, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * AH2O, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(ACO * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(ACO * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * ACO, 0.5) + grAbis;
    ArCO = (XCObis) * ACO + (1 - 0) * (XH2Obis) * Math.pow(AH2O * ACO, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * ACO, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * ACO, 0.5) + (1 - 0) * (XH2bis) * Math.pow(ACO * AH2, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(ACH4 * AMG, 0.5);
    grAsuite = (1 - 0) * (XH2bis) * Math.pow(AH2 * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * ACH4, 0.5) + grAbis;
    ArCH4 = ((XCH4bis)) * ACH4 + (1 - 0) * (XH2Obis) * Math.pow(AH2O * ACH4, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * ACH4, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * ACH4, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * ACH4, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(ANH3 * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(ANH3 * ACH4, 0.5) + (1 - 0) * (XH2bis) * Math.pow(ANH3 * AH2, 0.5) + grAbis;
    ArNH3 = ((XNH3bis)) * ANH3 + (1 - 0) * (XH2Obis) * Math.pow(AH2O * ANH3, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * ANH3, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * ANH3, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * ANH3, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XNH3bis) * Math.pow(AMG * ANH3, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(AMG * ACH4, 0.5) + (1 - 0) * (XH2bis) * Math.pow(AMG * AH2, 0.5) + grAbis;
    ArMG = ((XMGbis)) * AMG + (1 - 0) * (XH2Obis) * Math.pow(AH2O * AMG, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * AMG, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * AMG, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * AMG, 0.5) + grAsuite;
    /////////////////////////////
    SB = BH2O + BH2 + BCO2 + BN2 + BCO + BNH3 + BCH4 + BMG;
    DVDXH2 = (-(R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * VN * Math.pow(VN - B, 2)) * SB + (VN - B) * VN * (Math.pow(VN, 2) - Math.pow(B, 2)) * ArH2) / (-R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * (2 * VN + B) * Math.pow(VN - B, 2));
    DVDXH2O = (-(R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * VN * Math.pow(VN - B, 2)) * SB + (VN - B) * VN * (Math.pow(VN, 2) - Math.pow(B, 2)) * ArH2O) / (-R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * (2 * VN + B) * Math.pow(VN - B, 2));
    DVDXCO2 = (-(R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * VN * Math.pow(VN - B, 2)) * SB + (VN - B) * VN * (Math.pow(VN, 2) - Math.pow(B, 2)) * ArCO2) / (-R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * (2 * VN + B) * Math.pow(VN - B, 2));
    DVDXCO = (-(R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * VN * Math.pow(VN - B, 2)) * SB + (VN - B) * VN * (Math.pow(VN, 2) - Math.pow(B, 2)) * ArCO) / (-R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * (2 * VN + B) * Math.pow(VN - B, 2));
    DVDXN2 = (-(R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * VN * Math.pow(VN - B, 2)) * SB + (VN - B) * VN * (Math.pow(VN, 2) - Math.pow(B, 2)) * ArN2) / (-R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * (2 * VN + B) * Math.pow(VN - B, 2));
    DVDXCH4 = (-(R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * VN * Math.pow(VN - B, 2)) * SB + (VN - B) * VN * (Math.pow(VN, 2) - Math.pow(B, 2)) * ArCH4) / (-R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * (2 * VN + B) * Math.pow(VN - B, 2));
    DVDXNH3 = (-(R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * VN * Math.pow(VN - B, 2)) * SB + (VN - B) * VN * (Math.pow(VN, 2) - Math.pow(B, 2)) * ArNH3) / (-R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * (2 * VN + B) * Math.pow(VN - B, 2));
    DVDXMG = (-(R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * VN * Math.pow(VN - B, 2)) * SB + (VN - B) * VN * (Math.pow(VN, 2) - Math.pow(B, 2)) * ArMG) / (-R * T * Math.pow(VN, 2) * Math.pow(VN + B, 2) + A * (2 * VN + B) * Math.pow(VN - B, 2));

    VCO2M = (VN * 1 * (XCO2bis) - 1 * (XCO2bis - 0 * XCO2bis) * 1 / 3 / 8 / 2 * DVDXCO2) * 1000000;
    VCOM = (VN * 1 * (XCObis) - 1 * (XCObis - 0 * XCObis) * 1 / 3 / 8 / 2 * DVDXCO) * 1000000;
    VH2M = (VN * 1 * (XH2bis) - 1 * (XH2bis - 0 * XH2bis) * 1 / 3 / 8 / 2 * DVDXH2) * 1000000;
    VN2M = (VN * 1 * (XN2bis) - 1 * (XN2bis - 0 * XN2bis) * 1 / 3 / 8 / 2 * DVDXN2) * 1000000;
    VCH4M = (VN * 1 * (XCH4bis) - 1 * (XCH4bis - 0 * XCH4bis) * 1 / 3 / 8 / 2 * DVDXCH4) * 1000000;
    VNH3M = (VN * 1 * (XNH3bis) - 1 * (XNH3bis - 0 * XNH3bis) * 1 / 3 / 8 / 2 * DVDXNH3) * 1000000;
    VH2OM = (VN * 1 * (XH2Obis) - 1 * (XH2Obis - 0 * XH2Obis) * 1 / 3 / 8 / 2 * DVDXH2O) * 1000000;
    VMGM = (VN * 1 * (XMGbis) - 1 * (XMGbis - 0 * XMGbis) * 1 / 3 / 8 / 2 * DVDXMG) * 1000000;
    //calcul de somme de Xk(1-Kki)racine(aialphai*akalphak)  (avant le 2 dans le calcul du coefficient de fugacit� de l'esp�ce k)
    grAbis = (XMGbis) * Math.pow(AH2 * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(AH2 * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * AH2, 0.5) + grAbis;
    ArH2 = ((XH2bis)) * AH2 + (1 - 0) * (XH2Obis) * Math.pow(AH2O * AH2, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * AH2, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * AH2, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * AH2, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(ACO2 * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(ACO2 * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * ACO2, 0.5) + grAbis;
    ArCO2 = ((XCO2bis)) * ACO2 + (1 - 0) * (XH2Obis) * Math.pow(AH2O * ACO2, 0.5) + (1 - 0) * (XH2bis) * Math.pow(ACO2 * AH2, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * ACO2, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * ACO2, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(AN2 * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(AN2 * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * AN2, 0.5) + grAbis;
    ArN2 = ((XN2bis)) * AN2 + (1 - 0) * (XH2Obis) * Math.pow(AH2O * AN2, 0.5) + (1 - 0) * (XH2bis) * Math.pow(AN2 * AH2, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(AN2 * ACO2, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * AN2, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(AH2O * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(AH2O * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * AH2O, 0.5) + grAbis;
    ArH2O = (XH2Obis) * AH2O + (1 - 0) * (XH2bis) * Math.pow(AH2O * AH2, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * AH2O, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * AH2O, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * AH2O, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(ACO * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(ACO * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * ACO, 0.5) + grAbis;
    ArCO = (XCObis) * ACO + (1 - 0) * (XH2Obis) * Math.pow(AH2O * ACO, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * ACO, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * ACO, 0.5) + (1 - 0) * (XH2bis) * Math.pow(ACO * AH2, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(ACH4 * AMG, 0.5);
    grAsuite = (1 - 0) * (XH2bis) * Math.pow(AH2 * ACH4, 0.5) + (1 - 0) * (XNH3bis) * Math.pow(ANH3 * ACH4, 0.5) + grAbis;
    ArCH4 = ((XCH4bis)) * ACH4 + (1 - 0) * (XH2Obis) * Math.pow(AH2O * ACH4, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * ACH4, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * ACH4, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * ACH4, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XMGbis) * Math.pow(ANH3 * AMG, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(ANH3 * ACH4, 0.5) + (1 - 0) * (XH2bis) * Math.pow(ANH3 * AH2, 0.5) + grAbis;
    ArNH3 = ((XNH3bis)) * ANH3 + (1 - 0) * (XH2Obis) * Math.pow(AH2O * ANH3, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * ANH3, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * ANH3, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * ANH3, 0.5) + grAsuite;
    grAbis = (1 - 0) * (XNH3bis) * Math.pow(AMG * ANH3, 0.5);
    grAsuite = (1 - 0) * (XCH4bis) * Math.pow(AMG * ACH4, 0.5) + (1 - 0) * (XH2bis) * Math.pow(AMG * AH2, 0.5) + grAbis;
    ArMG = ((XMGbis)) * AMG + (1 - 0) * (XH2Obis) * Math.pow(AH2O * AMG, 0.5) + (1 - 0) * (XCO2bis) * Math.pow(ACO2 * AMG, 0.5) + (1 - 0) * (XN2bis) * Math.pow(AN2 * AMG, 0.5) + (1 - 0) * (XCObis) * Math.pow(ACO * AMG, 0.5) + grAsuite;
    //calculs des param�tres de repulsion et d'attraction de l'equation d'etat, Ai et Bi qui interviennent dans le calcul du coefficient de fugacit�
    AH2 = 0.42748 * alphaH2 * Math.pow(TcH2, 2) / (PcH2 * 100000) * P / Math.pow(T, 2); //avec Tr=T/Tc et Pr=P/Pc
    BH2 = 0.08664 * TcH2 / (PcH2 * 100000) * P / (T);
    ACO2 = 0.42748 * alphaCO2 * Math.pow(TcCO2, 2) / (PcCO2 * 100000) * P / Math.pow(T, 2);
    BCO2 = 0.08664 * TcCO2 / (PcCO2 * 100000) * P / (T);
    AN2 = 0.42748 * alphaN2 * Math.pow(TcN2, 2) / (PcN2 * 100000) * P / Math.pow(T, 2);
    BN2 = 0.08664 * TcN2 / (PcN2 * 100000) * P / (T);
    AH2O = 0.42748 * alphaH2O * Math.pow(TcH2O, 2) / (PcH2O * 100000) * P / Math.pow(T, 2);
    BH2O = 0.08664 * TcH2O / (PcH2O * 100000) * P / (T);
    ACO = 0.42748 * alphaCO * Math.pow(TcCO, 2) / (PcCO * 100000) * P / Math.pow(T, 2);
    BCO = 0.08664 * TcCO / (PcCO * 100000) * P / (T);
    ACH4 = 0.42748 * alphaCH4 * Math.pow(TcCH4, 2) / (PcCH4 * 100000) * P / Math.pow(T, 2);
    BCH4 = 0.08664 * TcCH4 / (PcCH4 * 100000) * P / (T);
    ANH3 = 0.42748 * alphaNH3 * Math.pow(TcNH3, 2) / (PcNH3 * 100000) * P / Math.pow(T, 2);
    BNH3 = 0.08664 * TcNH3 / (PcNH3 * 100000) * P / (T);
    AMG = 0.42748 * alphaMG * Math.pow(TcMG, 2) / (PcMG * 100000) * P / Math.pow(T, 2);
    BMG = 0.08664 * TcMG / (PcMG * 100000) * P / (T);
    ///////////////////////////////////
    //calculs des param�tres de repulsion et d'attraction de l'equation d'etat, A et B qui interviennent dans le calcul du coefficient de fugacit�
    grAbis = Math.pow(XMGbis, 2) * AMG + 2 * (1 - 0) * XMGbis * XH2bis * Math.pow(AMG * AH2, 0.5) + 2 * (1 - 0) * XMGbis * XCO2bis * Math.pow(AMG * ACO2, 0.5) + 2 * (1 - 0) * XMGbis * XN2bis * Math.pow(AMG * AN2, 0.5) + 2 * (1 - 0) * XMGbis * XH2Obis * Math.pow(AMG * AH2O, 0.5) + 2 * (1 - 0) * XMGbis * XCObis * Math.pow(AMG * ACO2, 0.5) + 2 * (1 - 0) * XMGbis * XCH4bis * Math.pow(AMG * ACH4, 0.5) + 2 * (1 - 0) * XMGbis * XNH3bis * Math.pow(AMG * ANH3, 0.5);
    grAsuite = Math.pow(XCH4bis, 2) * ACH4 + Math.pow(XNH3bis, 2) * ANH3 + 2 * (1 - 0) * XCH4bis * XCObis * Math.pow(ACO * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XH2Obis * Math.pow(AH2O * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XCO2bis * Math.pow(ACO2 * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XH2bis * Math.pow(AH2 * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XN2bis * Math.pow(AN2 * ACH4, 0.5) + 2 * (1 - 0) * XCH4bis * XNH3bis * Math.pow(ANH3 * ACH4, 0.5) + 2 * (1 - 0) * XH2Obis * XNH3bis * Math.pow(ANH3 * AH2O, 0.5) + 2 * (1 - 0) * XCO2bis * XNH3bis * Math.pow(ANH3 * ACO2, 0.5) + 2 * (1 - 0) * XCObis * XNH3bis * Math.pow(ANH3 * ACO, 0.5) + 2 * (1 - 0) * XH2bis * XNH3bis * Math.pow(ANH3 * AH2, 0.5) + 2 * (1 - 0) * XN2bis * XNH3bis * Math.pow(ANH3 * AN2, 0.5) + grAbis;
    GRA = Math.pow(XH2Obis, 2) * AH2O + Math.pow(XCO2bis, 2) * ACO2 + 2 * (1 - 0) * XH2Obis * XCO2bis * Math.pow(AH2O * ACO2, 0.5) + Math.pow(XH2bis, 2) * AH2 + 2 * (1 - 0) * XH2Obis * XH2bis * Math.pow(AH2O * AH2, 0.5) + Math.pow(XN2bis, 2) * AN2 + 2 * (1 - 0) * XH2Obis * XN2bis * Math.pow(AH2O * AN2, 0.5) + 2 * (1 - 0) * XCO2bis * XH2bis * Math.pow(ACO2 * AH2, 0.5) + 2 * (1 - 0) * XCO2bis * XN2bis * Math.pow(ACO2 * AN2, 0.5) + 2 * (1 - 0) * XN2bis * XH2bis * Math.pow(AN2 * AH2, 0.5) + Math.pow(XCObis, 2) * ACO + 2 * (1 - 0) * XH2Obis * XCObis * Math.pow(AH2O * ACO, 0.5) + 2 * (1 - 0) * XCObis * XH2bis * Math.pow(ACO * AH2, 0.5) + 2 * (1 - 0) * XCObis * XN2bis * Math.pow(ACO * AN2, 0.5) + 2 * (1 - 0) * XCObis * XCO2bis * Math.pow(ACO * ACO2, 0.5) + grAsuite;
    GRB = XH2Obis * BH2O + XH2bis * BH2 + XCO2bis * BCO2 + XN2bis * BN2 + XCObis * BCO + XNH3bis * BNH3 + XCH4bis * BCH4 + XMGbis * BMG;
    //calculs des coefficients de fugacit�s   
    //logFIH2Osoave = ZN - 1 - Log(ZN - GRB) - GRA / GRB * Log((ZN + GRB) / ZN)
    //FIH2Oincsoave = 10 ^ (logFIH2Osoave / 2.303)
    //Worksheets(1).Range("C31").Value = FIH2Oincsoave
    logFIH2O = (BH2O / GRB * (ZN - 1) - Math.log(ZN - GRB) + GRA / GRB * (BH2O / GRB - 2 / A * ArH2O) * Math.log(1 + GRB / ZN));
    FIH2Oinc = Math.exp(logFIH2O);
    FUH2Oinc = FIH2Oinc * P * XH2Obis;
    FUH2Oi = FUH2Oinc * 0.00001;
    logFIH2 = (BH2 / GRB * (ZN - 1) - Math.log(ZN - GRB) + GRA / GRB * (BH2 / GRB - 2 / A * ArH2) * Math.log(1 + GRB / ZN));
    FIH2inc = Math.exp(logFIH2);
    FUH2inc = FIH2inc * P * XH2bis;
    FUH2i = FUH2inc * 0.00001;
    logFICO = (BCO / GRB * (ZN - 1) - Math.log(ZN - GRB) + GRA / GRB * (BCO / GRB - 2 / A * ArCO) * Math.log(1 + GRB / ZN));
    FICOinc = Math.exp(logFICO);
    FUCOinc = FICOinc * P * XCObis;
    FUCOi = FUCOinc * 0.00001;
    logFICO2 = (BCO2 / GRB * (ZN - 1) - Math.log(ZN - GRB) + GRA / GRB * (BCO2 / GRB - 2 / A * ArCO2) * Math.log(1 + GRB / ZN));
    FICO2inc = Math.exp(logFICO2);
    FUCO2inc = FICO2inc * P * XCO2bis;
    FUCO2i = FUCO2inc * 0.00001; //la m�me chose mais en bar
    logFIN2 = (BN2 / GRB * (ZN - 1) - Math.log(ZN - GRB) + GRA / GRB * (BN2 / GRB - 2 / A * ArN2) * Math.log(1 + GRB / ZN));
    FIN2inc = Math.exp(logFIN2);
    FUN2inc = FIN2inc * P * XN2bis;
    FUN2i = FUN2inc * 0.00001;
    logFICH4 = (BCH4 / GRB * (ZN - 1) - Math.log(ZN - GRB) + GRA / GRB * (BCH4 / GRB - 2 / A * ArCH4) * Math.log(1 + GRB / ZN));
    FICH4inc = Math.exp(logFICH4);
    FUCH4inc = FICH4inc * P * XCH4bis;
    FUCH4i = FUCH4inc * 0.00001;
    logFINH3 = (BNH3 / GRB * (ZN - 1) - Math.log(ZN - GRB) + GRA / GRB * (BNH3 / GRB - 2 / A * ArNH3) * Math.log(1 + GRB / ZN));
    FINH3inc = Math.exp(logFINH3);
    FUNH3inc = FINH3inc * P * XNH3bis;
    FUNH3i = FUNH3inc * 0.00001;
    logFIMG = (BMG / GRB * (ZN - 1) - Math.log(ZN - GRB) + GRA / GRB * (BMG / GRB - 2 / A * ArMG) * Math.log(1 + GRB / ZN));
    FIMGinc = Math.exp(logFIMG);
    FUMGinc = FIMGinc * P * XMGbis;
    FUMGi = FUMGinc * 0.00001;
    ///////////////////////////
    $("#1-11").text(Number((FUH2i).toFixed(5)).toString());
    fugacity = true;
}

function Reaction() {
    if (!volume | !fugacity)
        return;
    $("#sub-output").css('display','none');
    LogKr = Math.log(1 / (Math.pow(parseFloat($("#8-10").text()), parseFloat($("#8-12").text())) * Math.pow(parseFloat($("#7-10").text()), parseFloat($("#7-12").text())) * Math.pow(parseFloat($("#6-10").text()), parseFloat($("#6-12").text())) * Math.pow(parseFloat($("#5-10").text()), parseFloat($("#5-12").text())) * Math.pow(parseFloat($("#4-10").text()), parseFloat($("#4-12").text())) * Math.pow(parseFloat($("#3-10").text()), parseFloat($("#3-12").text())) * Math.pow(parseFloat($("#2-10").text()), parseFloat($("#2-12").text())) * Math.pow(parseFloat($("#1-10").text()), parseFloat($("#1-12").text()))) * (Math.pow(parseFloat($("#8-10").text()), parseFloat($("#8-13").text())) * Math.pow(parseFloat($("#7-10").text()), parseFloat($("#7-13").text())) * Math.pow(parseFloat($("#6-10").text()), parseFloat($("#6-13").text())) * Math.pow(parseFloat($("#5-10").text()), parseFloat($("#5-13").text())) * Math.pow(parseFloat($("#4-10").text()), parseFloat($("#4-13").text())) * Math.pow(parseFloat($("#3-10").text()), parseFloat($("#3-13").text())) * Math.pow(parseFloat($("#2-10").text()), parseFloat($("#2-13").text())) * Math.pow(parseFloat($("#1-10").text()), parseFloat($("#1-13").text()))));
    LogKeq = Math.log(1 / (Math.pow(parseFloat($("#8-11").text()), parseFloat($("#8-12").text())) * Math.pow(parseFloat($("#7-11").text()), parseFloat($("#7-12").text())) * Math.pow(parseFloat($("#6-11").text()), parseFloat($("#6-12").text())) * Math.pow(parseFloat($("#5-11").text()), parseFloat($("#5-12").text())) * Math.pow(parseFloat($("#4-11").text()), parseFloat($("#4-12").text())) * Math.pow(parseFloat($("#3-11").text()), parseFloat($("#3-12").text())) * Math.pow(parseFloat($("#2-11").text()), parseFloat($("#2-12").text())) * Math.pow(parseFloat($("#1-11").text()), parseFloat($("#1-12").text()))) * (Math.pow(parseFloat($("#8-11").text()), parseFloat($("#8-13").text())) * Math.pow(parseFloat($("#7-11").text()), parseFloat($("#7-13").text())) * Math.pow(parseFloat($("#6-11").text()), parseFloat($("#6-13").text())) * Math.pow(parseFloat($("#5-11").text()), parseFloat($("#5-13").text())) * Math.pow(parseFloat($("#4-11").text()), parseFloat($("#4-13").text())) * Math.pow(parseFloat($("#3-11").text()), parseFloat($("#3-13").text())) * Math.pow(parseFloat($("#2-11").text()), parseFloat($("#2-13").text())) * Math.pow(parseFloat($("#1-11").text()), parseFloat($("#1-13").text()))));
    LogKrLogkeq = LogKr - LogKeq;
    $("#8-1").text(Number((Math.exp(LogKrLogkeq)).toFixed(5)).toString());
    reaction = true;
}

function Synthesis() {
    if (!volume | !fugacity | !reaction)
        return;
    $("#sub-output").css('display','inline');
    $("#molarV").text(Number(($("#4-1").text())).toString());
    $("#XH2O").text(Number(($("#2-7").text())).toString());
    $("#XCO2").text(Number(($("#3-7").text())).toString());
    $("#XN2").text(Number(($("#5-7").text())).toString());
    var n = 0;
    var m = 0;
    n = (Number(($("#Volume").text())) / Number(($("#molarV").text()))) * Number(($("#XH2O").text()));
    $("#nH2O").text(Number((n).toFixed(5)).toString());
    m = n * Number(($("#MH2O").text()));
    $("#mH2O").text(Number((m).toFixed(5)).toString());
    $("#mH2Oa").text(Number((m).toFixed(5)).toString());
    n = (Number(($("#Volume").text())) / Number(($("#molarV").text()))) * Number(($("#XCO2").text()));
    $("#nCO2").text(Number((n).toFixed(5)).toString());
    m = 0.5 * n * Number(($("#MC2H2O42H2O").text()));
    $("#mC2H2O42H2O").text(Number((m).toFixed(5)).toString());
    $("#mC2H2O42H2Oa").text(Number((m).toFixed(5)).toString());
    n = (Number(($("#Volume").text())) / Number(($("#molarV").text()))) * Number(($("#XN2").text()));
    $("#nN2").text(Number((n).toFixed(5)).toString());
    m = 2 * n * Number(($("#MNH4Cl").text()));
    $("#mNH4Cl").text(Number((m).toFixed(5)).toString());
    m = (2 * n * Number(($("#MNH3").text()))) / 0.17;
    $("#mNH3").text(Number((m).toFixed(5)).toString());
    var V = 0;
    V = (Number($("#nH2O").text()) - Number($("#nCO2").text())) * Number($("#MH2O").text());
    $("#VH2O").text(Number((V).toFixed(5)).toString());
    V = Number($("#mC2H2O42H2O").text()) / Number($("#dC2H2O42H2O").text());
    $("#VC2H2O42H2O").text(Number((V).toFixed(5)).toString());
    $("#VC2H2O42H2Oa").text(Number((V).toFixed(5)).toString());
    V = Number($("#mNH4Cl").text()) / Number($("#dNH4Cl").text());
    $("#VNH4Cl").text(Number((V).toFixed(5)).toString());
    V = Number($("#mNH3").text()) / Number($("#dNH3").text());
    $("#VNH3").text(Number((V).toFixed(5)).toString());
    V = Number($("#VH2O").text()) - (Number($("#VNH3").text()) * ((100 - 17) / 100));
    $("#VH2Oa").text(Number((V).toFixed(5)).toString());
    var H = 0;
    H = Number($("#VH2O").text()) / (Math.PI * Math.pow(Number($("#Diameter").text()) / 2, 2));
    $("#HH2O").text(Number((H).toFixed(5)).toString());
    H = Number($("#VC2H2O42H2O").text()) / (Math.PI * Math.pow(Number($("#Diameter").text()) / 2, 2));
    $("#HC2H2O42H2O").text(Number((H).toFixed(5)).toString());
    H = Number($("#VNH4Cl").text()) / (Math.PI * Math.pow(Number($("#Diameter").text()) / 2, 2));
    $("#HNH4Cl").text(Number((H).toFixed(5)).toString());
    H = Number($("#VH2Oa").text()) / (Math.PI * Math.pow(Number($("#Diameter").text()) / 2, 2));
    $("#HH2Oa").text(Number((H).toFixed(5)).toString());
    H = Number($("#VC2H2O42H2Oa").text()) / (Math.PI * Math.pow(Number($("#Diameter").text()) / 2, 2));
    $("#HC2H2O42H2Oa").text(Number((H).toFixed(5)).toString());
    H = Number($("#VNH3").text()) / (Math.PI * Math.pow(Number($("#Diameter").text()) / 2, 2));
    $("#HNH3").text(Number((H).toFixed(5)).toString());
}

//External navigation
$('a:not(.dl-link)').click(function(event) {
    event.preventDefault();
    localStorage.setItem("copyrights", "accept");
    newPage(this.href);
});

function newPage(newlocation) {
    window.location = newlocation;
}

//Open Article
function openArticle() {
	localStorage.setItem("copyrights", "accept");
	location.href="../EoSArticle-Book/";
}