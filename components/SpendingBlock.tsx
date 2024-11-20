import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SpendingType } from "@/types";
import Colors from "@/constants/Colors";
import { DollarIcon, GroceriesIcon } from "@/constants/Icons";

const SpendingBlock = ({ spendingList }: { spendingList: SpendingType[] }) => {
    let icon = <DollarIcon width={22} height={22} color={Colors.white} />;
  return (
    <View style={{ marginVertical: 20, alignItems: "flex-start" }}>
      <Text style={{ fontSize: 16, color: Colors.white }}>
        July <Text style={{ fontWeight: "700" }}>Spending</Text>
      </Text>

      {spendingList.map((item) => {
        if(item.name == 'Groceries'){
            icon = <GroceriesIcon width={22} height={22} color={Colors.white}/>;
        }
        return (
          <View
            style={styles.spendingWrapper}
            key={item.id}
          >
            <View
              style={styles.iconWrapper}
            >
              {icon}
            </View>
            <View
              style={styles.textWrapper}
            >
              <View style={{ gap: 5 }}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={{ color: Colors.white }}>{item.date}</Text>
              </View>
              <Text style={styles.itemName}>${item.amount}</Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default SpendingBlock;

const styles = StyleSheet.create({
    spendingWrapper:{
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10,
      },
      iconWrapper:{
        backgroundColor: Colors.grey,
        padding: 15,
        borderRadius: 58,
        marginRight: 10
      },
      textWrapper:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flex: 1,
      },
      itemName:{ 
        color: Colors.white, 
        fontSize: 16, 
        fontWeight: '600' 
    }

});
