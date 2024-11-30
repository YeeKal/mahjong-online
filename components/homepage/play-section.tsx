import { ArrowRight, Gamepad2 } from 'lucide-react';
import Link from "next/link";
import { BorderBeam } from "../magicui/border-beam";
import { Button } from "../ui/button";
import Image from 'next/image';
import { TITLE_TAILWIND_CLASS, GAME_DETAIL } from '@/lib/constants';
import PlayButton from '@/components/common/play-button';

export default function PlaySection() {
    return (
        <section className='max-w-5xl flex flex-col items-center justify-center leading-6 mt-[3rem]' aria-label={GAME_DETAIL.how_to_play.title}>
            <h2 className={`${TITLE_TAILWIND_CLASS} text-2xl scroll-m-20 font-semibold tracking-tight text-center max-w-[1120px] bg-gradient-to-b dark:text-white`}>
                {GAME_DETAIL.how_to_play.title}
            </h2>
            <p className="mx-auto max-w-4xl text-gray-500 mt-2 dark:text-gray-400">
            {GAME_DETAIL.how_to_play.description}
            </p>
            <MahjongTileTable></MahjongTileTable>

            <div className="">
              <h3 className='text-xl font-semibold'> {GAME_DETAIL.how_to_play.game_rules_title}</h3>
              {
                  GAME_DETAIL.how_to_play.game_rules.map((rule, index) => {
                      return (
                          <li key={index}>
                              {rule}
                          </li>
                      )
                  })
              }
            </div>
            
            
        </section>
    )
}


export function MahjongTileTable() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b text-center">{GAME_DETAIL.how_to_play.tile_table_h1}</th>
              <th className="py-2 px-4 border-b text-center">{GAME_DETAIL.how_to_play.tile_table_h2}</th>
            </tr>
          </thead>
          <tbody>
            {GAME_DETAIL.how_to_play.tiles.map(({category, image}, itemIndex) => (
                <tr key={`${itemIndex}`} className="hover:bg-gray-50">
                  <td className="py-2 px-4 border-b">{category}</td>
                  <td className="py-2 px-4 border-b">
                    <Image
                      src={image}
                      alt={image.split('/').pop()?.split('.').slice(0, -1).join('.') || category}
                      width={400}
                      height={60}
                      className="h-20 object-contain border-gray-300 rounded"
                    />
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}
