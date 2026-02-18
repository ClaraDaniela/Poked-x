import { useState, useEffect } from "react";
import { colorByStat, colorByType, imagenByType } from "../constants/pokemon";
import Evolutions from "./Evolutions";

const PokemonDetail = ({ pokemon }) => {
    const [typeDamage, setTypeDamage] = useState({});

    useEffect(() => {
        const fetchTypeData = async () => {
            if (!pokemon?.types) return

            const responses = await Promise.all(
                pokemon.types.map(t =>
                    fetch(`https://pokeapi.co/api/v2/type/${t}`)
                        .then(res => res.json())
                )
            )

            const damageData = {}

            responses.forEach((data, index) => {
                const typeName = pokemon.types[index]
                damageData[typeName] = data.damage_relations
            })

            setTypeDamage(damageData)
        }

        fetchTypeData()
    }, [pokemon])

    return (
        <>
            <header className="absolute left-1/2 -translate-x-1/2 -translate-y-[92%] scale-[180%]">
                <img className="pixelated" src={pokemon?.image} alt="" />
            </header>
            <div className="overflow-y-auto px-4 pt-12 grid gap-2 content-start h-full hidden-scroll">
                <span className="text-slate-400 text-sm font-semibold">
                    N° {pokemon?.id}
                </span>
                <h2 className="font-bold text-2xl capitalize">{pokemon?.name}</h2>
                <ul className="flex gap-2 justify-center">
                    {pokemon?.types?.map((type) => (
                        <li
                            className={`p-1 rounded-md px-2 text-white text-sm ${colorByType[type]}`}
                            key={type}
                        >
                            {type}
                        </li>
                    ))}
                </ul>
                <div>
                    <h4 className="font-bold capitalize">Resumen</h4>
                    <p className="text-slate-400">{pokemon?.description}</p>
                </div>
                {/* Altura y peso */}
                <section className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                        <h4 className="font-bold capitalize">Altura</h4>
                        <span className="bg-slate-100 block rounded-full p-1">0.7m</span>
                    </div>
                    <div className="grid gap-2">
                        <h4 className="font-bold capitalize">Peso</h4>
                        <span className="bg-slate-100 block rounded-full p-1">6.9kg</span>
                    </div>
                </section>
                {/* Habilidades */}
                <section className="grid gap-2">
                    <h4 className="font-bold capitalize">Habilidades</h4>
                    <ul className="grid grid-cols-2 gap-4">
                        {pokemon?.abilities.map((ability) => (
                            <li
                                key={ability}
                                className="bg-slate-100 block rounded-full p-1 capitalize"
                            >
                                <span>{ability}</span>
                            </li>
                        ))}
                    </ul>
                </section>
                {/* Stats */}
                <section className="grid gap-2">
                    <h4 className="font-bold capitalize">Estadísticas</h4>
                    <ul className="flex justify-center gap-3 flex-wrap">
                        {pokemon?.stats.map((stat) => (
                            <li
                                className={`p-1 rounded-full ${colorByStat[stat.name]}`}
                                key={stat.name}
                            >
                                <div className="bg-green-500 rounded-full w-[26px] aspect-square grid place-content-center">
                                    <span className="text-[10px] text-white font-semibold">
                                        {stat.name}
                                    </span>
                                </div>
                                <span className="font-bold text-xs">{stat.base_stat}</span>
                            </li>
                        ))}
                    </ul>
                </section>
                {/* imagenes de tipos */}
                <section className="grid gap-4">
                    {pokemon?.types?.map((typeName) => {
                        const damage = typeDamage[typeName]

                        if (!damage) return null

                        return (
                            <div key={typeName} className="grid gap-2 justify-center">

                                {/* Tipo principal */}
                                <div className="flex items-center gap-2 justify-center">
                                    <img
                                        src={imagenByType[typeName]}
                                        alt={typeName}
                                        className="w-8 h-8"
                                    />
                                </div>

                                {/* Daño x2 */}
                                <div className="flex items-center gap-2">
                                    <span className="text-red-500 font-bold">Les da una paliza x2</span>
                                    {damage.double_damage_to.length > 0 ? (damage.double_damage_to.map(d => (
                                        <img
                                            key={d.name}
                                            src={imagenByType[d.name]}
                                            alt={d.name}
                                            className="w-6 h-6"
                                        />
                                    ))
                                    ) : (
                                        <span className="text-black-500 font-bold">No hay tipos</span>
                                    )}
                                </div>

                                {/* Daño x0.5 */}
                                <div className="flex items-center gap-2">
                                    <span className="text-yellow-500 font-bold">Les da una paliza x1</span>
                                    {damage.half_damage_to.length > 0 ? (damage.half_damage_to.map(d => (
                                        <img
                                            key={d.name}
                                            src={imagenByType[d.name]}
                                            alt={d.name}
                                            className="w-6 h-6"
                                        />
                                    ))
                                    ) : (
                                        <span className="text-black-500 font-bold">No hay tipos</span>
                                    )}
                                </div>

                                {/* Daño x0 */}
                                <div className="flex items-center gap-2">
                                    <span className="text-gray-500 font-bold">Estan iguales</span>
                                    {damage.no_damage_to.length > 0 ? (damage.no_damage_to.map(d => (
                                        <img
                                            key={d.name}
                                            src={imagenByType[d.name]}
                                            alt={d.name}
                                            className="w-6 h-6"
                                        />
                                    ))
                                    ) : (
                                        <span className="text-black-500 font-bold">No hay tipos</span>
                                    )}
                                </div>

                            </div>
                        )
                    })}
                </section>

                <section className="grid gap-2">
                    <h4 className="font-bold capitalize">Evoluciones</h4>
                    <Evolutions evolutions={pokemon?.evolutions ?? []} />
                </section>
            </div>
        </>
    );
};
export default PokemonDetail;