import Image from "next/image"

export const renderRow = row => {
    return(
        <tr>
            <td>
                <div>
                    <Image src={row.image} alt={row.nom} width={50} height={50} />
                </div>
            </td>
            <td>
                <div>
                    <Image src={row.image} alt={row.nom} width={50} height={50} />
                </div>
            </td>
            <td>
                <div>
                    <Image src={row.image} alt={row.nom} width={50} height={50} />
                </div>
            </td>
            <td>
                <div>
                    <Image src={row.image} alt={row.nom} width={50} height={50} />
                </div>
            </td>
        </tr>
    )
}