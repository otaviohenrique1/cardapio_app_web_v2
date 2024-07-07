'use client'

// import styles from "./page.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";

interface DataTypes {
  id: string;
  nome: string;
  descricao: string;
  preco: number;
  tipo: string;
  data_cadastro: Date | string;
  foto: string;
}

export default function Home() {
  const [data, setData] = useState<DataTypes[]>([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/produtos/")
      .then((data) => data.json())
      .then((data) => {
        setData(data)
      })
      .catch((erro) => {
        console.error("erro => ", erro);
      })
  }, [])

  return (
    <div>
      <ol>
        {data.map((item) => {
          return (
            <>
              <li key={item.id}>
                <ul>
                  <li>{item.nome}</li>
                  <li>{item.descricao}</li>
                  <li>{item.preco}</li>
                  <li>{(item.tipo == "B") ? "Bebida" : "Comida"}</li>
                  <li>{item.data_cadastro.toString()}</li>
                  <Image
                    src={item.foto}
                    alt={item.nome}
                    width={60}
                    height={60}
                  />
                  <li>{item.foto}</li>
                </ul>
              </li>
              <hr />
            </>
          );
        })}
      </ol>
    </div>
  );
}
