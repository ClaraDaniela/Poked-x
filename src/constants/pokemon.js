const colorByType = {
  normal: "bg-[#BCBCAC]",
  fighting: "bg-[#BC5442]",
  flying: "bg-[#669AFF]",
  poison: "bg-[#AB549A]",
  ground: "bg-[#DEBC54]",
  rock: "bg-[#BCAC66]",
  bug: "bg-[#ABBC1C]",
  ghost: "bg-[#6666BC]",
  steel: "bg-[#ABACBC]",
  fire: "bg-[#FF421C]",
  water: "bg-[#2F9AFF]",
  grass: "bg-[#78CD54]",
  electric: "bg-[#FFCD30]",
  psychic: "bg-[#FF549A]",
  ice: "bg-[#78DEFF]",
  dragon: "bg-[#7866EF]",
  dark: "bg-[#785442]",
  fairy: "bg-[#FFACFF]",
  unknown: "",
  shadow: ""
}
const colorByStat = {
  HP: "[&>div]:bg-red-500 bg-slate-100",
  ATK: "[&>div]:bg-orange-500 bg-slate-100",
  DEF: "[&>div]:bg-yellow-500 bg-slate-100",
  SpA: "[&>div]:bg-blue-300 bg-slate-100",
  SpD: "[&>div]:bg-green-500 bg-slate-100",
  SPD: "[&>div]:bg-pink-500 bg-slate-100",
  TOT: "[&>div]:bg-blue-500 bg-blue-300",
};

const imagenByType = {
  normal: "/Poked-x/tipos/Tipo_normal_icono_EP.svg",
  fighting: "/Poked-x/tipos/Tipo_lucha_icono_EP.svg",
  flying: "/Poked-x/tipos/Tipo_volador_icono_EP.svg",
  poison: "/Poked-x/tipos/Tipo_veneno_icono_EP.svg",
  ground: "/Poked-x/tipos/Tipo_tierra_icono_EP.svg",
  rock: "/Poked-x/tipos/Tipo_roca_icono_EP.svg",
  bug: "/Poked-x/tipos/Tipo_bicho_icono_EP.svg",
  ghost: "/Poked-x/tipos/Tipo_fantasma_icono_EP.svg",
  steel: "/Poked-x/tipos/Tipo_acero_icono_EP.svg",
  fire: "/Poked-x/tipos/Tipo_fuego_icono_EP.svg",
  water: "/Poked-x/tipos/Tipo_agua_icono_EP.svg",
  grass: "/Poked-x/tipos/Tipo_planta_icono_EP.svg",
  electric: "/Poked-x/tipos/Tipo_electrico_icono_EP.svg",
  psychic: "/Poked-x/tipos/Tipo_psíquico_icono_EP.svg",
  ice: "/Poked-x/tipos/Tipo_hielo_icono_EP.svg",
  dragon: "/Poked-x/tipos/Tipo_dragón_icono_EP.svg",
  dark: "/Poked-x/tipos/Tipo_siniestro_icono_EP.svg",
  fairy: "/Poked-x/tipos/Tipo_hada_icono_EP.svg",
  unknown: "",
  shadow: ""
};

const natureEffects = {
  adamant: { up: "attack", down: "special-attack" },
  modest: { up: "special-attack", down: "attack" },
  jolly: { up: "speed", down: "special-attack" },
  timid: { up: "speed", down: "attack" },
  bold: { up: "defense", down: "attack" },
  calm: { up: "special-defense", down: "attack" },
  impish: { up: "defense", down: "special-attack" },
  careful: { up: "special-defense", down: "special-attack" },
  rash: { up: "special-attack", down: "special-defense" },
  lonely: { up: "attack", down: "defense" },
  naughty: { up: "attack", down: "special-defense" },
  mild: { up: "special-attack", down: "defense" },
  gentle: { up: "special-defense", down: "defense" },
  hasty: { up: "speed", down: "defense" },
  naive: { up: "speed", down: "special-defense" }
}


export { colorByType, colorByStat, imagenByType, natureEffects };