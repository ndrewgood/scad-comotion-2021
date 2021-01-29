import React from "react"

import "../styles/attendees.scss"

// company logos
import aligned from "../assets/logos/aligned.png"
import antidote from "../assets/logos/antidote.png"
import awesome from "../assets/logos/awesome.png"
import blackmath from "../assets/logos/black-math.png"
import blocktackle from "../assets/logos/block&tackle.png"
import bns from "../assets/logos/bns.png"
import buck from "../assets/logos/buck.png"
import coatofarms from "../assets/logos/coat-of-arms.png"
import cycymymy from "../assets/logos/cycymymy.png"
import dash from "../assets/logos/dash.png"
import dukeduck from "../assets/logos/duke&duck.png"
import eido from "../assets/logos/eido.png"
import facebook from "../assets/logos/facebook.png"
import fern from "../assets/logos/fern.png"
import fivestone from "../assets/logos/fivestone.png"
import framestore from "../assets/logos/framestore.png"
import frost from "../assets/logos/frost.png"
import ftcc from "../assets/logos/ftcc.png"
import gareso from "../assets/logos/gareso.png"
import giantant from "../assets/logos/giant-ant.png"
import goldenwolf from "../assets/logos/golden-wolf.png"
import gretel from "../assets/logos/gretel.png"
import gunner from "../assets/logos/gunner.png"
import huecry from "../assets/logos/hue&cry.png"
import imaginaryforces from "../assets/logos/if.png"
import iv from "../assets/logos/iv.png"
import laundry from "../assets/logos/laundry.png"
import leoburnett from "../assets/logos/leoburnett.png"
import leviathan from "../assets/logos/leviathan.png"
import linetest from "../assets/logos/linetest.png"
import lk from "../assets/logos/lk.png"
import logan from "../assets/logos/logan.png"
import losyork from "../assets/logos/los-york.png"
import meptik from "../assets/logos/meptik.png"
import meister from "../assets/logos/meister.png"
import mvsm from "../assets/logos/mvsm.png"
import nerdo from "../assets/logos/nerdo.png"
import notreal from "../assets/logos/not-real.png"
import oddfellows from "../assets/logos/odd-fellows.png"
import peprally from "../assets/logos/pep-rally.png"
import psypop from "../assets/logos/psypop.png"
import sarofsky from "../assets/logos/sarofsky.png"
import sb from "../assets/logos/sb.png"
import scholar from "../assets/logos/scholar.png"
import statedesign from "../assets/logos/state.png"
import themill from "../assets/logos/the-mill.png"
import tnb from "../assets/logos/tnb.png"
import trollback from "../assets/logos/trollback.png"
import wf from "../assets/logos/wf.png"
import wonderlust from "../assets/logos/wonderlust.png"
import nick from "../assets/logos/nick.png"
import hobbes from "../assets/logos/hobbes.png"

const Company = (props) => {
  return(
  <a rel="noreferrer" target="_blank" href={props.link}>
      <img src={props.logo} alt={props.name} />
      <p>{props.name}</p>
  </a>
  )
}

