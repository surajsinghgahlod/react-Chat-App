import React, { useContext, useEffect, useState } from "react";


const Chats = () => {
   return (
    <div className="chats">
      <div className="userChat"
        //  onClick={handleSelect}
         >
          {/* <img src={user.photoURL} alt="" /> */}
          <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAPEBAQEBAWEBAPDxAWDxYQDw8PFhYWFhYXFxYWFhYZHikhGRsmHhYWIjIiJiosLy8vGCA1OjUuOSkuLywBCgoKDg0OGxAQGS4mHiYuLi4uLi4uLi4uLi4uLi4sLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLv/AABEIALcBEwMBIgACEQEDEQH/xAAcAAADAAMBAQEAAAAAAAAAAAAAAQIDBQYEBwj/xAA/EAABAwIDBQYEBAQDCQAAAAABAAIRAyEEEjEFQVFhcQYTIoGRoTKxwdEUQnLwByNSsjNi8SRDY2SSorPC4f/EABoBAAIDAQEAAAAAAAAAAAAAAAABAgQFAwb/xAAzEQACAQIEAgkDAwUBAAAAAAAAAQIDEQQSITFBUQUTImFxgaGx8DLB0SOR4TNCUsLxFf/aAAwDAQACEQMRAD8A4YpKkl6MyiUJohACATAQqCAJTVQrpslMCAmmQmgACakKwEwEkqTTsBKYTUOe0CSQBvlRlJRV2xpN7FgLKBlHNYRiWATMEGDPH/T6JNeHXCiqkZaJjcJJXaKUqkLpYiJATQgCUlaSLCJWSmQNfkpSSsMTvaUlSSdhEoVBJIBJJoQAk0ITsDBCEJiBJNCgSJhEIQmA0JLLTaDqkAmslW5wFgk8xYaKAgACYThNSsIUKkBCABIlC8uNxOQRx081CpUjCOaRKEXN2RixGOiRA3wCY+f7uvBicUTE5SL2jNcGxHqsLX+KC6ZOvADkU34d+YPI1+EaX6ddy8/UrTn9TNWNNJaIKtR48YIAdEg755cB6LJSrPZbMZ3cIi/sirSy5mvnNwEc9Aei8+LJDW5m2y7x0XNSa2ZJx5m5wW0GvgGxWwXHU3lp8J0AO48P3C6jZ1fvKYJ13rYwWIc+xLcoYimo9pHoQkhXyrcaEJIASEIQISaEIAFKaSAErpslDWT0Tc4aBIDGQhCE7ACalCLAMpJpJDEmhNAXFCcJoTsFwCoJJhAXGEJQrATFckBUmm1soAULWbZADQ62scVtS2FqtstcQLeHiDpxn2VXGL9F6HbD/wBRGm/M0m5ztEXFtJE7rb19Ir7NNLEU6sUxTpUhl76q2izMW3uQZPQcF89weCdXLskZhfxai4gN5mV99wuFwtTDMq1SCO7EOGpBiw33svN1HZo26MbpnD47s/QpYDvzD3ZoDpzgFzrXtIFguVxuHL6bmF1N7mtM5WljhHrML6b2i2jgaeGr0O9YwsyHI58kX3zqfutWa2DrYXPSg1MoD/FmjNwvbf6LmpPdo7uCvZM+MtaJuJI0jit9sCvJc28xJMRvXhxmFDJLbZ6jgJ4Ekjrot5sjCllMSLkk/Za+Ai5Vcy2Rk4l5YWZ7IVMbvPBUGga6jcpc6VtmaS65UKk0BchCpJAEpJwhIBKqcTf7KUIAqobwNFjTQgBIQhAAmkhFhAhNOm2SglclCt4E2UoECoBATCYgAThEKgEDEhNNjZKYhgLIAG9UHw24qEDAqS2VaEAamniH4DECtTY2q18yyoHZSQZFxoQbruez+Kbj8A2j3ndVCZls+E5i6ANY1XNuaDY6K9mbEL6FV2GqfzadQteAYBBDTBjQ6+p8sLpHCRh+onuzVwWIlLsb6HV7T2ZgcJTdRruD6z2jKcrAXTMWAn56LnHYalgqRdJzVhJzQ2GicogARr7LXY6ttJwY1wc7uxDPG0xFo1Rh9mVXk1MS7M4CGtLi7zJ+izGrLcvZ3J2SOfwbamJqNLiTTpkhsADKCeI8+ei6Zllr9jYmm5ppsYabmatcZPrvWxXpsJShCn2Xe5hV5ylLVA8yVjVQkrRwEkqSKAEhCEAJSrSSAlJUUkAJCEJAJJNCAEhCEDLayU3PiwRUcDEcL7lCQAFSAhTENCSoIAAmE4ThACCoJwgBAAtniOz+MptzPwzwP0F0dQJI80+zeBNfE0mAWDpd0F/nC+tve5obafDB0E9J3rNx2PeHqKEUnpd3v5fPAv4XCKrByk7cj4jCYadN+5dB2zr0n4l9TNl0F25T4RBtqTO/7LxbOxNJjGuDS4uIzOiDB0AU/wD0IOkppavh3+PzwKmJpujJxeotnbNc50v8IBFjqT0Xf4DsxToUKNTC0oZVpMNdou41MoDnneZIK4Vu1iKj2gGG3MNLzYEaC97L672JqmpgMO95ILmvsYkDO6AeCy8ROdd3n5W4HbAVJxm2+RxWO2eBJLI6ghaers2o6ctM8iRlHqbL69iaLXfm9BPutHtDZgfbUb9VXVBcWarrvgj4FjdkPw9Z9QkEC1TJcNnieXHcvFjcXWBaGvIaW8GzIJBvEr7zX7MUalKpSc2G1GFpgcd6+Kdotl/hsTXogeGg9rJAgElgcCOoKsRvD6XYpTV6ibNZSrPD2uc9xhwJlxPsujaQQCLg6LlXuXSUTAogaVKTSOuUH6FW8HiXCeWWz9zhiktPMzFJUUlslQlUxslNrZ5JufuCiwIfG5ShJMASTKRSAhNJNIBJtElJCAM/cjmhedCVh3GmkqUhAmkmmAKwpVtCAAIVPZCAmAJhNY8VUNNjnjKcrXGCZNhrHCYUalSNNZpDSudz2Gw5o06mKcLv8NMEhstb8RBPO3ksPaTbTnPbcuewEgNNmg2klZ3VQzBNLnSKVJovuMXPzXCja/eMqvFjnNnWOWBlI8p9V5WVTr6kqkl82XobOIm8LQSjvt+fU8WMxRfWqEHVpkuuZAC3my8PmpMJfcFh92LiX15fmJ1J8102wdpAUmtA3t/9VYlKTRkV4zyrL3G1oYHPXyNeWtOOpZiCQfyTJG7xBfdsJQp0mNY1uVrR4Wj5r4PgcZlfXdMO/HYePJ1Afdfe6T7DKMzouT91HXid8Dm6tp8/sjJE62HBYqgB0FgnBm5l3sOiirVAIaLncPqeSZdJ7gZS4+Q+6+JfxHDDtGtTAAc40g7mTRHi8vD6L7lR8Uk7j6L8+9rKn4nauJfowVoB5MIA9ijxOGI0jc4rEgtc4OsWGCOi21Gu4U6DjYN7hrD+kwft6rx7XysrvA8WYAzE30gT5I2hVOSgDYNawhreuqUY3dmRqWqqPedJVABMXG7ok03SptPd0yREsbHkhehw889OMny/h+xQQ6jphQmgrqMhJWVJSAFKaEgJKSZSQAkISSAEIQgCkwkgJgNMIVBMCgJViG8ym+BEfvqoT3AeqYQFSkIIXg2kCX08r9KNTO2LTJInyIWwWtxLyx9U5ZBp69RH0VHpBvqtN7/Zko31seyvtcPwzWPJBlucbnAefL281yuLxUlzWzBcY13p1qrnFoMtFzEQTaEm0PFETLQeccuKxlFQ0RflNt5pu5ip7mRJ+q6HYFB5aLxD9y05o5HMa0S1zpmb2ubHSAt5sTENDTefGfk5Dd1oVMRJuF4lYvOKlZky52JoFp4RDvmxfpHD1czGEaFjT6hfm81mOxLjpGIo7t5c9v1X3Psvi3VsNQI8R7sA8Bl8Mk+SHfY7YWTu0+Sfub6rVAFl4jiKdIFz3gPfumSB0F1i2gHPpVSD4aY1G820XLRCyOkekpYWShGKbavdvvtsvyjYw+GVRNtm/wAXtlha5jAZLSA6Yid/FcRh+zOHaS5xdVe4kuL3aySdBA3rcEwkCvP1uksVV3nbw0/n1LiwlFauKfjqcz21wrGbPxAY0NtT+EAaVWLids4YANI3Na3lP7C7ft5UjB1v0g+jmlcDtbHF+HkTJeGjrrYfvVb3QbboPxfsjI6VUuvglysb7vA6jRvJAuFhIXkpP7plMPBbFiTxcQBPmvYvZ4BrqrLg2Y2XL6+5CCqKkq2AipVKUhiQBKYEq5DeZSYEVGgLGm4yVKAAqUykkA0JIRYBqwpCakIpUpVBAFBUFIVBSAauFKoJgNeHFtDpG8PZp0C9y1+0wWua4WnXnAiPkqPSMW6OnNEl3GuxtJrXdGm56LBXbma0lsgNA1gzuI5qazKlVxPxAkAZfUwN63+F2aBBeASNG6gHieJWZRw86zSXm+C+cjq7wSvua7Z+zS1j6tQlx7t/dhxJgEG44cFk2Bh3lhho+Pff8rlusR8D/wBJ+S8ewHgNdLv95y/pP3XfG01RjGEeRzq1JOEma7G0nNdUcW6VGuEf5XTuX3D+Hjy/AtaDAL35jvibNC+Q1nNc94mc2YCY3yRu5L6h/C/FOOEIGoqMa0nTNkaSecD5qo5XLOHk20u78HZY3xNdRpiA1js3WNFyTxvXa0w1jYHmTqTvJXzjtLVrUC17HCO+ewtcPCWtDdd83dodw5rC6TwFTFVacadr2lv5Pv7zXoYmFCnOc9lb10/B660mFDpbrZYcZUNRmGqPEH8Mw2Ohc5xPzUbWddg5t/tCqUOhlUm4Snayb24q3eWZ4u1SEEvqtrfnf8HOfxAr/wCy1R/l+oXD7PfSLaMiqXhtrWHF7QOJkSV2PbxwcynTmM+XdMxeI6wtPgdlONTMXZgGgX/lgRGhzcty28FhFhYODlfZ7W3SfftsY2OxEZ9p6Wvx5NrkeXbLJoPg5mwb75Am/NejZtfvKTHTJLQHdRY+4WDtA4U6TgJ8WeDmJBAnivD2Wry2pT/pIcOjhf5e61+j5ZamXmvVaopqF6N+TN6VJVOUlbRwJKSaRUQKe4RbXksRQUigYikUFIpAIqUJpAJCJQi4GQKkOAA5pBSEUFQUqgmBQVhSFQUgGmEgqCYFAK+5BHiAI4ESqDIE71JMpOzVhiZSaPhaG9ArAQAqTSSVkB5tof4VT9JWm2Czwnwk/wA46/oW8xxim/p/8WHYlmu0/wAZ39oWT0nK0l4fdhKeWDNBjHFvePDSMr2EXO4yvr38J6oNEsacxa55/wCox8gF8zxwmnV0PiI9JX0H+F9fJUe0CA+gyo48BEFUJTu7FujUWZR8fsfSaxiG6nUrku02DFTvGvBiniKL2kRfOx0+4XT0HZiTvcbdNy0va57WisR+RlHN1Dw0n/uCpYpTtGVP6k9PNNe7RqYfq23Gp9L3vta6fpuaHG+FlFo0bhqI9l59svgs6j5NV7TqDKw/8vh//Ew/VajtLWqOe1tNhe6TAA+Z0A5lQwT/AFZt/wCMvdEsQlHE0ktll/3ND2qqOqVqOW/dsJs3NBIaG9N5nksTMYaTckB5dqSPEOq9GIc+hao0te7V0gnTdu8loMfjG5nCn8b4BdOu42OhhX21PRfNLGJUjKU3GStx9fn7EbertqMcWkACA2TGhkgei1vZ2plrj/iMcPMX+i8+Nrgua0fCwQOu8/vgEsHWNJ4e2JbMSJGhH1SpTyVIy4J/99C4qdqWU7UqSvJgcWagbmjM5hf4dImB8/Yr1lekjJSV0ZgipKZUFIBFIpkqCUhgSoTKSQAglCbRFz6JAV3XP2Qp74oSAuZTCkKgugigqCkKgpICgrCkKgmA1QRCYTAoKwkEwmAwrhSFSBng28Yw9Td8H9wWs2U/wPu743/2t581udqMmi8ATIHzC8myB/IcYF80+jAsXpKVqi8F7snntC3eaLPI+M+J51HLrzXa9hcVVGJpU2vGV7Wi8jdJnjouep0gckstPLjZdNsCmwYjDkNiK7ADI0LwOPBUpzV0TdVKcdOPdzsfZYbQZmJzOAtwlcxtrDuqYas8yS8VBA3gDvB70wttiqpqODd3qp7QUnDCOyGHU4ePCX6SDIGtnFQktPnA0Ur9l8dP3OLq4tjO6aPHV7qkxgEEAsptaYn9Oq8tbHmTmf8ABd51A4DqV4cM5lB/euDqtY0ywO7o02Nm5ytkxP0Wtx+JkSYYwS51/UkqllNTPyZg2/tBppuL7M/KDq5xHh8/kuLws5hnECcx18luMe4YrSzGA5TvJ3mN2i5mq2HEcDbzVmmsq0MurVVaTSexnxrg9znN4z1U07gReVFO1zpvWSm8MB4mb/vcpAlbQ33Z2nGc7rDnN/UfdbgrBgKTmsbmN8jLcIF/clZyvQ4el1VNRMytPPO/z582tZFYyrKgldjkIqCmSpJSGIpIJUkqNwMkCJ39d6xOdKSRKQxoRKEAegKgoCpdCJQKsKAqCkgLBWQKWtteyAmBaoKArCYFhUFKoJjLCoKQqCYE1mZmuHFpHsuawLnDDuh8XdJPWPourYybrT42m0US0t/O7+4/f3WV0l/Y/H7P8nSLS0fNGpo1nF7AHCIk/v0XQbEqVXYrDgVAGnE080kf1jlotRgsOzvB4dAPy9NbL1Y2izu3ATLncgIJYDr5rLnJNpBKSdRaei5n3ql3TL52dTUAXkx23MGwEVMZQZa+avTb83L8/wBTZ9CJLQOmX6KcFg6MPJkwIHm4fZdMrL/WI7LtF2uwlFx7h34lxdMMJDOUviPSVxmO2mcbUc51NrC1ogNJNrm8rWV2BpAF/CyLRq0H6owktqQDGdpE6C4n6e65yWhGp2omzwFUU2mbkOEDlZeYbFqVqjnSGszESbm3Ab93BLCtLS+TI43XV5QLAQBpCt4PCxqyblsrFeUnTd1xOL2jhfw7wx0uaWgggASD8UDjr7LoMHsmgyHNbnNiHOObmCBp7KO0eCNWm0sbmexwgAXIdY/Q+S9OzKL6dFjKkZmiLGbbh6K3Rw8YVpLLpo07bd2vn+wVKrlTTvrxPQVBVlY3FXisIlQUyVLiogSSpJQSpJSYASpSKRKiAyUpUyhIYShEoQI9LSqlCF1EMFehrY1/cIQmAy+UBCFICgrCEJjMgVBCEwKCoJoTQFAlc7t3EVGyJ/NbomhZ3SC7EfH7M6U12jyYXFPNTL00jSxI9ltauIc5pbEAvNgRuuLabkIWO7ZlpyJuKzrTkajHnLuIkaGPovFiq5DLEgnmeSEKc3oy1DdHnFTedYAk7gBAAA6LO3KbzNv6TPzQhJchs9bG26gRMfILp3DnPNCFpdH7y8itX2RDljKELSKxDisbihCgBJKxkoQkA8oiSsJQhQAglSUISGClCEgCUIQgR//Z" alt="" />
          <div className="userChatInfo">
            <span>John Smith</span>
            <p>Hello Peter</p>
          </div>
        </div>
    </div>
    
  );
};

export default Chats;
