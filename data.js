export let groups = {
    1: "litowce",
    2: "berylowce",
    3: "skandowce",
    4: "tytanowce",
    5: "wanadowce",
    6: "chromowce",
    7: "manganowce",
    8: "żelazowce",
    9: "kobaltowce",
    10: "niklowce",
    11: "miedziowce",
    12: "cynkowce",
    13: "borowce",
    14: "węglowce",
    15: "azotowce",
    16: "tlenowce",
    17: "fluorowce",
    18: "helowce"
};
export let gr_elements = [["Li", "Na", "K", "Rb", "Cs", "Fr"], ["Be", "Mg", "Ca", "Sr", "Ba", "Ra"], ["Sc", "Y"], ["Ti", "Zr", "Hf", "Rf"],
                        ["V", "Nb", "Ta", "Db"], ["Cr", "Mo", "W", "Sg"], ["Mn", "Tc", "Re", "Bh"], ["Fe", "Ru", "Os", "Hs"], ["Co", "Rh", "Ir", "Mt"], 
                        ["Ni", "Pd", "Pt", "Ds"], ["Cu", "Ag", "Au", "Rg"], ["Zn", "Cd", "Hg", "Cn"], ["B", "Al", "Ga", "In", "Tl", "Nh"], ["C", "Si", "Ge", "Sn", "Pb", "Fl"],
                        ["N", "P", "As", "Sb", "Bi", "Mc"], ["O", "S", "Se", "Te", "Po", "Lv"], ["F", "Cl", "Br", "I", "At", "Ts"], ["He", "Ne", "Ar", "Kr", "Xe", "Rn", "Og"]];
export let okr_elements = [["H", "He"], ["Li", "Be", "B",  "C", "N", "O", "F", "Ne"], ["Na", "Mg", "Al", "Si", "P", "S",  "Cl", "Ar"], 
                           ["K", "Ca", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Br", "Kr"],
                           ["Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "Te", "I", "Xe"],
                           ["Cs", "Ba", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Tl", "Pb", "Bi", "Po", "At", "Rn", "La", 
                           "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu"], ["Fr", "Ra", "Rf", "Db",
                           "Sg", "Bh", "Hs", "Mt", "Ds", "Rg", "Cn", "Nh", "Fl", "Mc", "Lv", "Ts", "Og", "Ac", "Th", "Pa", "U", "Np", "Pu", 
                           "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No", "Lr"]];
export let elements = ["H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne", "Na", "Mg", "Al", "Si", "P", "S",  
                    "Cl", "Ar", "K", "Ca", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", 
                    "Ge", "As", "Se", "Br", "Kr", "Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd",
                    "Ag", "Cd", "In", "Sn", "Sb", "Te", "I", "Xe", "At", "Rn", "Cs", "Ba", "Hf", "Ta", "W", "Re",
                    "Os", "Ir", "Pt", "Au", "Hg", "Tl", "Pb", "Bi", "Po", "At", "Rn", "Fr", "Ra", "Rf", "Db",
                    "Sg", "Bh", "Hs", "Mt", "Ds", "Rg", "Cn", "Nh", "Fl", "Mc", "Lv", "Ts", "Og", "La", "Ce", 
                    "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu",
                    "Ac", "Th", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No", "Lr"];
export let names = ["Wodor","Hel","Lit","Beryl","Bor","Wegiel","Azot","Tlen","Fluor","Neon","Sod","Magnez","Glin","Krzem","Fosfor","Siarka","Chlor","Argon","Potas","Wapn",
                    "Skand","Tytan","Wanad","Chrom","Mangan","Zelazo","Kobalt","Nikiel","Miedz","Cynk","Gal","German","Arsen","Selen","Brom","Krypton","Rubid","Stront","Itr",
                    "Cyrkon","Niob","Molibden","Technet","Ruten","Rod","Pallad","Srebro","Kadm","Ind","Cyna","Antymon","Tellur","Jod","Ksenon","Cez","Bar","Lantan","Cer",
                    "Prazeodym","Neodym","Promet","Samar","Europ","Gadolin","Terb","Dysproz","Holm","Erb","Tul","Iterb","Lutet","Hafn","Tantal","Wolfram","Ren","Osm","Iryd",
                    "Platyna","Zloto","Rtec","Tal","Olow","Bizmut","Polon","Astat","Radon","Frans","Rad","Aktyn","Tor","Protaktyn","Uran","Neptun","Pluton","Ameryk","Kiur",
                    "Berkel","Kaliforn","Einstein","Ferm","Mendelew","Nobel","Lorens","Rutherford","Dubn","Seaborg","Bohr","Has","Meitner","Darmsztadt","Roentgen","Kopernik","Nihon","Flerow","Moskow","Liwermor","Tenes","Oganeson"];
export let non_metals = ["H", "He", "C", "N", "O", "F", "Ne", "P", "S", "Cl", "Ar", "Se", "Br", "Kr", "I", "Xe", "At", "Rn"];
export let noble_gas = ["He", "Ne", "Ar", "Kr", "Xe", "Rn"];
export let semi_metals = ["B", "Si", "As", "Te", "Ge", "Sb"];
export let alkadi_metals = ["Li", "Na", "K", "Rb", "Cs", "Fr"];
export let alkadine_earth_metals = ["Be", "Mg", "Ca", "Sr", "Ba", "Ra"];
export let p_block_metals = ["Al", "Ga", "In", "Sn", "Tl", "Pb", "Bi", "Po"];
export let transition_metals = ["Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", 
                                "Pd", "Ag", "Cd", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Rf", "Db", "Sg", "Bh", "Hs", "Cn"];
export let precious_metals = ["Ag", "Au", "Ru", "Rh", "Pd", "Os", "Ir", "Pt"];
export let lanth = ["La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu"];
export let act = ["Ac", "Th", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No", "Lr"];
export let gauze = ["H", "He", "N", "O", "F", "Ne", "Cl", "Ar", "Kr", "Xe", "Rn"];
export let liquid = ["Br", "Hg"];
export let solid = [ "Li", "Be", "B",  "C",  "Na", "Mg", "Al", "Si", "P",
                    "S",  "K", "Ca", "Sc", "Ti", "V",  "Cr", "Mn", "Fe",
                    "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Rb",
                    "Sr", "Y",  "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd",
                    "Ag", "Cd", "In", "Sn", "Sb", "Te", "I",  "Cs", "Ba",
                    "La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb",
                    "Dy", "Ho", "Er", "Tm", "Yb", "Lu", "Hf", "Ta", "W",
                    "Re", "Os", "Ir", "Pt", "Au", "Tl", "Pb", "Bi", "Po",
                    "At", "Fr", "Ra", "Ac", "Th", "Pa", "U",  "Np", "Pu",
                    "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No", "Lr"];
export let unknown = ["Rf", "Db", "Sg", "Bh","Hs", "Mt", "Ds", "Rg", "Cn", "Nh", "Fl", "Mc", "Lv", "Ts", "Og"];