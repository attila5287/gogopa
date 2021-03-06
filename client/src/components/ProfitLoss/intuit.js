import React from 'react'

export default function intuit() {
  return {
    Header: {
      Customer: '1',
      ReportName: 'ProfitAndLoss',
      Option: [ {
        Name: 'AccountingStandard',
        Value: 'GAAP'
      }, {
        Name: 'NoReportData',
        Value: 'false'
      } ],
      ReportBasis: 'Accrual',
      StartPeriod: '2015-06-01',
      Currency: 'USD',
      EndPeriod: '2015-06-30',
      Time: '2016-03-03T13:00:18-08:00',
      SummarizeColumnsBy: 'Total'
    },
    Rows: {
      Row: [ {
        Header: {
          ColData: [ {
            value: 'Income'
          }, {
            value: ''
          } ]
        },
        Rows: {
          Row: [ {
            Header: {
              ColData: [ {
                id: '45',
                value: 'Landscaping Services'
              }, {
                value: ''
              } ]
            },
            Rows: {
              Row: [ {
                Header: {
                  ColData: [ {
                    id: '46',
                    value: 'Job Materials'
                  }, {
                    value: ''
                  } ]
                },
                Rows: {
                  Row: [ {
                    ColData: [ {
                      id: '48',
                      value: 'Fountains and Garden Lighting'
                    }, {
                      value: '275.00'
                    } ],
                    type: 'Data'
                  }, {
                    ColData: [ {
                      id: '49',
                      value: 'Plants and Soil'
                    }, {
                      value: '150.00'
                    } ],
                    type: 'Data'
                  } ]
                },
                type: 'Section',
                Summary: {
                  ColData: [ {
                    value: 'Total Job Materials'
                  }, {
                    value: '425.00'
                  } ]
                }
              } ]
            },
            type: 'Section',
            Summary: {
              ColData: [ {
                value: 'Total Landscaping Services'
              }, {
                value: '425.00'
              } ]
            }
          }, {
            ColData: [ {
              id: '54',
              value: 'Pest Control Services'
            }, {
              value: '-100.00'
            } ],
            type: 'Data'
          } ]
        },
        type: 'Section',
        group: 'Income',
        Summary: {
          ColData: [ {
            value: 'Total Income'
          }, {
            value: '325.00'
          } ]
        }
      }, {
        group: 'GrossProfit',
        type: 'Section',
        Summary: {
          ColData: [ {
            value: 'Gross Profit'
          }, {
            value: '325.00'
          } ]
        }
      }, {
        Header: {
          ColData: [ {
            value: 'Expenses'
          }, {
            value: ''
          } ]
        },
        type: 'Section',
        group: 'Expenses',
        Summary: {
          ColData: [ {
            value: 'Total Expenses'
          }, {
            value: ''
          } ]
        }
      }, {
        group: 'NetOperatingIncome',
        type: 'Section',
        Summary: {
          ColData: [ {
            value: 'Net Operating Income'
          }, {
            value: '325.00'
          } ]
        }
      }, {
        group: 'NetIncome',
        type: 'Section',
        Summary: {
          ColData: [ {
            value: 'Net Income'
          }, {
            value: '325.00'
          } ]
        }
      } ]
    },
    Columns: {
      Column: [ {
        ColType: 'Account',
        ColTitle: '',
        MetaData: [ {
          Name: 'ColKey',
          Value: 'account'
        } ]
      }, {
        ColType: 'Money',
        ColTitle: 'Total',
        MetaData: [ {
          Name: 'ColKey',
          Value: 'total'
        } ]
      } ]
    }
  };
}
