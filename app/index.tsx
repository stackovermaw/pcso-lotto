import { ThemedText } from "@/components/ui/themed-text";
import { ThemedView } from "@/components/ui/themed-view";
import { ScrollView, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
  },
});

export default function Index() {
  return (
    <ThemedView style={styles.wrapper}>
      <ScrollView>
        <ThemedText style={{ textAlign: "justify" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea animi
          tempora mollitia debitis, porro fugit, distinctio accusamus qui
          maiores hic, reprehenderit repellat vitae id a fugiat odio itaque
          consequatur labore. Cumque illo nisi obcaecati tempora, deleniti
          veritatis unde, nam eligendi praesentium a ea ducimus temporibus
          excepturi officiis suscipit magni eum quaerat, totam aspernatur
          doloremque iusto sequi? Nulla eius quas eum iste ea, error eaque
          libero! Voluptate quam facere possimus excepturi! Dolor quaerat fugiat
          sint impedit, est unde nostrum? Sequi asperiores quaerat, ratione
          alias nesciunt, nisi illo quae deleniti, officia ullam reiciendis!
          Accusamus odio perferendis dicta expedita commodi quae aspernatur
          illum aliquid necessitatibus deserunt nobis, deleniti dolore quas vero
          sed eveniet officiis distinctio facere quo vitae ab eos quos tenetur
          enim! Deserunt, placeat? Temporibus, deleniti iste! Voluptate aliquam
          at neque commodi magnam, odio id sapiente deleniti delectus,
          distinctio fuga ut voluptas vitae assumenda nesciunt consequatur
          repudiandae tempore est ratione iure ullam? Praesentium explicabo
          quia, deserunt minima perspiciatis accusantium earum soluta, ipsa enim
          illum similique asperiores nobis omnis! Perferendis incidunt soluta,
          atque asperiores aliquam libero deserunt amet dolore tempore odio iste
          esse ea beatae voluptates excepturi, ullam necessitatibus aliquid
          molestiae odit repellendus quo accusamus pariatur exercitationem
          optio! Dolorum asperiores ea nihil eum ratione repudiandae laboriosam
          libero esse, hic cum nobis quidem nesciunt commodi error maxime
          blanditiis doloribus necessitatibus doloremque cumque inventore. Vitae
          laborum quod assumenda voluptatem molestiae eius inventore ea porro,
          praesentium illo quis adipisci iste earum itaque sit corporis rerum.
          Architecto nihil at doloremque quae possimus sed quam officiis
          recusandae, earum rerum numquam quisquam sint iusto quasi distinctio
          quo excepturi cum neque accusantium! Quam voluptates odit aperiam
          temporibus at delectus, autem corrupti sequi tempora, aliquid quidem
          perspiciatis excepturi et repudiandae expedita debitis eaque nihil
          quos eligendi ducimus, porro aut? Animi ipsam culpa laudantium
          perspiciatis repellat quisquam explicabo sequi tempora eum temporibus
          accusantium necessitatibus qui, iure doloribus ex itaque harum atque
          quia numquam, sapiente molestias. Optio cupiditate aliquid veniam
          dolorum consequuntur, voluptates et doloremque consectetur voluptatum
          ex excepturi eos ad sequi ipsum facilis quidem tempora modi. Ullam
          expedita atque excepturi adipisci quae corporis ut alias accusantium,
          esse quibusdam saepe. Quo maiores, iusto pariatur ipsa et ad
          voluptates ullam, optio commodi unde rerum magni tenetur recusandae
          dolores praesentium neque debitis similique numquam voluptatibus
          minima, fugit rem incidunt inventore! Quo, ea dolore pariatur rem iure
          officiis accusamus libero facere deleniti reiciendis sed error, quis
          beatae aperiam voluptatibus quia animi, amet ratione. Aperiam minima
          modi laboriosam porro esse, amet sit praesentium quisquam quibusdam
          eius, odit similique laudantium doloremque sequi nihil earum nostrum
          voluptatum at ipsum provident. Architecto unde possimus, blanditiis
          ullam eligendi accusamus nulla doloremque id magnam quas? At hic nobis
          delectus deserunt quidem praesentium tenetur possimus dolorem
          architecto reiciendis voluptatum, cum ipsum ea earum doloremque ipsa
          voluptates. Consequatur, praesentium. Repellendus odio reprehenderit
          perspiciatis ex itaque optio fugit, a ad ipsa doloremque, officiis
          nobis! Expedita nostrum laboriosam consectetur quod possimus id itaque
          nisi, dolores consequuntur error quasi quidem cum doloremque
          laudantium. At ea magni velit omnis, nemo aspernatur dignissimos
          perferendis eum, facilis consectetur aperiam tenetur?
        </ThemedText>
      </ScrollView>
    </ThemedView>
  );
}

export const options = {
  title: "Home",
};
