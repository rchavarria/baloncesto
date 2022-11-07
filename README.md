# Baloncesto

Calendario de partidos de baloncesto

## Equipo de Alevín

Ir a la web de la [FBM](https://fbm.es/es/horarios-y-resultados)

- Categoría: "Alv Mas 2ºaño Liga Marco Aldany"
- Fase: Primera
- Grupo: Serie B, Grupo 7

## Equipo de infantil

Ir a la web de la [FBM](https://fbm.es/es/horarios-y-resultados)

- Categoría: "Infantil Masc Pref"
- Fase: Primera 3ª División
- Grupo: Serie A, Grupo 2

## Calculando puntos marcados en el último partido

Al finalizar cada partido, se publican los _puntos por partido_ de cada
jugador, es decir, la media aritmética de los puntos que ha metido en
los partidos que ha jugado

Para ir calculando medias aritméticas sobre la marcha, se utiliza esta
fórmula:

```
a = a' + ( (m - a') / t )
```

Donde:

- `a`: es la nueva media aritmética
- `a'`: es la media aritmética anterior
- `m`: es el valor actual, el valor de esta iteración
- `t`: es el número de iteraciones

Normalmente, conozco:

- `a`: la media que publican después del partido
- `a'`: la media que tengo almacenada del último partido
- `t`: el total de partidos jugados

Me falta `m`, así que despejo:

```
m = t (a - a') + a'
```