const Attendees = () => {
  return (
    <div className="attendeeMain" style={{ marginTop: "0" }}>
      <div className="attendeesContainer">
        <h1>Attendees</h1>
        <div className="logo-grid">
          <Company name="Aligned Media" logo={aligned} link="https://www.alignedmedia.com/" />
          <Company name="Antidote Studio" logo={antidote} link="https://antidotestudio.tv/" />
          <Company name="Awesome Inc" logo={awesome} link="https://www.awesomeinc.com/" />
          <Company name="Black Math" logo={blackmath} link="http://blackmath.com/" />
          <Company name="BLOCK & TACKLE" logo={blocktackle} link="https://www.blockandtackle.tv/" />
          <Company name="Brand New School" logo={bns} link="https://brandnewschool.com/" />
          <Company name="BUCK" logo={buck} link="https://buck.co/" />
          <Company name="Coat of Arms" logo={coatofarms} link="https://www.coatofarmspost.com/" />
          <Company name="Cycymymy" logo={cycymymy} link="https://www.cycymymy.com/" />
          <Company name="DASH" logo={dash} link="https://www.dashstudio.net/" />
          <Company name="Duke & Duck" logo={dukeduck} link="https://www.dukeduck.com/" />
          <Company name="Eido" logo={eido} link="https://www.eido.net/" />
          <Company name="Facebook FRL" logo={facebook} link="https://about.fb.com/realitylabs/" />
          <Company name="Fern" logo={fern} link="https://www.fern.team/" />
          <Company name="Fivestone Studios" logo={fivestone} link="https://fivestonestudios.com/" />
          <Company name="For the Culture Club" logo={ftcc} link="https://www.fortheculture.club/" />
          <Company name="Framestore" logo={framestore} link="https://www.framestore.com/?language=en" />
          <Company name="Frost" logo={frost} link="https://frostmotion.com/" />
          <Company name="Gareso" logo={gareso} link="https://gareso.com/" />
          <Company name="Giant Ant" logo={giantant} link="https://www.giantant.ca/" />
          <Company name="Golden Wolf" logo={goldenwolf} link="https://goldenwolf.tv/" />
          <Company name="Gretel" logo={gretel} link="https://gretelny.com/work/" />
          <Company name="Gunner" logo={gunner} link="https://www.gunner.work/" />
          {/* <Company name="Hobbes" logo={hobbes} link="https://hobbes.work/" /> */}
          <Company name="Hue & Cry" logo={huecry} link="https://www.hueandcry.tv/" />
          <Company name="Imaginary Forces" logo={imaginaryforces} link="https://imaginaryforces.com/" />
          <Company name="IV Studio" logo={iv} link="https://iv.studio/" />
          <Company name="Laundry" logo={laundry} link="https://laundrymat.tv/" />
          <Company name="Leo Burnett Group" logo={leoburnett} link="https://leoburnett.com/" />
          <Company name="Leviathan Design" logo={leviathan} link="https://www.lvthn.com/" />
          <Company name="Linetest Collective Inc." logo={linetest} link="http://linetest.tv/" />
          <Company name="Logan" logo={logan} link="https://logan.tv/" />
          <Company name="Los York" logo={losyork} link="https://losyork.tv/" />
          <Company name="Loyalkaspar" logo={lk} link="https://www.loyalkaspar.com/" />
          <Company name="ManvsMachine" logo={mvsm} link="https://mvsm.com/" />
          <Company name="Meister" logo={meister} link="https://meister.tv/" />
          <Company name="MEPTIK" logo={meptik} link="https://www.meptik.com/" />
          <Company name="The Mill" logo={themill} link="https://www.themill.com/" />
          <Company name="NERDO" logo={nerdo} link="http://www.nerdo.tv/" />
          <Company name="The New Blank" logo={tnb} link="https://thenewblank.com/" />
          <Company name="Nick Greenawalt" logo={nick} link="https://www.motionbynick.com/" />
          <Company name="Not Real" logo={notreal} link="https://notreal.tv/work" />
          <Company name="Oddfellows" logo={oddfellows} link="https://oddfellows.tv/" />
          <Company name="PepRally" logo={peprally} link="http://peprally.co/" />
          <Company name="Psyop" logo={psypop} link="https://www.psyop.com/" />
          <Company name="Sarah Beth Morgan" logo={sb} link="https://sarahbethmorgan.com/" />
          <Company name="Sarofsky" logo={sarofsky} link="https://sarofsky.com/" />
          <Company name="Scholar" logo={scholar} link="https://www.helloscholar.com/" />
          <Company name="STATE" logo={statedesign} link="http://statedesign.tv/" />
          <Company name="Trollback+Company" logo={trollback} link="https://trollback.com/" />
          <Company name="Wonderlust" logo={wonderlust} link="https://www.wonderlustmedia.ca/" />
          <Company name="World Famous" logo={wf} link="http://www.worldfamousinc.com/" />
        </div>
      </div>
      <h3>More Information Coming Soon...</h3>
    </div>
  )
}

export default Attendees
