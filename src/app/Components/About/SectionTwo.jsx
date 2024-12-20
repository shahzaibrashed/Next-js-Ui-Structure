/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

const SectionTwo = () => {
  return (
<>
<section className="text-gray-700 body-font">
  <div className="flex justify-center  text-4xl font-regular md:mt-20 mt-10">Why Us?</div>
  <div className="container px-5 py-12 mx-auto">
    <div className="flex flex-wrap text-center justify-center">
      <div className="p-4 md:w-1/4 sm:w-1/2">
        <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
          <div className="flex justify-center">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB2CAYAAAADbleiAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA6eSURBVHgB7Z1LcttIEkCzQLFtzaY9J2j0CSyNZUfMStQJbJ1A9AkkR0y0bPfC9GJapDeSTmD2CWSfQJiVIyQqLJ/AmBO0ZmXLElFTmYVPAQRBfCn8XoRsgh+AYCKzsrIyEwyCDD4/gFVrFzjvAYM14PAAygKHSwDrGF49GUNLLJhv693ZGljaiXikQ7kxgd9swat/mtASiSdgFC7XTkulsVGgNl93tmCwfgUtc1mhfw8+6bbmOsIVGsKfw/XKZal+wIOLPmj8kC5CHD7uW4fi2efQMhdN/vdTDzyzbJu/x0bptOPVozFMVYHyPowu3kDLXGwB8133GW69LfXY9nrjg7Aub91tzgfwx+QZtIQix+DhhLvPvNxgUAUOzsbAtB16zOAKrJv11umaRfNvMhOqwnV3T06bAOSY3D2lKV6LDw2qCvkHN9uAPoNEh/vTE2jxUV0BI2iS0dv36Amn6xBaXKotYAS9fYu/cLc534PR+R60EAEnS4zBLx/9OvfdahiTxj12CfxHuNd9cN6TTpB4L029rD9DQ4xJ9hnFcHIk/t21z+oKbq0t+P3JJTSc+AJGQdybnlKAIYgF2zR9cRhNdoSwxiF7MYSXvuXb5/3pZwiGRtMKaDg5BTTTkjacCUlM9Kr1JlS4SAfeux4sRsXChYv0hGYP3K37Uxwv9Zl3oSZ3RGQtqVfMb3A8Nu0tnTxr/D4NZiX2Ozn3gglMjHmMGzDV3rsrTvdu8PWxjIrZBoGmMejprvSF6ZURJ8Y2vf3AM+etwoQ/FxfKpbLYocO9W7ygDIgLauu7s20lpo5C/io024R6Y4ofE4e246DFii9gVdP2Hx/R/wfnH8WOA1pt6d4aBv9IBxx8PhLaaocUmbcfZ2EDTfJLe3weTi69Y3EdkvKbMOt/TJ6TVfEWTnSoNzr5OkzEBkYXA9h/5Eb6kgjYBOeHGl4IzbW+AGc73stOkEQzXQ1m4vXRuZivTjddTQVuzuwTBeHsE804D+4zIegPHHwSF0pnIBy9Tai/gD0wdDu80IUvRdPH+AK2+DFozJ5jiiA/90U0TZquINfaB1tbdfrjzD8vRW866T7TIE1VH+oOOb84lInfzwnd0iLM+Re0tPGdrNfCLKtBfg/prboHFBEmzVIjTB74eXWq9JpM/fHCfbbMB39vVIRXT/p++QifRwg/2TwYIa8UnSbtFzKp31bGocuK9D5yuOwxmn+Yq5E4Z6bpDXtAzgJagXYhPx3qVJHBdnIBt5QbjOI5wyKH4+qHKlv8WJpn+Rj7uRVwzWkFXHNaAdecVsA1pxVwzWkFXHNaAdecVsA1pxVw3WB8U91sBVwnsIAwsILWCrguvJvsUiZLgCQL/ncHrXl+b6sWgvDuGnTYQ8pItdxkQx/lFTAuN2o/7Ygv3weY6gBdaAmAa4GcR76lnAImcwMD8eVbrc1I+QQ8nLwX5qbve46qB8Gk/1s8nEL4CMolYCzmJpPsYlAayssMuVl1hzJnKLlwJ+zl8giYEub5wN2m/K3HA2iJxkkuPDgzhJDfB18uzzSJdZVWDGzcCjchmMyoFuHZlEODqURl2ne3sfgsCkzS08TYY4kxiLNLX11UkZT9uJilOpq8UTsllUPAlNfr5kQbkQVjcpweUHI8s/+wNKXIQjMcPlgXzV9v9rjW20IbsyU9Xw6Yd+72XCmJidZ073FENQO2UVLHaQ9Zg4Q/Rp7FZmhZcJ+4bwgNJOg07g0nX8UY2Ic8wfPAFNh55wvd8G4GqOEK1YhkuSjdgHCcplIX5pkk/DFYdyB+GAOyo1OAZSaOEHJcR9CjyaHbNyQLodOfwHHxdTTdC6o/qiVg9aTt2hshTB0Uk2TTg2KOfwX7EceVAu9BVljM42qwsPqyagK+crUGTeJ19wOw6S/AYTngsUeTZ/CtI+bn001YVsMpPC5qK3YehOlT74XFxXnVWk2SDoQETeL96V/iOa9uGc0Y51v0F1Yblc93OKHjLoggpYIuYDH/16x1MZaqxeyYxH5Kx3UqJWVvsIXDQbU0+LuI2NynK1ifeY0CIxsDd3vweT20PUQ02LUHLyKDtOVvNzpMO2s09s8TqAyj/km1V+pnNP7Uf/HFgYI7R/bGpXC0DOpSEHoOPFYfk2oJGAvSDj5tUWgOtIfC/ujk1MiolzHz3tH58Uz5ajhG6D6AHCb8G8sCOQyjiuMyGiZEbJx/DCm+Uz5jF+Ax7pTTRmG6hfUOKMB55xszfFsxLxqS1f3eckOsl0a9w6C+HnHmz1L4BiRB7ndMfzjFixQ0/xKxjz6kpHoCzgfZQC1JgTk2PMW2ECRknGvyPRrz9x+9iPV57JSLJnfuwoD2FxRAvVN2tM7suMnhWIzl64m7B2gg+1TjuCojSw+o6ZqsbY4HaqMs1J51AhlPOF7Ho74CpvAi9xYwyEO1hNZu7CUuLkfzOs+0Ot2DkoAXF4Ya1aAITcHy731dTwHL2LHqfQqHyNpKHTNWL5RZeom02IG0eWPd17MELUPOQq6fgDF+HBQuastvKdsaRmmvQxotdkCTrfYpISFPdiAn6ifg1Sk6Qjo9JrOccZUpWnsd0mmxw0sxbKiaDHAE/z7LJZBSLwHT0poSXLD4dibhSqHpsd6bRYsRcr6UBudpWjmGUB8Bh6f8GJCFZELLpsVEoME59gfNSH0ErHXViJWROeVHmsheko9k1+JAg/Ok07AQ6iFgSgRQTLPsOpuNjrYLyellTjiQVsdzujJeNPUQsOoI8XhB+EikkPqQipU+ZAUXVbwc8Eymv/oC9k9jzFyyMX0ZngnR2G5m5wgDMdjH0/0+6bW4+gJm3JszYgJcVjJpL0gP+N7tHmTleuUoDy2utoClMHr2lkkZHlnBgrfM+yhAi4GlilVXW8DYANvbyOdei/7SmZT7yFGLHTTYSXPRVN1Ee/lJ/khQOuKEJePCWHZLIC9Ygx7LiyZxdKu6ApbmWbe3zMxBDSReWDIuei650pg14m0kNtMV1mC6Ja6NMM9ZyVN7HeZU/CXCuvX8CsaeQkKqK2C1mwyf/geykq/2OmQPX+Kc3vWmuZ50HK6mgOVJ9txtK2M1QRHa65A1fImoiQGrt31IQLUEjG2ChheHM+mwHe0w03hXjPY6pNdi53zVixmzREeTk7jnWy0B002zMNltRtt6sjYoxU0pZ7XXpLwtTDyXnrkJ8TDsG4a9mPHo02qxd75+MO4ua6EWOl1Vy6rUI1+1IHlwwRfHphto9pVX7dzm7klkJQPlegXSgd6dHSl3YOuRxiVPGdIjX7XohieRwZ0Ke9FYpiK0jEH66NVMHNsnXAktXNA67fzvESY4TBHyxZO1jMNAuvOtroCxuhBzja05CeOLCGZdRsWxaZ12jiMXFWCRkSjT3tJT39eYbv2X7nwrHOgQJo8S7Nhmqs/LmLNub5kLzee8Fk7dzte5n8FIFGczN6uCpFB1oXu+iebWFZ4H29WFaepxg+k9FsSpTtBDn7253Yr8FGqdGm5Mm4bjna+e5GPNbEYa7OizqJlKZOJ7jGiVess5TMPJKWNSSO9q8VuqhPyhzNA/GiNvxwv3IYXV9/b5I8Yasto6wr5dvcfieS7GyVXnCOftcYg6X7QKahhzDtWaJslsjQGkJehYkQe8IL2Hxr2p1DhZdC3zrIcT1B5b8LQIYETux7oRc+SuM2/tkcMVLBcNkvV8oWkmWvsJBaK723GWGNU2xpxduRcE890HeTEznnhKhysh5RCwZhV+ogQPVPBFecAOwWA/3sha3gBSMdtW3Fi4N8Uhh2vag4Iph4A5e6hs6FAUsj1DcqbqfXnpRtY4hur2E2bsCBWDn5UtE/aL75TnFzC7s/7MPd/j4kyX4duaTrdjfSq/G1mv+T5bBKo15Px/UsBqTUzm8ouEyHJJ3fdcHvlMoagd9QAtR/wFdCoQu/mVPFv6E2FDKiSPmYMdnGoxKOYi9p2TdSkbWBycD5QVD5O++DLuwO30YQyCY96ttQW/pyz5nAe2HAxeTFhtn0e6TxmOjZ3yLfA8c3FBSg325+DqtN5apCbjvuf3YfSq6/Lq/0jrqpPwdkR5LMgvYl6VosbyOUenp6ZPuLLCg/m+BDbbUpGd5fLWZD3Jm3P6Dnrkq987fy/UYuFtChYn05uQHt23hUMudg+AYFdE7CSDzUaKSl8pK0V2l0ftkjHk5YARs2+d584F6/eiMSaLXiFlJUC+41+ZSbsiFYd71jMoGjm8GjSm729sq9aIQROhG20JT10df1eEh/2vf/wX8kaO/T16TEojlGcZTp1NM1eT8ApHk6yGKm+m2WuKg/hrp4AyQ5YoXKSZAnYRiw0OWDCWZ7d42r1vWdIs7JYDETRcwLem+5C6qHdPcxOyDOD0vSdECDbvCygGTe1VKZH3RlSf0en+DMOLcepiNuzCjtEkvGFkEHljjyShzcw008mSc37UsB4sHTEsOLcjWMbRoGnIuf4J3C2GiG0vRZObJ2A1JiyjZMuc7/fcR2HJ8gXQrDHYHxM2RcRnOYsqDsMJxoplogCjNJ8xFEzDvGjfDbiMpQoX4TdKDpb2EJZAwwRsme5DzteWkRPlo9NV1moT5nSlpFkmGu+Ksjq9cu8chsuio8klJdMVjpgHW74xON00LCEN9KLP90TUKl5eclEoy3lF07xIlsyvMuCuQOFed5YW7GhmJAublWrdz+p9dv2vY4Id3llFGbPjIiNZ/vxrD5MWHAYbS3PumhnJQsJNtZnbfYj9eW6SJc19VZq72PBjZTxTEprnTaZlhojhey6PVosJaa6AqRckqE3Gxrkv56lVhc4xl0zDlwsV6ObLOSOrCpcuVJVWwA4Wv1NBFEUrYBdtDfKGOgnAcqNlAVoBO6Rs1xu9zxx6T2f9CtAiydI/IwyspphXubFEmp2yEwT7Z4wmOtxab1PXRaEVWLV2aV8loBVwEGwT2NGeCUGnLJmZ4rhbGloBz0M6R3fqIOVBw8dgPoZlwUMLyAunubFolWXkK99B0jvyf+qsehZ7zpKrAAAAAElFTkSuQmCC"
              className="w-32 mb-3"
            />
          </div>
          <h2 className="title-font font-regular text-2xl text-gray-900">
          UI/UX DESIGN
          </h2>
        </div>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2">
        <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
          <div className="flex justify-center">
            <img
              src="https://hnh-figma-work.vercel.app/assets/Vector02-OW3d6_At.png"
              className="w-32 mb-3"
            />
          </div>
          <h2 className="title-font font-regular text-2xl text-gray-900">
          Web Development
          </h2>
        </div>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2">
        <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
          <div className="flex justify-center">
            <img
              src="data:image/png;base64,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"
              className="w-32 mb-3"
            />
          </div>
          <h2 className="title-font font-regular text-2xl text-gray-900">
          App Development
          </h2>
        </div>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2">
        <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
          <div className="flex justify-center">
            <img
              src="https://hnh-figma-work.vercel.app/assets/Vector%2004-B4VKJCz-.png"
              className="w-32 mb-3"
            />
          </div>
          <h2 className="title-font font-regular text-2xl text-gray-900">
          Devops
          </h2>
        </div>
      </div>
    </div>
  </div>
</section>

</>
  )
}

export default SectionTwo